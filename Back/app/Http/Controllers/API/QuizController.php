<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreQuizRequest;
use App\Http\Requests\UpdateQuizRequest;
use App\Http\Resources\QuizResource;
use App\Models\Quiz;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class QuizController extends Controller
{
    /**
     * Display a listing of the resource.
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
     * Store a newly created resource in storage.
     */
    public function store(StoreQuizRequest $request)
    {
        $quiz = Quiz::create($request->all());
        return new QuizResource($quiz->load('questions'));
    }

    /**
     * Display the specified resource.
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
     * Update the specified resource in storage.
     */
    public function update(UpdateQuizRequest $request, Quiz $quiz)
    {
        $quiz->update($request->validated());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Quiz $quiz)
    {
        if ($quiz->section->course->isPublished()) {
            return response()->json(['message' => 'The course is published, so quiz cannot be deleted.'], Response::HTTP_FORBIDDEN);
        }
    }
}
