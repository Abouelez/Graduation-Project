<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\NotificationResource;
use Illuminate\Http\Request;

/**
 * @group Notification
 * 
 * Manage Notification
 * @authenticated
 */
class NotificationController extends Controller
{
    /**
     * Get Notifications
     * 
     * Return unread notifications
     * 
     * @response status=200 [{"id":"11a67272-88b7-4755-8f44-8f54c79b1b91","data":{"course_id":51,"comment_id":2,"message":"A user has commented on the course."}}]
     */
    public function index(Request $request)
    {
        $notifications = $request->user()->unreadNotifications;

        return response()->json(NotificationResource::collection($notifications));
    }
    /**
     * Mark as read
     * 
     * Mark notification as read
     * @queryParam id string required
     * @response status=200 {"message":"Notification marked as read"}
     */
    public function markRead(Request $request, $id)
    {
        $notification = $request->user()->notifications()->findOrFail($id);
        $notification->markAsRead();

        return response()->json(['message' => 'Notification marked as read']);
    }
}
