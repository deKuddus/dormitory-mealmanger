<?php

namespace App\Http\Controllers\Auth;

use App\Helpers\Helper;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Response;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

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

    protected function redirectTo()
    {
        if (auth()->user()->is_admin == 1) {
            return '/master';
        }
        return '/dashboard';
    }

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
//    protected $redirectTo = '/';

    public function showLoginForm()
    {
        return Inertia::render('Auth/Login');
    }

    protected function attemptLogin(Request $request)
    {
        $user = User::where('email', $request->email)->first();
        if($user){
            if($user->isActive()) {
                if (Hash::check($request->password, $user->password)) {
                    Auth::login($user);
                    return true;
                };
            }else{
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
