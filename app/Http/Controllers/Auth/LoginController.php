<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }


    public function showLoginForm()
    {
        return Inertia::render('Auth/Login');
    }

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */

    protected function redirectTo()
    {
        if (auth()->user()->isAdmin()) {
            return '/master';
        }
        return '/dashboard';
    }

    protected function attemptLogin(Request $request)
    {
        $user = User::where('email', $request->email)->first();
        if ($user) {
            if ($user->isActive()) {
                if (Hash::check($request->password, $user->password)) {
                    Auth::login($user,true);
                    return true;
                };
            } else {
                $this->sendFailedLoginResponse('You account is deactivated, contact with admin.');
            }
        }
        $this->sendFailedLoginResponse();
    }

    protected function sendFailedLoginResponse($default = 'These credentials dose not match our record')
    {
        throw ValidationException::withMessages([
            $this->username() => $default,
        ]);
    }
}
