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
}
