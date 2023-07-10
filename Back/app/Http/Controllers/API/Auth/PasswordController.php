<?php

namespace App\Http\Controllers\API\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;

/**
 * @group Password EndPoints
 * 
 * Managing Password
 */
class PasswordController extends Controller
{
    /**
     * Change Password
     * 
     * Change your password with new one.
     * 
     * @bodyParam password string required. Example: newpassword
     * @bodyParam password string required. Example: newpassword
     * @authenticated
     * @response status=200 {"message":"Password updated successfully"}
     * @response status=422 {"message":"The old password field is required. (and 1 more error)","errors":{"old_password":["The old password field is required."],"password":["The password field confirmation does not match."]}}
     * 
     * @response status=401 {"message":"The password is incorrect."}

     */
    public function updatePassword(Request $request)
    {
        $request->validate([
            'old_password' => 'required',
            'password' => 'required|min:8|confirmed'
        ]);
        /** @var User $user */
        $user = auth()->user();

        if (!Hash::check($request->old_password, $user->password)) {
            return response()->json([
                'message' => 'The password is incorrect.'
            ], Response::HTTP_UNAUTHORIZED);
        }

        $user->password = Hash::make($request->password);
        $user->save();

        return response()->json(['message' => 'Password updated successfully']);
    }

    /**
     * Forgot Password
     * 
     * Send Rest Password Token
     * @response status=200 {"message":"Password reset email sent"}
     * @response status=422 {"message":"Failed to send password reset email"} 
     */
    public function forgotPassword(Request $request)
    {
        $request->validate(['email' => 'required|email']);

        // $user = User::where('email', $request->email)->firstOrFail();

        $status = Password::sendResetLink($request->only('email'));

        if ($status === Password::RESET_LINK_SENT) {
            return response()->json(['message' => 'Password reset email sent']);
        } else {
            return response()->json(['message' => 'Failed to send password reset email'], 422);
        }
    }
    /**
     * Reset
     * 
     * Create new password
     * 
     * @bodyParam email string required
     * @bodyParam token string required
     * @bodyParam password string required
     * @bodyParam password_confirmation string required
     * 
     * @response status=200 {"message":"Password reset successfully"}
     * @response status=422 {"message":"Password reset failed"}
     */
    public function reset(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'token' => 'required|string',
            'password' => 'required|string|min:8|confirmed',
        ]);

        $response = Password::reset(
            $request->only('email', 'token', 'password', 'password_confirmation'),
            function ($user, $password) {
                $user->password = Hash::make($password);
                $user->save();
            }
        );

        if ($response === Password::PASSWORD_RESET) {
            return response()->json(['message' => 'Password reset successfully']);
        } else {
            return response()->json(['message' => 'Password reset failed'], 422);
        }
    }
}
