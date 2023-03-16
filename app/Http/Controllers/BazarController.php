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
                    ->with('bazarSchedule', function ($q) {
                        $q->select('id')->with('users:id,first_name,last_name');
                    })
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
        $bazar = Bazar::create(
            $request->validated()
        );

        $bazar->mess()->decrement('deposit',$bazar->amount);

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


    public function approveBazar(Request $request){
        $request->validate(['id' => 'required']);

        $bazar = Bazar::find($request->id);
        $bazar->status = 1;
        $bazar->save();
        $bazar->mess()->decrement('deposit',$bazar->amount);
        return back()->with('success','Bazar approved and deposit decreases');
    }
}
