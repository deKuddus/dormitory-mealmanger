<?php

namespace App\Http\Middleware;

use App\Helper\Helper;
use App\Models\Deposit;
use App\Models\Mess;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Middleware;
use App\Http\Resources\UserResource;

use Illuminate\Support\Facades\Auth;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @param \Illuminate\Http\Request $request
     * @return string|null
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'auth' => function () {
                return [
                    'user' => Auth::check() ? new UserResource(Auth::user()) : null
                ];
            },
            'flash' => function () use ($request) {
                return [
                    'success' => $request->session()->get('success'),
                    'errors' => $request->session()->get('errors'),
                    'registration_success' => $request->session()->get('registration_success')
                ];
            },
            'permissions' =>  Helper::getUserPermission(),
            'app_url' => env('APP_URL'),
            'routePrefix' => $request->route()->getPrefix(),
            'deposit' => Auth::check() ? auth()->user()->isAdmin() ? Mess::query()->value('deposit') : auth()->user()->deposit : 0
        ]);
    }
}
