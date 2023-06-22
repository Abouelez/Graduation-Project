<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreQuizQuestionRequest;
use App\Http\Requests\UpdateQuizQuestionRequest;
use App\Http\Resources\QuizQuestionResource;
use App\Models\QuizQuestion;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class QuizQuestionsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $quizQuestions = QuizQuestion::with('quiz')->get();
        return QuizQuestionResource::collection($quizQuestions);
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
    public function store(StoreQuizQuestionRequest $request)
    {
        $quizQuestion = QuizQuestion::create($request->all());
        return new QuizQuestionResource($quizQuestion);
    }

    /**
     * Display the specified resource.
     */
    public function show(QuizQuestion $quizQuestion)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(QuizQuestion $quizQuestion)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateQuizQuestionRequest $request, QuizQuestion $quizQuestion)
    {
        $quizQuestion->update($request->validated());
        return new QuizQuestionResource($quizQuestion);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(QuizQuestion $quizQuestion)
    {
        if ($quizQuestion->section->course->isPublished) {
            return response()->json(['message' => 'The course is published, so cannot be updated.'], Response::HTTP_FORBIDDEN);
        }
        $quizQuestion->delete();
    }
}
