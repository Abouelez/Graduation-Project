<?php

use App\Http\Controllers\API\Auth\LoginController;
use App\Http\Controllers\API\Auth\RegisterController;
use App\Http\Controllers\API\CategoryController;
use App\Http\Controllers\API\CourseController;
use App\Http\Controllers\API\LectureController;
use App\Http\Controllers\API\QuizController;
use App\Http\Controllers\API\QuizQuestionsController;
use App\Http\Controllers\API\ReviewController;
use App\Http\Controllers\API\SectionController;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
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

Route::post('auth/register', RegisterController::class);
Route::post('auth/login', LoginController::class);
Route::middleware('auth:sanctum')->post('auth/logout', function (Request $request) {
    $request->user()->currentAccessToken()->delete();
    return response()->noContent();
});

// //Email verification
// Route::get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request) {
//     $request->fulfill();

//     return response()->json([
//         'msg' => 'Email sent'
//     ]);
// })->middleware(['auth:sanctum', 'signed'])->name('verification.verify');


// Route::post('/email/verification-notification', function (Request $request) {
//     $request->user()->sendEmailVerificationNotification();

//     return back()->with('message', 'Verification link sent!');
// })->middleware(['auth', 'throttle:6,1'])->name('verification.send');


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
Route::apiResource('reviews', ReviewController::class);
