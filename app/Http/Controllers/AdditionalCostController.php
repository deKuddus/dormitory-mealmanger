<?php

namespace App\Http\Controllers;

use App\Enums\AdditionalCostType;
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
        $additional = AdditionalCost::create(
            $request->validated()
        );
        if($request->status === AdditionalCostType::APPROVED){
            $additional->mess()->decrement('deposit',$additional->amount);
        }
        return to_route('additional.index');
    }

    public function show($id)
    {

    }


    public function edit(AdditionalCost $additional)
    {
        return Inertia::render('AdditionalCost/Edit', [
            'additional' => $additional
        ]);
    }

    public function update(AdditionalCostRequest $request, AdditionalCost $additional)
    {
        $additional->mess()->increment('deposit',$additional->amount);

        $additional->update(
            $request->validated()
        );

        if($request->status === AdditionalCostType::APPROVED){
            $additional->mess()->decrement('deposit',$additional->amount);
        }

        return to_route('additional.index');
    }

    public function destroy(AdditionalCost $additional)
    {
        $additional->mess()->increment('deposit',$additional->amount);
        $additional->delete();

        return to_route('additional.index');
    }

    public function restore(AdditionalCost $additional)
    {
        $additional->restore();
        return redirect()->back();
    }
}
