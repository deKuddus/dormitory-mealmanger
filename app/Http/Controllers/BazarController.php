<?php

namespace App\Http\Controllers;

use App\Http\Requests\BazarRequest;
use App\Http\Resources\BazarCollection;
use App\Models\Bazar;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BazarController extends Controller
{
    public function index()
    {
        $requestParam = \request()->all('search', 'trashed');
        return Inertia::render('Bazar/Index', [
            'filters' => $requestParam,
            'bazars' => new BazarCollection(
                Bazar::query()
                    ->orderBy('created_at', 'desc')
                    ->paginate()
                    ->appends(request()->all())
            ),
        ]);
    }

    public function create()
    {
        return Inertia::render('Bazar/Create');
    }

    public function store(BazarRequest $request)
    {
        Bazar::create(
            $request->validated()
        );

        return to_route('bazar.index');
    }

    public function show($id)
    {

    }


    public function edit(Bazar $bazar)
    {
        return Inertia::render('Bazar/Edit',[
            'bazar' => $bazar
        ]);
    }

    public function update(BazarRequest $request, Bazar $bazar)
    {
        $bazar->update(
            $request->validated()
        );

        return to_route('bazar.index');
    }

    public function destroy(Bazar $bazar)
    {
        $bazar->delete();

        return to_route('bazar.index');
    }

    public function restore(Bazar $bazar)
    {
        $bazar->restore();
        return redirect()->back();
    }
}
