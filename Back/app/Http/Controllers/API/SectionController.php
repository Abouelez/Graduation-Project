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

/**
 * @group Sections
 * 
 * Managing Sections
 * @authenticated
 */
class SectionController extends Controller
{
    /**
     * Get sections
     * 
     * List all sections.
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
     * Create section
     * 
     * Store a newly created section in storage.
     * 
     * @bodyParam course_id integer required Course which section belongs to. Example: 1
     * @bodyParam title string required Title of section. Example: Section 1
     * @response status=201 {"data":{"id":2,"title":"Section 1"}}
     * @response status=422 {"message":"The title field is required. (and 1 more error)","errors":{"title":["The title field is required."],"course_id":["The course id field is required."]}}
     */
    public function store(StoreSectionRequest $request)
    {
        $section = Section::create($request->all());
        return new SectionResource($section);
    }

    /**
     * Display section
     * 
     * Display the specified section.
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
     * Update section
     * 
     * Update the specified section in storage.
     * 
     * @bodyParam title string required New title of section. Example: new title
     * @response status=200 {"data":{"id":2,"title":"new title"}}
     * @response status=422 {"message":"The title field is required.","errors":{"title":["The title field is required."]}}
     */
    public function update(UpdateSectionRequest $request, Section $section)
    {
        $this->authorize('update', $section);

        $section->update($request->validated());
        return new SectionResource($section);
    }

    /**
     * Delete section
     * 
     * Remove the specified section from storage.
     * 
     * @response status=204
     */
    public function destroy(Section $section)
    {
        $this->authorize('update', $section);

        if ($section->course->accepted()) {
            return response()->json(['message' => 'The course is published, so section cannot be deleted.'], Response::HTTP_FORBIDDEN);
        }
        $section->delete();
        return response(null, Response::HTTP_NO_CONTENT);
    }
}
