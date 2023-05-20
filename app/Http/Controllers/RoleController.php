<?php

namespace App\Http\Controllers;

use App\Http\Requests\RoleRequest;
use App\Models\User;
use App\Services\PermissionService;
use App\Services\RoleService;
use Exception;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;
use Spatie\Permission\Models\Role;

class RoleController extends Controller
{

    public function index(RoleService $roleService): Response|RedirectResponse
    {
        $this->authorize('showRole', User::class);
        try {
            return Inertia::render('Role/Index', [
                'roles' => $roleService->list()
            ]);
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function store(RoleRequest $request, RoleService $roleService)
    {
        $this->authorize('createRole', User::class);

        try {
            $roleService->store($request);
            return to_route('role.index')->with('success', 'New role created');
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function create(PermissionService $permissionService)
    {
        $this->authorize('createRole', User::class);

        try {
            return Inertia::render('Role/Create', [
                'permissions' => $permissionService->getPermission()
            ]);
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function show($id)
    {
        try {
            return back();
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }


    public function edit(Role $role, PermissionService $permissionService)
    {
        $this->authorize('editRole', User::class);

        try {
            return Inertia::render('Role/Edit', [
                'role' => $role->load('permissions'),
                'permissions' => $permissionService->getPermission()
            ]);
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }


    public function update(RoleRequest $request, Role $role, RoleService $roleService)
    {
        $this->authorize('editRole', User::class);
        try {
            $roleService->update($role, $request);
            return to_route('role.index')->with('success', 'New role created');
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }


    public function destroy(Role $role, RoleService $roleService)
    {
        $this->authorize('deleteRole', User::class);

        try {
            $roleService->delete($role);
            return to_route('role.index')->with('success', 'Role Deleted Success.');
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }
}
