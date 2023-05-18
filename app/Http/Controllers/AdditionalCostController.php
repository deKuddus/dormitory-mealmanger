<?php

namespace App\Http\Controllers;

use App\Helper\Helper;
use App\Http\Requests\AdditionalCostRequest;
use App\Models\AdditionalCost;
use App\Services\AdditonalCostService;
use Exception;
use Inertia\Inertia;

class AdditionalCostController extends Controller
{
    public function index(AdditonalCostService $additonalCostService)
    {
        $this->authorize('showAdditionalCost', AdditionalCost::class);

        try {
            $additonalCostService->index();
            return Inertia::render('AdditionalCost/Index',);
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function store(AdditionalCostRequest $request, AdditonalCostService $additonalCostService)
    {
        $this->authorize('createAdditionalCost', AdditionalCost::class);

        try {
            $additonalCostService->store($request);
            return to_route('additional.index');
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function create()
    {
        $this->authorize('createAdditionalCost', AdditionalCost::class);

        try {
            return Inertia::render('AdditionalCost/Create', [
                ...Helper::messArray()
            ]);
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function show($id)
    {
        return back();
    }


    public function edit(AdditionalCost $additionalCost)
    {
        $this->authorize('editAdditionalCost', AdditionalCost::class);

        try {
            return Inertia::render('AdditionalCost/Edit', [
                'additional' => $additionalCost
            ]);
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    public function update(AdditionalCostRequest $request, AdditionalCost $additionalCost, AdditonalCostService $additonalCostService)
    {

        $this->authorize('editAdditionalCost', AdditionalCost::class);


        try {
            $additonalCostService->update($additionalCost, $request);
            return to_route('additional.index');
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }

    }

    public function destroy(AdditionalCost $additionalCost, AdditonalCostService $additonalCostService)
    {
        $this->authorize('deleteAdditionalCost', AdditionalCost::class);

        try {
            $additonalCostService->delete($additionalCost);

            return to_route('additional.index');
        } catch (Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

}
