<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCommentRequest;
use App\Http\Resources\CommentResource;
use App\Models\Comment;
use App\Models\Course;
use App\Notifications\CommentNotification;
use App\Policies\CommentPolicy;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

/**
 * @group Comments
 * 
 * Managing Comments
 */
class CommentController extends Controller
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
    public function store(StoreCommentRequest $request)
    {

        $user = $request->user();
        $course = Course::findOrFail($request->course_id);
        $instructor = $course->instructor;

        $comment = Comment::create(
            [
                'course_id' => $request->course_id,
                'user_id' => $user->id,
                'comment_text' => $request->comment_text,
                'parent_id' => $request->parent_id
            ]
        );
        $instructor->notify(new CommentNotification($course, $comment));


        return response()->json([
            'message' => 'comment published',
            'comment' => new CommentResource($comment->load(['user']))
        ], Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     */
    public function show(Comment $comment)
    {
        return new CommentResource($comment->load('user', 'course'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Comment $comment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Comment $comment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Comment $comment)
    {
        $this->authorize('delete', $comment);
        $comment->delete();
        return response(null, Response::HTTP_NO_CONTENT);
    }
}
