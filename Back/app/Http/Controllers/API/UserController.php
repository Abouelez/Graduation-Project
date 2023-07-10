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
use App\Notifications\NormalNotificaion;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;


/**
 * @group User Management
 * 
 * Managing Users
 * @authenticated
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
     * Update
     * 
     * Update Profile Data.
     * @bodyParam name string required New name of user. Example: Ali
     * @bodyParam email string required New email. Example: test@test.com
     * @bodyParam bio string some words about you. Example: PHP programmer
     * @bodyParam avatar file.
     * @response status=200 {"data":{"id":5,"name":"Abdo Abouelez","email":"new@gmail.com","avatar":"/storage/content/users/user5/avatar.jpeg","bio":"PHP programmer","is_instructor":1,"is_admin":0}}
     * @response status=422 {"message":"The name field is required. (and 1 more error)","errors":{"name":["The name field is required."],"email":["The email field is required."]}}
     */
    public function update(UpdateUserRequest $request)
    {
        $user = $request->user();

        $user->update($request->except('avatar'));

        if ($request->hasFile('avatar')) {
            $uploadedImage = $request->file('avatar');
            $resizedImage = Image::make($uploadedImage)->resize(100, 100);
            $imageName = 'avatar.' . $uploadedImage->getClientOriginalExtension();
            $imagePath = 'public/content/users/user' . $user->id . '/' . $imageName;

            if (Storage::exists($imagePath)) {
                Storage::delete($imagePath);
            }

            Storage::put($imagePath, $resizedImage->encode());
            $user->avatar = Storage::url($imagePath);
            $user->save();
        }

        return new UserResource($user);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
    }
    /**
     * Has Purchased
     * 
     * Check if user purchase a course
     * 
     * @response status=200 {"purchased":false}
     * @response status=200 {"purchased":true}
     */
    public function hasPurchased(Course $course)

    {
        /** @var User $user */
        $user = auth()->user();
        $purchased = ($user->hasPurchased($course->id))
            || ($user->id == $course->instructor->id);

        return response()->json([
            'purchased' => $purchased
        ]);
    }
    /**
     * User Dashboard
     * 
     * Dashboard for student
     * @response status=200 {"data":{"id":5,"name":"Abdo Abouelez","email":"new@gmail.com","avatar":"/storage/content/users/user5/avatar.jpeg","bio":"PHP programmer","is_instructor":1,"is_admin":0,"enrolled_courses":[],"cart":[]}}
     */
    public function UserDashboard()
    {
        /** @var User $user */
        $user = auth()->user();
        return new UserResource($user->load(['courses', 'cart', 'wishlist']));
    }

    /**
     * Instructor Dashboard
     * 
     * Dashboard for instructor
     * 
     * @response status=200 {"data":{"id":5,"name":"Abdo Abouelez","email":"new@gmail.com","avatar":"/storage/content/users/user5/avatar.jpeg","bio":"PHP programmer","is_instructor":1,"is_admin":0,"created-courses":[{"id":1,"title":"Molestiae et alias et officiis minus similique.","description":"Aut est esse quas minus. Autem quam voluptate voluptas recusandae facere. Nihil sint quas omnis non.","thumbnail":"https://via.placeholder.com/640x480.png/003333?text=rem","price":"66.07","published":null,"instructor":{"id":5,"name":"Abdo Abouelez","email":"new@gmail.com","avatar":"/storage/content/users/user5/avatar.jpeg","bio":"PHP programmer","is_instructor":1,"is_admin":0},"rate":"4.0","total_enrollments":0,"your_review":{"id":1,"rate":4,"comment":"Greate course"}},{"id":10,"title":"Sed voluptas tempore quidem.","description":"Aliquam adipisci et sit velit. Ducimus non asperiores autem dolorum ut. Dolores repellendus sunt necessitatibus pariatur. Et quo libero odio blanditiis.","thumbnail":"https://via.placeholder.com/640x480.png/0099ff?text=similique","price":"692.07","published":1,"instructor":{"id":5,"name":"Abdo Abouelez","email":"new@gmail.com","avatar":"/storage/content/users/user5/avatar.jpeg","bio":"PHP programmer","is_instructor":1,"is_admin":0},"rate":"0.0","total_enrollments":0,"your_review":null},{"id":19,"title":"Sit deserunt maxime quia quisquam.","description":"Officia officia dignissimos architecto. Ratione quia ratione tenetur occaecati. Voluptatem molestias voluptatem eos maxime vitae repudiandae aliquid.","thumbnail":"https://via.placeholder.com/640x480.png/00cc77?text=porro","price":"736.57","published":1,"instructor":{"id":5,"name":"Abdo Abouelez","email":"new@gmail.com","avatar":"/storage/content/users/user5/avatar.jpeg","bio":"PHP programmer","is_instructor":1,"is_admin":0},"rate":"0.0","total_enrollments":0,"your_review":null},{"id":20,"title":"Corrupti a placeat praesentium perferendis nobis eaque nostrum.","description":"Accusantium libero qui magnam dolor qui ipsam. In libero vero nisi velit quam et. Necessitatibus quia omnis cupiditate.","thumbnail":"https://via.placeholder.com/640x480.png/009944?text=qui","price":"17.84","published":1,"instructor":{"id":5,"name":"Abdo Abouelez","email":"new@gmail.com","avatar":"/storage/content/users/user5/avatar.jpeg","bio":"PHP programmer","is_instructor":1,"is_admin":0},"rate":"0.0","total_enrollments":0,"your_review":null},{"id":47,"title":"Dolore nesciunt quasi totam explicabo id.","description":"Reiciendis quia error voluptatem unde consequatur. Iste numquam necessitatibus delectus aut quo ut odio. Rerum quisquam odio ut odio ab quia culpa.","thumbnail":"https://via.placeholder.com/640x480.png/006655?text=sunt","price":"933.50","published":1,"instructor":{"id":5,"name":"Abdo Abouelez","email":"new@gmail.com","avatar":"/storage/content/users/user5/avatar.jpeg","bio":"PHP programmer","is_instructor":1,"is_admin":0},"rate":"0.0","total_enrollments":0,"your_review":null}]}}
     */

    public function instructorDashboard()
    {
        /** @var User $user */
        $user = auth()->user();
        return new UserResource($user->load(['createdCourses']));
    }
    /**
     * Admin Dashboard
     * 
     * Dashboard for admin
     * 
     * @response status=200 {"user":{"id":5,"name":"Abdo Abouelez","email":"new@gmail.com","avatar":"/storage/content/users/user5/avatar.jpeg","bio":"PHP programmer","is_instructor":1,"is_admin":1},"categories":[{"id":1,"name":"Eum autem quis assumenda dolorem.","parent":null,"children":[]},{"id":2,"name":"Illo sed at et asperiores perferendis.","parent":null,"children":[]},{"id":3,"name":"Quae autem sed aut.","parent":null,"children":[]},{"id":4,"name":"Suscipit rem nemo nemo ut quibusdam eligendi.","parent":null,"children":[]},{"id":5,"name":"Tempore natus distinctio quo soluta.","parent":null,"children":[]},{"id":6,"name":"Et doloremque dolores hic illo vel.","parent":null,"children":[]},{"id":7,"name":"Mollitia debitis a minus officiis eligendi ab.","parent":null,"children":[]},{"id":8,"name":"Ea ab qui enim repudiandae.","parent":null,"children":[]},{"id":9,"name":"Non corrupti ut sed et recusandae veniam.","parent":null,"children":[]},{"id":10,"name":"Magni enim enim omnis qui.","parent":null,"children":[]},{"id":11,"name":"Aut et rem architecto architecto dolores.","parent":null,"children":[]},{"id":12,"name":"Ut cumque ipsa corporis fugiat ducimus.","parent":null,"children":[]},{"id":13,"name":"Ex aperiam odit aperiam a sit eos architecto.","parent":null,"children":[]},{"id":14,"name":"Dolorum et deleniti qui inventore aut.","parent":null,"children":[]},{"id":15,"name":"Quod ut ullam quas laboriosam adipisci quia sit impedit.","parent":null,"children":[]}],"courses_to_review":[{"id":1,"title":"Molestiae et alias et officiis minus similique.","description":"Aut est esse quas minus. Autem quam voluptate voluptas recusandae facere. Nihil sint quas omnis non.","thumbnail":"https://via.placeholder.com/640x480.png/003333?text=rem","price":"66.07","published":null,"category":{"id":9,"name":"Non corrupti ut sed et recusandae veniam."},"sub_category":null,"instructor":{"id":5,"name":"Abdo Abouelez","email":"new@gmail.com","avatar":"/storage/content/users/user5/avatar.jpeg","bio":"PHP programmer","is_instructor":1,"is_admin":1},"rate":"4.0","total_enrollments":0,"your_review":{"id":1,"rate":4,"comment":"Greate course"}}]}
     */
    public function adminDashboard(Request $request)
    {
        $limit = $request->limit ?? 10;
        $categories = Category::with(['parent', 'children'])->get();
        $courses = Course::notReviewed()->with(['category', 'subCategory', 'instructor'])->paginate($limit);
        /** @var User $user */
        $user = auth()->user();
        return [
            'user' => new UserResource($user),
            'categories' => CategoryResource::collection($categories),
            'courses_to_review' => CourseResource::collection($courses)
        ];
    }
    /**
     * Accept Course
     * 
     * Accept course and publish it for students
     * @response status=200 {"notification":"Course published successfully"}
     */
    public function acceptCourse(Course $course)
    {
        $course->AC = 1;
        $course->save();

        $user = $course->instructor;
        $user->notify(new CoursePublishedNotification($course));

        return response()->json([
            'notification' => 'Course published successfully',
        ], 200);
    }
    /**
     * Reject Course
     * 
     * @response status=200 {"notification":"Course Rejected"}
     */
    public function rejectCourse(Course $course)
    {
        $course->AC = 0;
        $course->save();

        $user = $course->instructor;
        $user->notify(new CourseRejectedNotification($course));

        return response()->json([
            'notification' => 'Course Rejected',
        ], 200);
    }
    /**
     * Be instructor
     * 
     * Be insturctor and statrt creating courses and earn.
     * @response status=200 {"message":"Your are now instructor"}
     */
    public function activeInstructorRole()
    {
        /** @var User $user */
        $user = auth()->user();
        $user->is_instructor = 1;
        $user->save();
        return response()->json([
            'message' => "Your are now instructor"
        ]);
    }
    /**
     * Admin Role
     * 
     * Make user admin
     * @queryParam email string required email of user to be admin. Example: test@t.com
     * @response status=200 {"notification":"specified user  now instructor"}
     */
    public function activeAdminRole(Request $request)
    {
        $user = User::where('email', $request->email)->firstOrFail();
        $user->is_admin = 1;
        $user->save();
        $user->notify(new NormalNotificaion('You are now admin'));
        return response()->json([
            'notification' => "specified user  now instructor"
        ]);
    }
}
