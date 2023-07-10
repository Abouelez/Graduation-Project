<?php

namespace App\Http\Controllers\API\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Auth\Events\Verified;
use Illuminate\Http\Request;

/**
 * @group Email Verification
 */
class EmailVerificationController extends Controller
{
    /**
     * Send Verification Email
     * 
     * Send verification link to your email.
     * 
     * @response status=200 {"status":"verification link sent"}
     * @response status=200 {"message":"Already Verified"}
     * @authenticated
     */
    public function sendVerificationEmail(Request $request)
    {
        if ($request->user()->hasVerifiedEmail()) {
            return [
                'message' => 'Already Verified'
            ];
        }

        $request->user()->sendEmailVerificationNotification();

        return ['status' => 'verification link sent'];
    }
    /**
     * Verify Email
     * 
     * Verify email for user
     * 
     * @response status=200 {"message":"Email has been Verified"}
     * @response status=200 {"message":"Email Already Verified"}
     * @authenticated
     */
    public function verify(Request $request)
    {
        if ($request->user()->hasVerifiedEmail()) {
            return [
                'message' => 'Email already verified'
            ];
        }

        if ($request->user()->markEmailAsVerified()) {
            event(new Verified($request->user()));
        }

        return [
            'message' => 'Email has been verified'
        ];
    }
}
