<?php

namespace App\Http\Controllers\API\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;

/**
 * @group Authentication
 * 
 * Authentication APIs
 */
class AuthController extends Controller
{
    /**
     * Register User
     * 
     * Register new user into website
     * 
     * @bodyParam name string required Your full name. Example: Abdulrahman
     * @bodyParam email string required Your email. Example: Abouelez10@gmail.com
     * @bodyParam password string Your Password. Example: password
     * @bodyParam password_confirmation string required Confirm password. Example: password
     * 
     * 
     * @response status=201 {"user":{"id":11,"name":"Abdulrahman","email":"abouelez10@gmail.com","is_instructor":0,"is_admin":0},"access_token":"1|lNZjX8LiCgM9HfesupUAw0jBWnYnu9mixpOK5t24"}
     * 
     * @response status=422 {"message":"The name field is required. (and 2 more errors)","errors":{"name":["The name field is required."],"email":["The email has already been taken."],"password":["The password field confirmation does not match."]}}
     */
    public function register(RegisterRequest $request)
    {
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);

        event(new Registered($user));

        $device = substr($request->userAgent() ??  '', 0, 255);
        // $expiresAt = $request->remember ? null : now()->addDays(5);

        return response()->json([
            'user' => new UserResource($user),
            'access_token' => $user->createToken($device)->plainTextToken
        ], Response::HTTP_CREATED);
    }

    /**
     * Login
     * 
     * Login to website
     * 
     * @bodyParam email string required Your email.
     * @bodyParam password string Your Password.
     * @response status=200 {"user":{"id":11,"name":"Abdulrahman","email":"abouelez10@gmail.com","is_instructor":0,"is_admin":0},"access_token":"5|AvgBOMYXI0hFXX2yWM5oxBiJD1BVEUXis1flm3GI"}
     * @response status=401 {"message":"The provided credentials are incorrect."}

     */
    public function login(LoginRequest $request)
    {
        $user = User::where('email', $request->email)->first();
        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'message' => 'The provided credentials are incorrect.'
            ], Response::HTTP_UNAUTHORIZED);
        }

        $device = substr($request->userAgent() ?? '', 0, 255);
        // $expiresAt = $request->remember ? null : now()->addDay();

        return response()->json([
            'user' => new UserResource($user),
            'access_token' => $user->createToken($device)->plainTextToken
        ]);
    }

    /**
     * Logout
     * 
     * Logout from website
     * 
     * @response status=204
     * @authenticated
     */
    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response()->noContent();
    }
}
