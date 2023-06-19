<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Controllers\ImageHelper;
use App\Http\Requests\StoreCourseRequest;
use App\Http\Requests\UpdateCourseRequest;
use App\Http\Resources\CourseResource;
use App\Models\Course;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CourseController extends Controller
{
    use ImageHelper;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $courses = Course::accepted()->with(['category', 'instructor', 'subCategory'])->paginate(5);
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
        $imagePath = $this->saveImage($uploadedImage, 'thumbnail', 'courses/course' . $course->id);

        $course->thumbnail = $imagePath;
        $course->save();


        return new CourseResource($course);
    }

    /**
     * Display the specified resource.
     */
    public function show(Course $course)
    {
        return new CourseResource($course->load(['category', 'instructor', 'subCategory']));
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
            $imagePath = $this->saveImage($uploadedImage, 'thumbnail', 'courses/course' . $course->id);

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
}
