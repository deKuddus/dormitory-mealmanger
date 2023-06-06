<?php

namespace App\Services;

use App\Http\Resources\RoleCollection;
use Exception;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;

class RoleService
{
    public function list(): RoleCollection
    {
        try {
            return new RoleCollection(Role::query()->withCount('users', 'permissions')->paginate());
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }

    public function store(Request $request): Builder|Model
    {
        try {
            $role = Role::create($request->validated());
            $role->syncPermissions($request->get('permissions'));
            return $role;
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }

    public function update(Role $role, Request $request): Builder|Model
    {
        try {
            $role->update($request->validated());
            $role->syncPermissions($request->get('permissions'));
            return $role;
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }

    public function delete(Role $role): Builder|Model
    {
        try {
            $role->delete();
            return $role;
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }

    public function getRoleBasic(): array
    {
        try {
            return Role::get(['id', 'name'])->toArray();
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }
}
