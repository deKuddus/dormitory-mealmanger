<?php

namespace App\Services;

use App\Enums\AdditionalCostType;
use App\Enums\DormitoryInfoStatic;
use App\Http\Resources\AdditionalCostCollection;
use App\Models\AdditionalCost;
use Exception;
use Illuminate\Http\Request;

class AdditonalCostService
{
    public function index()
    {
        try {
            return new AdditionalCostCollection(
                AdditionalCost::query()
                    ->orderBy('created_at', 'desc')
                    ->paginate()
            );
        } catch (Exception $exception) {
            throw_if(true,$exception->getMessage());
        }
    }

    public function store(Request $request)
    {
        try {
            $additionalCost = AdditionalCost::create(
                $request->validated()
            );
            if ($request->status === AdditionalCostType::APPROVED) {
                $additionalCost->dormitory()->decrement('deposit', $additionalCost->amount);
            }
            return $additionalCost;
        } catch (Exception $exception) {
            throw_if(true,$exception->getMessage());
        }
    }

    public function update(AdditionalCost $additionalCost, Request $request)
    {
        try {
            if ($additionalCost->status === AdditionalCostType::APPROVED && $request->status === AdditionalCostType::APPROVED) {
                if ($additionalCost->amount !== $request->amount) {
                    $additionalCost->dormitory()->increment('deposit', $additionalCost->amount);
                    $additionalCost->dormitory()->decrement('deposit', $request->amount);
                }
            }

            if ($additionalCost->status === AdditionalCostType::APPROVED && $request->status === AdditionalCostType::PENDING) {
                if ($additionalCost->amount !== $request->amount) {
                    $additionalCost->dormitory()->increment('deposit', $additionalCost->amount);
                }
            }

            if ($additionalCost->status === AdditionalCostType::PENDING && $request->status === AdditionalCostType::APPROVED) {
                if ($additionalCost->amount !== $request->amount) {
                    $additionalCost->dormitory()->decrement('deposit', $request->amount);
                }
            }

            $additionalCost->update($request->validated());

            return $additionalCost;
        } catch (Exception $exception) {
            throw_if(true,$exception->getMessage());
        }
    }

    public function delete(AdditionalCost $additionalCost)
    {
        try {
            if ($additionalCost->status === AdditionalCostType::APPROVED) {
                $additionalCost->dormitory()->increment('deposit', $additionalCost->amount);
            }

            return $additionalCost->delete();

        } catch (Exception $exception) {
            throw_if(true,$exception->getMessage());
        }
    }

    public function getTotalCost(int $dormitoryId): float
    {
        try {
            return (float)AdditionalCost::query()
                ->active()
                ->where('dormitory_id', $dormitoryId)
                ->whereMonth('created_at', (new DormitoryInfoStatic())->getMonth()->month)
                ->whereYear('created_at', (new DormitoryInfoStatic())->getMonth()->year)
                ->sum('amount');
        } catch (Exception $exception) {
            throw_if(true, $exception->getMessage());
        }
    }
}
