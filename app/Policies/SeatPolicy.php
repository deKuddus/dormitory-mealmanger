<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class SeatPolicy
{
    use HandlesAuthorization;

    public function showSeat(User $user){
        return $user->can('access::seat-show');
    }

    public function editSeat(User $user){
        return $user->can('access::seat-edit');
    }

    public function createSeat(User $user){
        return $user->can('access::seat-create');
    }

    public function deleteSeat(User $user){
        return $user->can('access::seat-delete');
    }
}
