<?php

namespace App\Http\Controllers;

use App\Helper\Helper;
use App\Http\Requests\UserDeleteRequest;
use App\Http\Requests\UserStoreRequest;
use App\Http\Requests\UserUpdateRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use App\Services\UserService;
use Exception;
use Inertia\Inertia;


class UsersController extends Controller
{
    public function index(UserService $userService)
    {
        $this->authorize('showUser', User::class);

        try {
            return Inertia::render('Users/Index', $userService->index());
        } catch (Exception $exception) {
            throw_if(true,$exception->getMessage());
        }

    }

    public function create()
    {
        $this->authorize('createUser', User::class);

        try {
            return Inertia::render('Users/Create', [
                ...Helper::rolesArray(),
                ...Helper::roomArray()
            ]);
        } catch (Exception $exception) {
            throw_if(true,$exception->getMessage());
        }
    }

    public function store(UserStoreRequest $request, UserService $userService)
    {
        $this->authorize('createUser', User::class);

        try {
            $userService->store($request);
            return to_route('user.index')->with('success', 'User created.');
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function edit(User $user)
    {
        $this->authorize('editUser', User::class);

        try {
            return Inertia::render('Users/Edit', [
                'user' => new UserResource($user->load('roles')),
                ...Helper::roomArray(),
                ...Helper::rolesArray()
            ]);
        } catch (Exception $exception) {
            return back()->with('error',$exception->getMessage());
        }
    }

    public function show(User $user)
    {
        $this->authorize('showUser', User::class);

        try {

            return Inertia::render('Users/Show', [
                'user' => $user->load('roles', 'room', 'seat')
            ]);
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function update(User $user, UserUpdateRequest $request, UserService $userService)
    {
        $this->authorize('editUser', User::class);

        try {
            $userService->update($user, $request);

            return back()->with('success', 'User updated.');

        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function destroy(User $user, UserDeleteRequest $request,UserService $userService)
    {
        $this->authorize('deleteUser', User::class);

        try {
            $userService->delete($user,$request);

            return back()->with('success', 'User deleted.');
        }catch (Exception  $exception){
            return back()->with('error', $exception->getMessage());
        }
    }

}
