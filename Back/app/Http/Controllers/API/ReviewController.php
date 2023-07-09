<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreReviewRequest;
use App\Http\Resources\ReviewResource;
use App\Models\Review;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

/**
 * @group Reviews
 * 
 * Managing Reviews
 */
class ReviewController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
    public function store(StoreReviewRequest $request)
    {
        
        $data = $request->validated();
        $review = Review::create(
            array_merge(
                $data,
                ['user_id' => auth()->user()->id]
            )
        );
        return new ReviewResource($review);
    }

    /**
     * Display the specified resource.
     */
    public function show(Review $review)
    {
        return new ReviewResource($review->load(['user', 'course']));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Review $review)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Review $review)
    {
        $this->authorize('update', $review);
        $request->validate([
            'rate' => 'required|integer|min:1|max:5',
            'comment' => 'required|string|max:255'
        ]);

        $review->update([
            'rate' => $request->rate,
            'comment' => $request->comment
        ]);

        return new ReviewResource($review);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Review $review)
    {
        $this->authorize('delete', $review);

        $review->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
