<?php

namespace App\Http\Controllers\Auth;

use App\Enums\MessIdStatic;
use App\Models\RegisterToken;
use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param array $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
            'first_name' => ['required', 'string', 'max:50'],
            'last_name' => ['required', 'string', 'max:50'],
            'mobile' => ['required', 'string', 'max:12'],
        ]);
    }


    protected function create(array $data)
    {
        $messId = MessIdStatic::MESSID;

        $user = \App\Models\User::create([
            'first_name' => $data['first_name'],
            'last_name' => $data['last_name'],
            'email' => $data['email'],
            'phone:' => $data['mobile'],
            'password' => $data['password'],
            'is_admin' => 0,
            'deposit' => 0,
            'status' => 1
        ]);
        $user->mess()->sync($messId);
        return $user;
    }

    /**
     * Handle a registration request for the application.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Http\JsonResponse
     */
    public function register(Request $request)
    {
        $this->validator($request->all())->validate();

        event(new Registered($user = $this->create($request->all())));

        if ($response = $this->registered($request, $user)) {
            return $response;
        }

        return $request->wantsJson()
            ? new JsonResponse([], 201)
            : redirect()->to('/login')->with('registration_success', 'Registration success. Please Login.');
    }

    public function showRegistrationForm($token = null)
    {
//        if (!$token) {
//            return redirect()->to('/');
//        }

        return inertia('Auth/Register', [
            'validToken' => $this->isValidRegisterToken($token)
        ]);
    }

    private function isValidRegisterToken($uuid)
    {
        $uuid = RegisterToken::where('uuid', $uuid)->whereDate('expire_at', '>', now())->first();
        if ($uuid) {
            return true;
        } else {
            return false;
        }
    }
}
