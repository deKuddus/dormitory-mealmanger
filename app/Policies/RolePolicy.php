<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class RolePolicy
{
    use HandlesAuthorization;

    public function createRole(User $user){
        return $user->can('access::role-create');
    }

    public function showRole(User $user){
        return $user->can('access::role-show');
    }

    public function editRole(User $user){
        return $user->can('access::role-edit');
    }

    public function deleteRole(User $user){
        return $user->can('access::role-delete');
    }

}
