<?php

namespace App\Http\Controllers;

use App\Helper\Helper;
use App\Http\Requests\AdditionalCostRequest;
use App\Http\Resources\AdditionalCostCollection;
use App\Models\AdditionalCost;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdditionalCostController extends Controller
{
    public function index()
    {
        $requestParam = \request()->all('search', 'trashed');
        return Inertia::render('AdditionalCost/Index', [
            'filters' => $requestParam,
            'additionals' => new AdditionalCostCollection(
                AdditionalCost::query()
                    ->orderBy('created_at', 'desc')
                    ->paginate()
                    ->appends(request()->all())
            ),
        ]);
    }

    public function create()
    {
        return Inertia::render('AdditionalCost/Create',[
            ...Helper::messArray()
        ]);
    }

    public function store(AdditionalCostRequest $request)
    {
        AdditionalCost::create(
            $request->validated()
        );

        return to_route('additional.index');
    }

    public function show($id)
    {

    }


    public function edit(AdditionalCost $additional)
    {
        return Inertia::render('AdditionalCost/Edit', [
            'additional' => $additional,
            ...Helper::messArray()
        ]);
    }

    public function update(AdditionalCostRequest $request, AdditionalCost $additional)
    {
        $additional->update(
            $request->validated()
        );

        return to_route('additional.index');
    }

    public function destroy(AdditionalCost $additional)
    {
        $additional->delete();

        return to_route('additional.index');
    }

    public function restore(AdditionalCost $additional)
    {
        $additional->restore();
        return redirect()->back();
    }
}
