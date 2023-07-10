<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreQuizRequest;
use App\Http\Requests\UpdateQuizRequest;
use App\Http\Resources\QuizResource;
use App\Models\Quiz;
use Illuminate\Http\Request;
use Illuminate\Http\Response;


/**
 * @group Quizzes
 * 
 * Managing Quizzes
 * @authenticated
 */
class QuizController extends Controller
{
    /**
     * Get Quizzes
     * 
     * List all Quizzes.
     */
    public function index()
    {
        $quizzes = Quiz::with('questions')->get();
        return QuizResource::collection($quizzes);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Create Quiz
     * 
     * Create a newly quiz within a create. 
     * @bodyParam title string required Title of quiz. Example: quiz 1
     * @bodyParam section_id integer required Section which quiz belongs to. Example: 1
     * @response status=201 {"data":{"id":2,"title":"quiz 1","questions":[]}}
     * @response status=422 {"message":"The title field is required. (and 1 more error)","errors":{"title":["The title field is required."],"section_id":["The section id field is required."]}}
     */
    public function store(StoreQuizRequest $request)
    {
        $quiz = Quiz::create($request->all());
        return new QuizResource($quiz->load('questions'));
    }

    /**
     * Display Quiz
     * 
     * Display the specified Quiz.
     */
    public function show(Quiz $quiz)
    {
        return new QuizResource($quiz->load('questions'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Quiz $quiz)
    {
        //
    }

    /**
     * Update Quiz
     * 
     * Update the  Quiz.
     * @bodyParam title string required Title of quiz. Example: quiz 1
     * @response status=200 {"data":{"id":2,"title":"quiz 1 new"}}
     * @response status=422 {"message":"The title field is required.","errors":{"title":["The title field is required."]}}

     */
    public function update(UpdateQuizRequest $request, Quiz $quiz)
    {
        $this->authorize('update', $quiz);

        $quiz->update($request->validated());
        return new QuizResource($quiz);
    }

    /**
     * Delete Quiz
     * 
     * Remove the specified Quiz from Course.
     * @response status=204
     */
    public function destroy(Quiz $quiz)
    {
        $this->authorize('delete', $quiz);

        if ($quiz->section->course->isPublished()) {
            return response()->json(['message' => 'The course is published, so quiz cannot be deleted.'], Response::HTTP_FORBIDDEN);
        }
        $quiz->delete();
        return response(null, Response::HTTP_NO_CONTENT);
    }
}
