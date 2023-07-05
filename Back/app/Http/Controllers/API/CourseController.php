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
use Intervention\Image\Facades\Image;

/**
 * @group Courses
 * 
 * Managing Courses
 */

class CourseController extends Controller
{
    use ImageHelper;
    /**
     * Get Courses
     * 
     * Display a listing of all courses.
     * 
     * @queryParam courses_per_page Number of course per page. Example: 10
     * @queryParam page Which page to show. Example: 1
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
     * Create Course
     * 
     * Store a newly created Course in storage.
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
     * Display Course
     * 
     * Display the specified Course.
     */
    public function show(Course $course)
    {
        return new CourseResource($course->load(['category', 'subCategory', 'instructor', 'sections.lectures', 'sections.quizzes', 'sections.quizzes.questions', 'comments', 'comments.user', 'reviews', 'reviews.user']));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update Course
     * 
     * Update the specified Course in storage.
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
     * Delete Course
     * 
     * Remove the specified Course from storage.
     */
    public function destroy(Course $course)
    {
        if ($course->isPublished()) {
            return response()->json(['message' => 'The course is published and cannot be deleted.'], Response::HTTP_FORBIDDEN);
        }
        $course->delete();
        return response(null, Response::HTTP_NO_CONTENT);
    }

    /**
     * Search
     * 
     * Searches for course names and course descriptions and returns any courses that match the keyword
     * 
     * @queryParam keyword the word you are looking for. Example: HTML
     * @queryParam courses_per_page Number of course per page. Example: 10
     */

    public function search(Request $request)
    {
        $keyword = $request->input('keyword');
        $numOfCoursePerPage = $request->courses_per_page ?? 10;
        $results = Course::accepted()->where('title', 'LIKE', "%$keyword%")
            ->orWhere('description', 'LIKE', "%$keyword%")
            ->paginate($numOfCoursePerPage);
        return CourseResource::collection($results);
    }

    /**
     * Price Filter
     * 
     * Filter results based on min and max values
     * @hideFromQueryParams
     * @queryParam min number Minimum price. Example: 20
     * @queryParam max number Maximum price. Example: 1000
     * @queryParam order string In which order you want to see results. Example:asc
     * @queryParam courses_per_page Number of course per page. Example: 10
     */

    public function priceFilter(Request $request)
    {
        //The received value will be like this 199.99 and then convert it to 19999 like as we store in database
        $min = $request->input('min', 0) * 100;
        $max = $request->input('max', PHP_INT_MAX) * 100;
        $order = $request->input('order', 'desc');
        $numOfCoursePerPage = $request->courses_per_page ?? 10;
        $results = Course::filterByPrice($min, $max)->orderBy('price', $order)->paginate($numOfCoursePerPage);
        return CourseResource::collection($results);
    }
}
