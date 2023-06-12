<?php

namespace App\Http\Controllers;


use App\Models\User;

class HomeController extends Controller
{
    public function index()
    {
        return to_route('user.dashboard');
    }

    public function loginAsUser($userId)
    {
        try {
            $user = User::findOrFail($userId);
            if ($user) {
                auth()->logout();
                auth()->login($user);
                return to_route('dashboard');
            }
            return back()->with('error', 'Something went wrong!');
        } catch (\Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }
}
