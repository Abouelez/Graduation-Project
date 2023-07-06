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

class AuthController extends Controller
{
    public function register(RegisterRequest $request)
    {
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);

        event(new Registered($user));

        $device = substr($request->userAgent() ?? '', 0, 255);
        // $expiresAt = $request->remember ? null : now()->addDays(5);

        return response()->json([
            'user' => new UserResource($user),
            'access_token' => $user->createToken($device)->plainTextToken
        ], Response::HTTP_CREATED);
    }

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
        ], Response::HTTP_CREATED);
    }
}
