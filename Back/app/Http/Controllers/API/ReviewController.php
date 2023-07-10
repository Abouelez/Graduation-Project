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
 * @authenticated
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
     * Review
     * 
     * Add a newly review.
     * 
     * @bodyParam course_id integer Course you want to rate. Example: 2
     * @bodyParam rate integer required From 1 to 5. Example: 3
     * @bodyParam comment string If you want to add something. Example: Great course
     * @response status=201 {"data":{"id":1,"rate":"4","comment":"Great course"}}
     * @response status=422 {"message":"The course id field is required. (and 1 more error)","errors":{"course_id":["The course id field is required."],"rate":["The rate field is required."]}}
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
     * Edit Review
     * 
     * Update the specified resource in storage.
     * 
     * @bodyParam rate integer required From 1 to 5. Example: 3
     * @bodyParam comment string If you want to add something. Example: Great course
     * @response status=201 {"data":{"id":1,"rate":"4","comment":"Great course"}}
     * @response status=422 {"message":"The course id field is required. (and 1 more error)","errors":{"course_id":["The course id field is required."],"rate":["The rate field is required."]}}
     */
    public function update(Request $request, Review $review)
    {
        $this->authorize('update', $review);
        $request->validate([
            'rate' => 'required|integer|min:1|max:5',
            'comment' => 'string|max:255'
        ]);

        $review->update([
            $request->all
        ]);

        return new ReviewResource($review);
    }

    /**
     * Remove
     * 
     * Remove the specified resource from storage.
     * 
     * @response status=204
     */
    public function destroy(Review $review)
    {
        $this->authorize('delete', $review);

        $review->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
