<?php

use App\Http\Controllers\API\Auth\AuthController;
use App\Http\Controllers\API\Auth\EmailVerificationController;
use App\Http\Controllers\API\Auth\LoginController;
use App\Http\Controllers\API\Auth\PasswordController;
use App\Http\Controllers\API\Auth\RegisterController;
use App\Http\Controllers\API\CartController;
use App\Http\Controllers\API\CategoryController;
use App\Http\Controllers\API\CommentController;
use App\Http\Controllers\API\CourseController;
use App\Http\Controllers\API\EnrollmentController;
use App\Http\Controllers\API\LectureController;
use App\Http\Controllers\API\NotificationController;
use App\Http\Controllers\API\PaymentController;
use App\Http\Controllers\API\QuestionController;
use App\Http\Controllers\API\QuizController;
use App\Http\Controllers\API\QuizQuestionsController;
use App\Http\Controllers\API\ReviewController;
use App\Http\Controllers\API\SectionController;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\WishListController;
use App\Models\QuizQuestion;
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


// Route::post('auth/change_password', [PasswordController::class, 'updatePassword'])->middleware('auth:sanctum');

// Route::post('auth/send-verification-email', [EmailVerificationController::class, 'sendVerificationEmail'])->middleware('auth:sanctum');
// Route::get('verify-email/{id}/{hash}', [EmailVerificationController::class, 'verify'])->name('verification.verify')->middleware('auth:sanctum');



// Route::middleware('auth:sanctum')->post('auth/logout', function (Request $request) {
//     $request->user()->currentAccessToken()->delete();
//     return response()->noContent();
// });

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


// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
// Route::get('courses/search', [CourseController::class, 'search']);
// Route::get('courses/price_filter', [CourseController::class, 'priceFilter']);
// Route::get('courses/filter', [CourseController::class, 'filter']);

// Route::post('/enroll', [EnrollmentController::class, 'pay'])->middleware('auth:sanctum');

// Route::apiResource('courses', CourseController::class)->middleware('auth:sanctum');
// Route::apiResource('categories', CategoryController::class)->middleware('auth:sanctum');
// Route::apiResource('sections', SectionController::class)->middleware('auth:sanctum');
// Route::apiResource('lectures', LectureController::class);
// Route::apiResource('quizzes', QuizController::class);
// Route::apiResource('questions', QuizQuestionsController::class);
// Route::apiResource('reviews', ReviewController::class);


Route::post('auth/register', [AuthController::class, 'register']);
Route::post('auth/login', [AuthController::class, 'login']);

// Route::post('auth/forgot-password', [PasswordController::class, 'forgotPassword']);
// Route::post('auth/rest-password', [PasswordController::class, 'reset']);

Route::get('courses/filter', [CourseController::class, 'filter']);
Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/user-dashboard', [UserController::class, 'userDashboard']);
    Route::get('/instructor-dashboard', [UserController::class, 'instructorDashboard'])->middleware('instructor');
    Route::get('/admin-dashboard', [UserController::class, 'adminDashboard'])->middleware('admin');
    Route::get('/active-instructor-role', [UserController::class, 'activeInstructorRole']);
    Route::get('/active-admin-role', [UserController::class, 'activeAdminRole'])->middleware('admin');
    Route::get('/accept-course/{course}', [UserController::class, 'acceptCourse'])->middleware('admin');
    Route::get('/reject-course/{course}', [UserController::class, 'rejectCourse'])->middleware('admin');

    Route::put('/user/update-profile', [UserController::class, 'update']);
    Route::get('user/has-purchased/{course}', [UserController::class, 'hasPurchased']);
    // Route::apiResource('users', UserController::class);
    Route::get('/notifications', [NotificationController::class, 'index']);
    Route::get('/notifications/{id}/mark-read', [NotificationController::class, 'markRead']);

    Route::post('/enroll', [EnrollmentController::class, 'pay']);

    Route::post('auth/logout', [AuthController::class, 'logout']);
    Route::post('auth/change_password', [PasswordController::class, 'updatePassword']);
    Route::post(
        'auth/send-verification-email',
        [EmailVerificationController::class, 'sendVerificationEmail']
    );
    Route::get(
        'verify-email/{id}/{hash}',
        [EmailVerificationController::class, 'verify']
    )->name('verification.verify');


    Route::get('courses/access-content/{course}', [CourseController::class, 'accessContent']);
    Route::apiResource('courses', CourseController::class)->except(['index', 'show']);
    Route::apiResource('categories', CategoryController::class)->except(['index', 'show']);
    Route::apiResource('sections', SectionController::class);
    Route::apiResource('lectures', LectureController::class);
    Route::apiResource('quizzes', QuizController::class);
    Route::apiResource('questions', QuestionController::class);
    Route::apiResource('reviews', ReviewController::class)->only(['store', 'update', 'destroy']);
    Route::apiResource('comments', CommentController::class)->only(['store', 'destroy']);

    Route::get('wishlist', [WishListController::class, 'wishlist']);
    Route::get('add-to-wishlist/{course}', [WishListController::class, 'addToWishlist']);
    Route::delete('remove-from-wishlist/{course}', [WishListController::class, 'remove']);

    Route::get('cart', [CartController::class, 'cart']);
    Route::get('add-to-cart/{course}', [CartController::class, 'addToCart']);
    Route::delete('remove-from-cart/{course}', [CartController::class, 'remove']);
});

Route::apiResource('courses', CourseController::class)->only(['index', 'show']);
Route::apiResource('categories', CategoryController::class)->only(['index', 'show']);
