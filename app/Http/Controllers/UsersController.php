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
        $this->authorize('showUser',User::class);

        return Inertia::render('Users/Index', [
            'filters' => Request::all('search', 'role', 'trashed'),
            'users' => new UserCollection(
                User::query()
                    ->with('roles')
                    ->orderBy('created_at','desc')
                    ->filter(Request::only('search', 'role', 'trashed'))
                    ->paginate()
                    ->appends(Request::all())
            ),
            'totalMemberActive' => User::query()->active()->count(),
            'totalMemberInActive' => User::query()->inActive()->count()
        ]);
    }

    public function create()
    {
        $this->authorize('createUser',User::class);

        return Inertia::render('Users/Create', [
            ...Helper::messArray(),
            ...Helper::rolesArray()
        ]);
    }

    public function store(UserStoreRequest $request)
    {
        $this->authorize('createUser',User::class);

        $user = User::create(
            $request->validated()
        );

        $user->mess()->sync($request->mess_id);
        $user->syncRoles($request->validated('roles'));

        return Redirect::route('user.index')->with('success', 'User created.');
    }

    public function edit(User $user)
    {
        $this->authorize('editUser',User::class);

        return Inertia::render('Users/Edit', [
            'user' => new UserResource($user->load('roles')),
            ...Helper::messArray(),
            ...Helper::rolesArray()
        ]);
    }

    public function show(User $user)
    {
        $this->authorize('showUser',User::class);

        return Inertia::render('Users/Show', [
            'user' => new UserResource($user),
            ...Helper::messArray()
        ]);
    }

    public function update(User $user, UserUpdateRequest $request)
    {
        $this->authorize('editUser',User::class);

        $user->update(
            $request->validated()
        );

        $user->mess()->sync($request->mess_id);
        $user->syncRoles($request->validated('roles'));

        return Redirect::back()->with('success', 'User updated.');
    }

    public function destroy(User $user, UserDeleteRequest $request)
    {
        $this->authorize('deleteUser',User::class);

        $user->delete();

        return Redirect::back()->with('success', 'User deleted.');
    }

    public function restore(User $user)
    {
        $user->restore();

        return Redirect::back()->with('success', 'User restored.');
    }
}
