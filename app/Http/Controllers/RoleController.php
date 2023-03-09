<?php

namespace App\Http\Controllers;

use App\Http\Requests\RoleRequest;
use App\Http\Resources\RoleCollection;
use Spatie\Permission\Models\Role;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\Permission\Models\Permission;

class RoleController extends Controller
{

    public function index()
    {
        return Inertia::render('Role/Index',[
            'roles' => new RoleCollection(Role::query()->with('permissions')->withCount('users')->paginate())
        ]);
    }


    public function create()
    {
        return Inertia::render('Role/Create',[
           'permissions' => Permission::query()->get(['name','id'])
        ]);
    }


    public function store(RoleRequest $request)
    {

        $role = Role::create($request->validated());
        $role->syncPermissions($request->get('permissions'));
        return to_route('role.index')->with('success','New role created');

    }

    public function show($id)
    {
        //
    }


    public function edit(Role $role)
    {
        return Inertia::render('Role/Edit',[
            'role' => $role->load('permissions'),
            'permissions' => Permission::query()->get(['name','id'])
        ]);
    }


    public function update(RoleRequest $request, Role $role)
    {
        $role->update($request->validated());
        $role->syncPermissions($request->get('permissions'));
        return to_route('role.index')->with('success','New role created');
    }


    public function destroy(Role $role)
    {
        $role->delete();
        return to_route('role.index')->with('success','Role Deleted Success.');

    }
}
