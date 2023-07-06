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
     * Send verification link to email
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
