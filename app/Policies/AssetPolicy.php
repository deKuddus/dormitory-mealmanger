<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class AssetPolicy
{
    use HandlesAuthorization;

    public function createAsset(User $user){
        return $user->can('access::asset-create');
    }

    public function showAsset(User $user){
        return $user->can('access::asset-show');
    }

    public function editAsset(User $user){
        return $user->can('access::asset-edit');
    }

    public function deleteAsset(User $user){
        return $user->can('access::asset-delete');
    }

}
