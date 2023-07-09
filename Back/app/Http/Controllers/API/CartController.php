<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\CourseResource;
use App\Models\Course;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function cart()
    {
        /** @var User $user */
        $user = auth()->user();
        return CourseResource::collection($user->cart);
    }
    public function addToCart(Course $course)
    {
        /** @var User $user */
        $user = auth()->user();
        $user->cart()->attach($course->id);
        return response()->json([
            "message" => "Course added to cart",
            'course' => new CourseResource($course)
        ]);
    }

    public function remove(Course $course)
    {
        /** @var User $user */
        $user = auth()->user();
        $user->cart()->detach($course->id);
        return response()->json([
            "message" => "Course removed from cart",
        ]);
    }
}
