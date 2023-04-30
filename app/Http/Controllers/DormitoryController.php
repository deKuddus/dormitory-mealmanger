<?php

namespace App\Http\Controllers;

use App\Http\Requests\DormitoryCreateRequest;
use App\Http\Resources\DormitoryCollection;
use App\Models\Dormitory;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DormitoryController extends Controller
{
    public function index()
    {
        $requestParam = \request()->all('search', 'trashed');
        return Inertia::render('Dormitory/Index', [
            'filters' => $requestParam,
            'messes' => new DormitoryCollection(
                Dormitory::query()
                    ->orderBy('created_at', 'desc')
                    ->filter($requestParam)
                    ->paginate()
                    ->appends(request()->all())
            ),
        ]);
    }

    public function create()
    {
        return back();
        return Inertia::render('Dormitory/Create', [
            'users' => User::get(['id', 'full_name'])->toArray(),
        ]);
    }

    public function store(DormitoryCreateRequest $request)
    {
        return back();

        Dormitory::create(
            $request->validated()
        );

        return to_route('dormitory.index');
    }

    public function show($id)
    {
    }


    public function edit(Dormitory $dormitory)
    {

        return Inertia::render('Dormitory/Edit', [
            'users' => User::get(['id', 'full_name'])->toArray(),
            'dormitory' => $dormitory,
        ]);
    }

    public function update(DormitoryCreateRequest $request, Dormitory $dormitory)
    {

        $dormitory->update(
            $request->validated()
        );

        return to_route('dormitory.index');
    }

    public function destroy(Dormitory $dormitory)
    {
        return back();

        $dormitory->delete();

        return to_route('dormitory.index');
    }

    public function restore(Dormitory $dormitory)
    {
        $dormitory->restore();
        return redirect()->back();
    }
}
