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
     * Store a newly created Quiz in storage. 
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
     * Update the specified Quiz in storage.
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
     * Remove the specified resource from storage.
     */
    public function destroy(Quiz $quiz)
    {
        $this->authorize('delete', $quiz);

        if ($quiz->section->course->isPublished()) {
            return response()->json(['message' => 'The course is published, so quiz cannot be deleted.'], Response::HTTP_FORBIDDEN);
        }
    }
}
