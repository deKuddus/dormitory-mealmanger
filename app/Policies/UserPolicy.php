<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class UserPolicy
{
    use HandlesAuthorization;

   public function createUser(User $user){
      return $user->can('access::user-create');
   }

    public function editUser(User $user){
        return $user->can('access::user-edit');
    }

    public function showUser(User $user){
        return $user->can('access::user-show');
    }

    public function deleteUser(User $user){
        return $user->can('access::user-delete');
    }

    public function showExpense(User $user){
        return $user->can('access::expense-show');
    }

    public function showReport(User $user){
        return $user->can('access::report-show');
    }

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
    public function showPermission(User $user){
        return $user->can('access::show-permission');
    }

}
