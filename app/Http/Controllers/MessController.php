<?php

namespace App\Http\Controllers;

use App\Http\Requests\MessCreateRequest;
use App\Http\Resources\MessCollection;
use App\Models\Mess;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MessController extends Controller
{

    public function index()
    {
        $requestParam = \request()->all('search', 'trashed');
        return Inertia::render('Mess/Index', [
            'filters' => $requestParam,
            'messes' => new MessCollection(
                Mess::query()
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
        return Inertia::render('Mess/Create', [
            'users' => User::get(['id', 'first_name'])->toArray(),
        ]);
    }

    public function store(MessCreateRequest $request)
    {
        return back();

        Mess::create(
            $request->validated()
        );

        return to_route('mess.index');
    }

    public function show($id)
    {

    }


    public function edit(Mess $mess)
    {
        return back();

        return Inertia::render('Mess/Edit', [
            'users' => User::get(['id', 'first_name'])->toArray(),
            'mess' => $mess,
        ]);
    }

    public function update(MessCreateRequest $request, Mess $mess)
    {

        return back();

        $mess->update(
            $request->validated()
        );

        return to_route('mess.index');
    }

    public function destroy(Mess $mess)
    {
        return back();

        $mess->delete();

        return to_route('mess.index');
    }

    public function restore(Mess $mess)
    {
        $mess->restore();
        return redirect()->back();
    }
}
