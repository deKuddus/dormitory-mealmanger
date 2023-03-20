<?php

namespace App\Http\Controllers;

use App\Http\Requests\RoleRequest;
use App\Http\Resources\RoleCollection;
use App\Models\User;
use Spatie\Permission\Models\Role;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\Permission\Models\Permission;

class RoleController extends Controller
{

    public function index()
    {
        $this->authorize('showRole', Role::class);

        return Inertia::render('Role/Index', [
            'roles' => new RoleCollection(Role::query()->withCount('users', 'permissions')->paginate())
        ]);
    }


    public function create()
    {
        $this->authorize('createRole', Role::class);

        return Inertia::render('Role/Create', [
            'permissions' => Permission::query()->get(['name', 'id'])
        ]);
    }


    public function store(RoleRequest $request)
    {
        $this->authorize('createRole', Role::class);

        $role = Role::create($request->validated());
        $role->syncPermissions($request->get('permissions'));
        return to_route('role.index')->with('success', 'New role created');

    }

    public function show($id)
    {
        //
    }


    public function edit(Role $role)
    {
        $this->authorize('editRole', Role::class);


        return Inertia::render('Role/Edit', [
            'role' => $role->load('permissions'),
            'permissions' => Permission::query()->get(['name', 'id'])
        ]);
    }


    public function update(RoleRequest $request, Role $role)
    {
        $this->authorize('editRole', Role::class);


        $role->update($request->validated());
        $role->syncPermissions($request->get('permissions'));
        return to_route('role.index')->with('success', 'New role created');
    }


    public function destroy(Role $role)
    {
        $this->authorize('deleteRole', Role::class);

        $role->delete();
        return to_route('role.index')->with('success', 'Role Deleted Success.');

    }
}
