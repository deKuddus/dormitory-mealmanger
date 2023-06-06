<?php

namespace App\Http\Controllers;

use App\Helper\Helper;
use App\Http\Requests\ChefRequest;
use App\Models\Chef;
use App\Services\ChefService;
use App\Services\DormitoryService;
use Exception;
use Inertia\Inertia;

class ChefController extends Controller
{
    public function index(ChefService $chefService)
    {
        $this->authorize('showChef', Chef::class);

        try {
            return Inertia::render('Chef/Index', $chefService->index());
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function create(DormitoryService $dormitoryService)
    {
        $this->authorize('createChef', Chef::class);

        try {
            return Inertia::render('Chef/Create', [
                'dormitories' => $dormitoryService->getDormitoryBasic()
            ]);
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function store(ChefRequest $request, ChefService $chefService)
    {
        $this->authorize('createChef', Chef::class);

        try {
            $chefService->store($request);
            return to_route('chef.index');
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }

    }

    public function show($id)
    {
        return back();
    }


    public function edit(Chef $chef, ChefService $chefService)
    {
        $this->authorize('editChef', Chef::class);

        return Inertia::render('Chef/Edit', $chefService->edit($chef));
    }

    public function update(ChefRequest $request, Chef $chef, ChefService $chefService)
    {
        $this->authorize('editChef', Chef::class);

        try {
            $chefService->update($chef, $request);
            return to_route('chef.index');
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }

    }

    public function destroy(Chef $chef, ChefService $chefService)
    {
        $this->authorize('deleteChef', Chef::class);

        try {
            $chefService->delete($chef);
            return to_route('chef.index');
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

}
