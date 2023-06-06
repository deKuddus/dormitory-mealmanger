<?php

namespace App\Http\Controllers;

use App\Http\Resources\PermissionCollection;
use App\Models\User;
use Exception;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;
use Spatie\Permission\Models\Permission;

class PermissionController extends Controller
{

    public function index(): Response|RedirectResponse
    {
        $this->authorize('showPermission', User::class);

        try {
            return Inertia::render('Permission/Index', [
                'permissions' => new PermissionCollection(Permission::query()->paginate())
            ]);
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }
}
