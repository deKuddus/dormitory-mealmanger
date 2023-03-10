<?php

namespace App\Http\Controllers;

use App\Helper\Helper;
use App\Http\Requests\UserDeleteRequest;
use App\Http\Requests\UserStoreRequest;
use App\Http\Requests\UserUpdateRequest;
use App\Http\Resources\UserCollection;
use App\Http\Resources\UserResource;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Redirect;

class UsersController extends Controller
{
    public function index()
    {
        return Inertia::render('Users/Index', [
            'filters' => Request::all('search', 'role', 'trashed'),
            'users' => new UserCollection(
                User::query()
                    ->orderByName()
                    ->filter(Request::only('search', 'role', 'trashed'))
                    ->paginate()
                    ->appends(Request::all())
            ),
        ]);
    }

    public function create()
    {
        return Inertia::render('Users/Create', [
           ...Helper::messArray()
        ]);
    }

    public function store(UserStoreRequest $request)
    {
        $user = User::create(
            $request->validated()
        );

        $user->mess()->sync($request->mess_id);

        return Redirect::route('user')->with('success', 'User created.');
    }

    public function edit(User $user)
    {
        return Inertia::render('Users/Edit', [
            'user' => new UserResource($user),
            ...Helper::messArray()
        ]);
    }
     public function show(User $user)
     {
         return Inertia::render('Users/Show', [
             'user' => new UserResource($user),
             ...Helper::messArray()
         ]);
     }

    public function update(User $user, UserUpdateRequest $request)
    {
        $user->update(
            $request->validated()
        );

        $user->mess()->sync($request->mess_id);

        return Redirect::back()->with('success', 'User updated.');
    }

    public function destroy(User $user, UserDeleteRequest $request)
    {
        $user->delete();

        return Redirect::back()->with('success', 'User deleted.');
    }

    public function restore(User $user)
    {
        $user->restore();

        return Redirect::back()->with('success', 'User restored.');
    }
}
