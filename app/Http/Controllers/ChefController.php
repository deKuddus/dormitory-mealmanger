<?php

namespace App\Http\Controllers;

use App\Helper\Helper;
use App\Http\Requests\ChefRequest;
use App\Http\Resources\ChefCollection;
use App\Models\Chef;
use App\Models\Dormitory;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ChefController extends Controller
{
    public function index()
    {
        $this->authorize('showChef', Chef::class);

        $requestParam = \request()->all('search', 'trashed');
        return Inertia::render('Chef/Index', [
            'filters' => $requestParam,
            'chefs' => new ChefCollection(
                Chef::query()
                    ->orderBy('created_at', 'desc')
                    ->paginate()
                    ->appends(request()->all())
            ),
        ]);
    }

    public function create()
    {
        $this->authorize('createChef', Chef::class);

        return Inertia::render('Chef/Create', [
            ...Helper::messArray()
        ]);
    }

    public function store(ChefRequest $request)
    {
        $this->authorize('createChef', Chef::class);

        Chef::create(
            $request->validated()
        );

        return to_route('chef.index');
    }

    public function show($id)
    {
    }


    public function edit(Chef $chef)
    {
        $this->authorize('editChef', Chef::class);

        return Inertia::render('Chef/Edit', [
            ...Helper::messArray(),
            'chef' => $chef,
        ]);
    }

    public function update(ChefRequest $request, Chef $chef)
    {
        $this->authorize('editChef', Chef::class);

        $chef->update($request->validated());

        return to_route('chef.index');
    }

    public function destroy(Chef $chef)
    {
        $this->authorize('deleteChef', Chef::class);

        $chef->delete();

        return to_route('chef.index');
    }

    public function restore(Chef $chef)
    {
        $chef->restore();
        return redirect()->back();
    }
}
