<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\CourseResource;
use App\Models\Course;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class WishListController extends Controller
{
    public function wishlist()
    {
        /** @var User $user */
        $user = auth()->user();
        return CourseResource::collection($user->wishlist);
    }
    public function addToWishlist(Course $course)
    {
        /** @var User $user */
        $user = auth()->user();
        $user->wishlist()->attach($course->id);
        return response()->json([
            "message" => "Course added to wishlist",
            'course' => new CourseResource($course)
        ]);
    }

    public function remove(Course $course)
    {
        /** @var User $user */
        $user = auth()->user();
        $user->wishlist()->detach($course->id);
        return response()->json([
            "message" => "Course removed from wishlist",
        ]);
    }
}
