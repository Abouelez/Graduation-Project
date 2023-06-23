<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreSectionRequest;
use App\Http\Requests\UpdateSectionRequest;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\SectionResource;
use App\Models\Section;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class SectionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $sections = Section::with(['lectures', 'quizzes', 'quizzes.questions'])->get();
        return SectionResource::collection($sections);
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
    public function store(StoreSectionRequest $request)
    {
        $section = Section::create($request->all());
        return new SectionResource($section);
    }

    /**
     * Display the specified resource.
     */
    public function show(Section $section)
    {
        return new CategoryResource($section->load('lectures', 'quizzes', 'quizzes.questions'));
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
    public function update(UpdateSectionRequest $request, Section $section)
    {
        $section->update($request->validated());
        return new SectionResource($section);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Section $section)
    {
        if ($section->course->accepted()) {
            return response()->json(['message' => 'The course is published, so section cannot be deleted.'], Response::HTTP_FORBIDDEN);
        }
        $section->delete();
        return response(null, Response::HTTP_NO_CONTENT);
    }
}