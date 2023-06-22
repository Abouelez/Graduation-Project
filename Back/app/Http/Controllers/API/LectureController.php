<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreLectureRequest;
use App\Http\Resources\LectureResource;
use App\Models\Lecture;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;

class LectureController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // $lectures = Lecture::with('section')->get();
        // return LectureResource::collection($lectures);
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
    public function store(StoreLectureRequest $request)
    {
        $this->mimesValidation($request->type, $request);

        $lecture = Lecture::create($request->except('content'));
        $content = $request->file('content');
        $contentName = 'lecture.' . $content->getClientOriginalExtension();
        $contentPath = 'courses/course' . $lecture->section->course->id . '/section' . $lecture->section->id . '/lecture' . $lecture->id . '/';

        Storage::disk('content')->putFileAs($contentPath, $content, $contentName);

        $lecture->content = $contentPath . $contentName;
        $lecture->save();

        return new LectureResource($lecture);
    }

    /**
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
     * Update the specified resource in storage.
     */
    public function update(Request $request, Lecture $lecture)
    {
        if ($lecture->section->course->isPublished()) {
            return response()->json(['message' => 'The course is published, so cannot be updated.'], Response::HTTP_FORBIDDEN);
        }

        $lecture->update($request->except('content'));
        if ($request->hasFile('content')) {
            $this->mimesValidation($request->type, $request);
            $contentPath = dirname($lecture->content);
            Storage::disk('content')->deleteDirectory($contentPath);


            $content = $request->file('content');
            $contentName = 'lecture' . '.' . $content->getClientOriginalExtension();

            Storage::disk('content')->putFileAs($contentPath, $content, $contentName);
            $lecture->content = $contentPath . '/' . $contentName;
            $lecture->save();
        }

        return new LectureResource($lecture);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Lecture $lecture)
    {
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
