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
     * Add Comment
     * 
     * Comment on course.
     * @authenticated
     * @bodyParam course_id integer required. Example: 2
     * @bodyParam comment_text string required Your comment. Example: Excellent course
     * 
     * @response status=201 {"message":"comment published","comment":{"id":1,"comment_text":"good","user":{"id":11,"name":"Abdulrahman","email":"abouelez10@gmail.com","is_instructor":1,"is_admin":1}}}
     * 
     * @response status=422{"message":"The course id field is required. (and 1 more error)","errors":{"course_id":["The course id field is required."],"comment_text":["The comment text field is required."]}}
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
     * Delete Comment
     * 
     * Remove the Comment resource from course.
     * @authenticated
     * @response status=204
     */
    public function destroy(Comment $comment)
    {
        $this->authorize('delete', $comment);
        $comment->delete();
        return response(null, Response::HTTP_NO_CONTENT);
    }
}
