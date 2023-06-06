<?php

namespace App\Services;

use Exception;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;
use Spatie\Permission\Models\Permission;

class PermissionService
{

    public function getPermission(): Collection
    {
        try {
            return Permission::query()->get(['name', 'id']);
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }

    public function getUserPermissionAsArray():array
    {
        if (auth::check() && auth()->user()->isAdmin()) {
            $permissions = auth()->user()->load('roles.permissions')->roles->flatMap(function ($role) {
                return $role->permissions;
            })->pluck('name')->toArray();
        } else {
            $permissions = [];
        }

        return $permissions;
    }

}
