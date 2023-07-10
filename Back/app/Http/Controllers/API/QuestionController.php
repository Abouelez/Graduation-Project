<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreQuestionRequest;
use App\Http\Requests\StoreQuizQuestionRequest;
use App\Http\Requests\UpdateQuestionRequest;
use App\Http\Requests\UpdateQuizQuestionRequest;
use App\Http\Resources\QuestionResource;
use App\Http\Resources\QuizQuestionResource;
use App\Models\Question;
use App\Models\Questions;
use App\Models\QuizQuestion;
use Illuminate\Http\Request;
use Illuminate\Http\Response;


/**
 * @group QuizQuestions
 * 
 * Managing QuizQuestions
 * @authenticated
 */
class QuestionController extends Controller
{
    /**
     * Get questions
     * 
     * List all questions.
     */
    public function index()
    {
        $quizQuestions = Question::with('quiz')->get();
        return QuestionResource::collection($quizQuestions);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Create question
     * 
     * Store a newly created question in QUIZ.
     * @bodyParam question string required Question text. Example Is HTML used to style web pages
     * @bodyParam answer string required One Char (A, B, C or D). Example: A
     * @bodyParam A string required First answer. 
     * @bodyParam B string required Second answer. 
     * @bodyParam A string Third answer. 
     * @bodyParam A string Forth answer. 
     * @bodyParam quiz_id integer required.
     * 
     * @response status=201 {"data":{"id":2,"question":"question","answer":"A","A":"True","B":"False","C":null,"D":null}}
     * @response status=422 {"message":"The answer field is required. (and 1 more error)","errors":{"answer":["The answer field is required."],"quiz_id":["The quiz id field is required."]}}

     * 
     */
    public function store(StoreQuestionRequest $request)
    {
        $quizQuestion = Question::create($request->all());
        return new QuestionResource($quizQuestion);
    }

    /**
     * Display the specified resource.
     */
    public function show(Question $question)
    {
        return new QuestionResource($question);
    }

    /**
     * Display question
     * 
     * Show the form for editing the specified resource.
     */
    public function edit(Question $question)
    {
        //
    }

    /**
     * Update question
     * 
     * Update the specified resource in storage.
     * @bodyParam answer string required One Char (A, B, C or D). Example: A
     * @bodyParam A string required First answer. 
     * @bodyParam B string required Second answer. 
     * @bodyParam A string Third answer. 
     * @bodyParam A string Forth answer. 
     * 
     * @response status=201 {"data":{"id":2,"question":"question","answer":"A","A":"True","B":"False","C":null,"
     * @response status=422 {"message":"The question field is required. (and 3 more errors)","errors":{"question":["The question field is required."],"answer":["The answer field is required."],"A":["The a field is required."],"B":["The b field is required."]}}
     */
    public function update(UpdateQuestionRequest $request, Question $question)
    {
        $this->authorize('update', $question);
        $question->update($request->validated());
        return new QuestionResource($question);
    }

    /**
     * Delete Question
     * 
     * Remove the specified resource from storage.
     * 
     * @response status=204
     */
    public function destroy(Question $question)
    {
        $this->authorize('delete', $question);

        if ($question->course()->isPublished()) {
            return response()->json(['message' => 'The course is published, so cannot be updated.'], Response::HTTP_FORBIDDEN);
        }
        $question->delete();
        return response(null, Response::HTTP_NO_CONTENT);
    }
}
