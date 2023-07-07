<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\CourseResource;
use App\Http\Resources\UserResource;
use App\Models\Category;
use App\Models\Course;
use App\Models\User;
use App\Notifications\CoursePublishedNotificaion;
use App\Notifications\CoursePublishedNotification;
use App\Notifications\CourseRejectedNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;


/**
 * @group Users
 * 
 * Managing Users
 */
class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        return new UserResource($user->load('courses'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRequest $request)
    {
        $user = $request->user();

        $user->update($request->except('avatar'));

        if ($request->hasFile('avatar')) {
            $uploadedImage = $request->file('avatar');
            $resizedImage = Image::make($uploadedImage)->resize(100, 100);
            $imageName = 'avatar.' . $uploadedImage->getClientOriginalExtension();
            $imagePath = 'users/user' . $user->id . '/' . $imageName;

            if (Storage::disk('content')->exists($imagePath)) {
                Storage::disk('content')->delete($imagePath);
            }

            Storage::disk('content')->put($imagePath, $resizedImage->encode());
        }

        $user->avatar = $imagePath;
        $user->save();

        return new UserResource($user);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
    }


    public function UserDashboard()
    {
        /** @var User $user */
        $user = auth()->user();
        return new UserResource($user->load(['courses', 'cart', 'wishes']));
    }

    public function instructorDashboard()
    {
        /** @var User $user */
        $user = auth()->user();
        return new UserResource($user->load(['createdCourses']));
    }

    public function adminDashboard(Request $request)
    {
        $limit = $request->limit ?? 10;
        $categories = Category::with(['parent', 'children'])->get();
        $courses = Course::notReviewed()->with(['category', 'subCategory', 'instructor'])->paginate($limit);

        return [
            'categories' => CategoryResource::collection($categories),
            'courses_to_review' => CourseResource::collection($courses)
        ];
    }

    public function acceptCourse(Request $request)
    {
        $course = Course::findOrFail($request->course_id);
        $course->AC = 1;
        $course->save();

        $user = $course->instructor;
        $user->notify(new CoursePublishedNotification($course));

        return response()->json([
            'notification' => 'Course published successfully',
        ], 200);
    }

    public function rejectCourse(Request $request)
    {
        $course = Course::findOrFail($request->course_id);
        $course->AC = 0;
        $course->save();

        $user = $course->instructor;
        $user->notify(new CourseRejectedNotification($course));

        return response()->json([
            'notification' => 'Course Rejected',
        ], 200);
    }
    public function activeInstructorRole()
    {
        /** @var User $user */
        $user = auth()->user();
        $user->is_instructor = 1;
        $user->save();
    }

    public function activeAdminRole(Request $request)
    {
        $user = User::where('email', $request->email)->firstOrFail();
        $user->is_admin = 1;
        $user->save();
    }
}
