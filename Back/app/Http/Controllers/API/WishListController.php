<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\CourseResource;
use App\Models\Course;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class WishListController extends Controller
{
    public function wishlist(){
        return 
    }
    public function addToWishlist(Course $course)
    {
        auth()->user()->wishlist()->attach($course->id);
        return response()->json([
            "message" => "Course added to wishlist",
            'course' => new CourseResource($course)
        ]);
    }

    public function remove(Course $course)
    {
        auth()->user()->wishlist()->detach($course->id);
        return response()->json([
            "message" => "Course removed from wishlist",
        ], Response::HTTP_NO_CONTENT);
    }
}
