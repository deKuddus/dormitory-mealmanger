<?php

namespace App\Http\Controllers;

use App\Enums\AdditionalCostType;
use App\Helper\Helper;
use App\Http\Requests\AdditionalCostRequest;
use App\Http\Resources\AdditionalCostCollection;
use App\Models\AdditionalCost;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdditionalCostController extends Controller
{
    public function index()
    {
        $this->authorize('showAdditionalCost',AdditionalCost::class);

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
        $this->authorize('createAdditionalCost',AdditionalCost::class);

        return Inertia::render('AdditionalCost/Create',[
            ...Helper::messArray()
        ]);
    }

    public function store(AdditionalCostRequest $request)
    {
        $this->authorize('createAdditionalCost',AdditionalCost::class);

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
        $this->authorize('editAdditionalCost',AdditionalCost::class);

        return Inertia::render('AdditionalCost/Edit', [
            'additional' => $additional
        ]);
    }

    public function update(AdditionalCostRequest $request, AdditionalCost $additional)
    {

        $this->authorize('editAdditionalCost',AdditionalCost::class);

        if($additional->status === AdditionalCostType::APPROVED && $request->status === AdditionalCostType::APPROVED){
            if($additional->amount !== $request->amount){
                $additional->mess()->increment('deposit',$additional->amount);
                $additional->mess()->decrement('deposit',$request->amount);
            }
        }

        if($additional->status === AdditionalCostType::APPROVED && $request->status === AdditionalCostType::PENDING){
            if($additional->amount !== $request->amount){
                $additional->mess()->increment('deposit',$additional->amount);
            }
        }

        if($additional->status === AdditionalCostType::PENDING && $request->status === AdditionalCostType::APPROVED){
            if($additional->amount !== $request->amount){
                $additional->mess()->decrement('deposit',$request->amount);
            }
        }

        $additional->update(
            $request->validated()
        );

        return to_route('additional.index');
    }

    public function destroy(AdditionalCost $additional)
    {
        $this->authorize('deleteAdditionalCost',AdditionalCost::class);

        if($additional->status === AdditionalCostType::APPROVED){
            $additional->mess()->increment('deposit',$additional->amount);
        }

        $additional->delete();

        return to_route('additional.index');
    }

    public function restore(AdditionalCost $additional)
    {
        $additional->restore();
        return redirect()->back();
    }
}
