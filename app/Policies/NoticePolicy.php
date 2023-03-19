<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class NoticePolicy
{
    use HandlesAuthorization;

    public function createNotice(User $user)
    {
        return $user->can('access::notice-create');
    }

    public function showNotice(User $user)
    {
        return $user->can('access::notice-show');
    }

    public function editNotice(User $user)
    {
        return $user->can('access::notice-edit');
    }

    public function deleteNotice(User $user)
    {
        return $user->can('access::notice-delete');
    }

}
