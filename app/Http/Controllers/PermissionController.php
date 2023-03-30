<?php

namespace App\Http\Controllers;

use App\Http\Resources\PermissionCollection;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\Permission\Models\Permission;

class PermissionController extends Controller
{

    public function index(){
        $this->authorize('showPermission',User::class);

       return Inertia::render('Permission/Index',[
           'permissions' => new PermissionCollection(Permission::query()->paginate())
        ]);
    }
}
