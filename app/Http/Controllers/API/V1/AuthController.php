<?php

namespace App\Http\Controllers\API\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

final class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');
        if ($token = Auth::guard()->attempt($credentials)) {
            return response()->json(['status' => 'success'])->header('Authorization', $token);
        }
        return response()->json(['error' => 'login_error'], 401);
    }
}
