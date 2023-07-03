<?php

namespace App\Http\Controllers;

use App\Http\Requests\DormitoryCreateRequest;
use App\Models\Dormitory;
use App\Services\DepositService;
use App\Services\DormitoryService;
use App\Services\UserService;
use Exception;
use Inertia\Inertia;

class DormitoryController extends Controller
{
    public function index(DormitoryService $dormitoryService)
    {
        try {
            return Inertia::render('Dormitory/Index', $dormitoryService->index());
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function create(UserService $userService)
    {
        return back();
        try {
            return Inertia::render('Dormitory/Create', [
                'users' => $userService->getUserBasics()
            ]);
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }

    }

    public function store(DormitoryCreateRequest $request, DormitoryService $dormitoryService)
    {
        return back();

        try {
            $dormitoryService->store();
            return to_route('dormitory.index');
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function show($id)
    {
        return back();
    }


    public function edit(Dormitory $dormitory, UserService $userService)
    {
        try {
            return Inertia::render('Dormitory/Edit', [
                'users' => $userService->getBasicsOfUsers(),
                'dormitory' => $dormitory,
            ]);
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function update(DormitoryCreateRequest $request, Dormitory $dormitory, DormitoryService $dormitoryService)
    {
        try {
            $dormitoryService->update($dormitory, $request);
            return to_route('dormitory.index');
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function destroy(Dormitory $dormitory, DormitoryService $dormitoryService)
    {
        return back();

        try {
            $dormitoryService->delete($dormitory);
            return to_route('dormitory.index');
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }

    }
}
