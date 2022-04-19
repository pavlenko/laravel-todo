<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Contracts\Auth\Guard;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\JWTGuard;

final class AuthController extends Controller
{
    public function login(Request $request): JsonResponse
    {
        $request->validate([
            'email'    => 'required|email',
            'password' => 'required|min:3',
        ]);

        $credentials = $request->only('email', 'password');
        if ($token = $this->guard()->attempt($credentials)) {
            return response()->json(['status' => 'success'])->header('Authorization', $token);
        }
        return response()->json(['error' => 'login_error'], 401);
    }

    public function logout(): JsonResponse
    {
        $this->guard()->logout();
        return response()->json(['status' => 'success']);
    }

    public function register(Request $request): JsonResponse
    {
        $request->validate([
            'name'     => 'required|min:3',
            'email'    => 'required|email|unique:users',
            'password' => 'required|min:3|confirmed',
        ]);

        $user = new User();
        $user->name     = $request->{'name'};
        $user->email    = $request->{'email'};
        $user->password = Hash::make($request->{'password'});
        $user->save();

        return response()->json(['status' => 'success']);
    }

    public function refresh(): JsonResponse
    {
        // Try refresh token, else return 401
        try {
            if ($token = $this->guard()->refresh()) {
                return response()
                    ->json(['status' => 'success'])
                    ->header('Authorization', $token);
            }
        } catch (TokenExpiredException $exception) {
            // Do nothing but force auth in front
        }
        return response()->json(['error' => 'refresh_token_error'], 401);
    }

    public function user(Request $request): JsonResource
    {
        /* @var $user User */
        $user = $request->user('api');
        if (empty($user->avatar)) {
            // Generate avatar if not has
            $user->avatar = file_get_contents('https://ui-avatars.com/api/?size=160&name=' . urlencode($user->name)) ?: null;
            $user->save();
        }

        if (!empty($user->avatar)) {
            // Convert for response
            $user->avatar = 'data:image/png;base64,' . base64_encode($user->avatar);
        }

        return new JsonResource($request->user('api'));
    }

    /**
     * @return JWTGuard
     */
    private function guard(): Guard
    {
        return Auth::guard('api');
    }
}
