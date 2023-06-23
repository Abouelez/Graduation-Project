<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Controllers\ImageHelper;
use App\Http\Requests\PriceFilterRequest;
use App\Http\Requests\StoreCourseRequest;
use App\Http\Requests\UpdateCourseRequest;
use App\Http\Resources\CourseResource;
use App\Models\Course;
use Illuminate\Contracts\Cache\Store;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;
use Image;

class CourseController extends Controller
{
    use ImageHelper;
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $numOfCoursePerPage = $request->courses_per_page ?? 10;
        $courses = Course::accepted()
            ->with(['category', 'subCategory', 'instructor'])
            ->paginate($numOfCoursePerPage);
        return  CourseResource::collection($courses);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCourseRequest $request)
    {
        $data = $request->except('thumbnail');
        $course = Course::create($data);

        $uploadedImage = $request->file('thumbnail');
        $resizedImage = Image::make($uploadedImage)->resize(300, 200);
        $imageName = 'thumbnail.' . $uploadedImage->getClientOriginalExtension();
        $imagePath = 'courses/course' . $course->id . '/' . $imageName;
        Storage::disk('content')->put($imagePath, $resizedImage->encode());

        $course->thumbnail = $imagePath;
        $course->save();

        return new CourseResource($course);
    }

    /**
     * Display the specified resource.
     */
    public function show(Course $course)
    {
        return new CourseResource($course->load(['category', 'subCategory', 'instructor', 'sections.lectures', 'sections.quizzes', 'sections.quizzes.questions']));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCourseRequest $request, Course $course)
    {
        $data = $request->except('thumbnail');
        $course->update($data);


        if ($request->hasFile('thumbnail')) {
            $uploadedImage = $request->file('thumbnail');
            $resizedImage = Image::make($uploadedImage)->resize(300, 200);
            $imageName = 'thumbnail.' . $uploadedImage->getClientOriginalExtension();
            $imagePath = 'courses/course' . $course->id . '/' . $imageName;

            if (Storage::disk('content')->exists($imagePath)) {
                Storage::disk('content')->delete($imagePath);
            }

            Storage::disk('content')->put($imagePath, $resizedImage->encode());

            $course->thumbnail = $imagePath;
            $course->save();
        }

        return new CourseResource($course);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Course $course)
    {
        if ($course->isPublished()) {
            return response()->json(['message' => 'The course is published and cannot be deleted.'], Response::HTTP_FORBIDDEN);
        }
        $course->delete();
        return response(null, Response::HTTP_NO_CONTENT);
    }


    public function search(Request $request)
    {
        $keyword = $request->input('keyword');
        $results = Course::where('title', 'LIKE', "%$keyword%")
            ->orWhere('description', 'LIKE', "%$keyword%")
            ->get();


        return CourseResource::collection($results);
    }

    public function priceFilter(PriceFilterRequest $request)
    {
        //We will accept value like this 199.99 and we convert it to 19999 like as we store in database
        $min = $request->min * 100;
        $max = $request->max * 100;
        $numOfCoursePerPage = $request->courses_per_page ?? 10;
        $results = Course::filterByPrice($min, $max)->paginate($numOfCoursePerPage);
        return CourseResource::collection($results);
    }
}
