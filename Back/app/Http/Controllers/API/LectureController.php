<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreLectureRequest;
use App\Http\Requests\UpdateLectureRequest;
use App\Http\Resources\LectureResource;
use App\Models\Lecture;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;

/**
 * @group Lectures
 * 
 * Managing Lectures
 * @authenticated
 */
class LectureController extends Controller
{
    /**
     * Get Lectures
     * 
     * Display a listing of the resource.
     */
    public function index()
    {
        $lectures = Lecture::with('section')->get();
        return LectureResource::collection($lectures);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Create Lecture
     * 
     * Create a newly lecture within a course.
     * @bodyParam title string required Title of lecture. Example: lec 1
     * @bodyParam type string required [video or text]. Example: video
     * @bodyParam section_id integer require. Example: 1
     * @bodyParam content file Content of lecture
     * @response status=201 {"data":{"id":2,"title":"new lec","type":"video","content":"/storage/content/courses/course1/section1/lecture2/lecture.mkv"}}
     * @response status=422 {"message":"The title field is required. (and 3 more errors)","errors":{"title":["The title field is required."],"type":["The type field is required."],"section_id":["The section id field is required."],"content":["The content field is required."]}}
     */
    public function store(StoreLectureRequest $request)
    {
        $this->mimesValidation($request->type, $request);

        $lecture = Lecture::create($request->except('content'));
        $content = $request->file('content');
        $contentName = 'lecture.' . $content->getClientOriginalExtension();
        $contentPath = 'public/content/courses/course' . $lecture->section->course->id . '/section' . $lecture->section->id . '/lecture' . $lecture->id . '/';

        Storage::putFileAs($contentPath, $content, $contentName);


        $lecture->content = Storage::url($contentPath . $contentName);
        $lecture->save();

        return new LectureResource($lecture);
    }

    /**
     * Display Lecture
     * 
     * Display the specified resource.
     */
    public function show(Lecture $lecture)
    {
        return new LectureResource($lecture->load('section'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Lecture $lecture)
    {
        //
    }

    /**
     * Update Lecture
     * 
     * Update Lecture in course.
     * @bodyParam title string required Title of lecture. Example: lec 1
     * @bodyParam type string required [video or text]. Example: video
     * @bodyParam content file Content of lecture
     * @response status=200 {"data":{"id":2,"title":"new lec edited","type":"video","content":"/storage/content/courses/course1/section1/lecture2/lecture.mkv"}}
     * @response status=422 {"message":"The title field is required. (and 1 more error)","errors":{"title":["The title field is required."],"type":["The type field is required."]}}
     */
    public function update(UpdateLectureRequest $request, Lecture $lecture)
    {
        $this->authorize('update', $lecture);

        if ($lecture->section->course->isPublished()) {
            return response()->json(['message' => 'The course is published, so cannot be updated.'], Response::HTTP_FORBIDDEN);
        }

        $lecture->update($request->except('content'));
        if ($request->hasFile('content')) {
            $this->mimesValidation($request->type, $request);

            // $contentPath = dirname($lecture->content);
            // Storage::disk('content')->deleteDirectory($contentPath);



            $content = $request->file('content');
            $contentName = 'lecture' . '.' . $content->getClientOriginalExtension();

            $contentPath = 'public/content/courses/course' . $lecture->section->course->id . '/section' . $lecture->section->id . '/lecture' . $lecture->id . '/';

            if (Storage::exists($contentPath . $contentName)) {
                Storage::delete($contentPath . $contentName);
            }

            Storage::putFileAs($contentPath, $content, $contentName);
            $lecture->content = Storage::url($contentPath . $contentName);
            $lecture->save();
        }

        return new LectureResource($lecture);
    }

    /**
     * Delete Lecture
     * 
     * Remove Lecture from course.
     * @response status=204
     */
    public function destroy(Lecture $lecture)
    {
        $this->authorize('delete', $lecture);

        if ($lecture->section->course->isPublished()) {
            return response()->json(['message' => 'The course is published, so lecture cannot be deleted.'], Response::HTTP_FORBIDDEN);
        }
        $contentPath = $lecture->content;
        Storage::disk('content')->deleteDirectory(dirname($contentPath));

        $lecture->delete();
        return response(null, Response::HTTP_NO_CONTENT);
    }

    public function mimesValidation($type, Request $request)
    {
        if ($type == 'video') {
            $request->validate([
                'content' => 'mimetypes:video/*'
            ]);
        } else if ($type == 'text') {
            $request->validate([
                'content' => 'mimetypes:text/plain,text/csv,application/pdf'
            ]);
        } else {
            return response()->json(['message' => 'Invalid content type.'], 422);
        }
    }
}
