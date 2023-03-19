<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class RoomPolicy
{
    use HandlesAuthorization;

    public function showRoom(User $user){
        return $user->can('access::room-show');
    }

    public function editRoom(User $user){
        return $user->can('access::room-edit');
    }

    public function createRoom(User $user){
        return $user->can('access::room-create');
    }

    public function deleteRoom(User $user){
        return $user->can('access::room-delete');
    }
}
