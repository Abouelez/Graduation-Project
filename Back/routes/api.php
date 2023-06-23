<?php

use App\Http\Controllers\API\CategoryController;
use App\Http\Controllers\API\CourseController;
use App\Http\Controllers\API\LectureController;
use App\Http\Controllers\API\QuizController;
use App\Http\Controllers\API\QuizQuestionsController;
use App\Http\Controllers\API\SectionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('courses/search', [CourseController::class, 'search']);
Route::get('courses/price_filter', [CourseController::class, 'priceFilter']);
Route::apiResource('courses', CourseController::class);
Route::apiResource('categories', CategoryController::class);
Route::apiResource('sections', SectionController::class);
Route::apiResource('lectures', LectureController::class);
Route::apiResource('quizzes', QuizController::class);
Route::apiResource('questions', QuizQuestionsController::class);
