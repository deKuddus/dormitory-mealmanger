<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class DepositPolicy
{
    use HandlesAuthorization;

    public function createDeposit(User $user){
        return $user->can('access::deposit-create');
    }

    public function showDeposit(User $user){
        return $user->can('access::deposit-show');
    }

    public function editDeposit(User $user){
        return $user->can('access::deposit-edit');
    }

    public function deleteDeposit(User $user){
        return $user->can('access::deposit-delete');
    }

    public function approveDeposit(User $user){
        return $user->can('access::deposit-approve');
    }

    public function rejectDeposit(User $user){
        return $user->can('access::deposit-reject');
    }


    public function withdrawDeposit(User $user){
        return $user->can('access::deposit-withdraw');
    }
}
