<?php

namespace App\Services;

use App\Enums\BazarStatus;
use App\Enums\DormitoryInfoStatic;
use App\Http\Resources\BazarCollection;
use App\Models\Bazar;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;

class BazarService
{
    public function list():BazarCollection
    {
        try {
           return new BazarCollection(
               Bazar::query()
                   ->with('bazarSchedule', function ($q) {
                       $q->select('id')->with('users:id,full_name,display_name');
                   })
                   ->orderBy('created_at', 'desc')
                   ->orderBy('id', 'desc')
                   ->paginate(\request()->get('per_page') ?? 50)
           );
        } catch (Exception $exception) {
            throw_if(true,$exception->getMessage());
        }
    }


    public function store(Request $request)
    {
        try {
            $bazar = Bazar::create($request->validated());

            $bazar->dormitory()->decrement('deposit', $bazar->amount);

            return $bazar;
        } catch (Exception $exception) {
            throw_if(true,$exception->getMessage());
        }
    }

    public function update(Bazar $bazar, Request $request)
    {
        try {
            if ($bazar->status === BazarStatus::APPROVED && $request->status === BazarStatus::APPROVED) {
                if ($bazar->amount !== $request->amount) {
                    $bazar->dormitory()->increment('deposit', $bazar->amount);
                    $bazar->dormitory()->decrement('deposit', $request->amount);
                }
            }

            if ($bazar->status === BazarStatus::APPROVED && $request->status === BazarStatus::PENDING) {
                if ($bazar->amount !== $request->amount) {
                    $bazar->dormitory()->increment('deposit', $bazar->amount);
                }
            }

            if ($bazar->status === BazarStatus::PENDING && $request->status === BazarStatus::APPROVED) {
                if ($bazar->amount !== $request->amount) {
                    $bazar->dormitory()->decrement('deposit', $request->amount);
                }
            }

            return $bazar->update(
                $request->validated()
            );
        } catch (Exception  $exception) {
            throw_if(true,$exception->getMessage());
        }
    }

    public function delete(Bazar $bazar): Bazar|string
    {
        try {
            $bazar->dormitory()->increment('deposit', $bazar->amount);

            $bazar->delete();
            return $bazar;

        } catch (Exception $exception) {
            throw_if(true,$exception->getMessage());
        }
    }

    public function approveBazar(Request $request): Bazar
    {
        try {
            $request->validate(['id' => 'required']);

            $bazar = Bazar::find($request->id);
            $bazar->status = 1;
            $bazar->save();
            $bazar->dormitory()->decrement('deposit', $bazar->amount);
            return $bazar;
        } catch (Exception $exception) {
            throw_if(true,$exception->getMessage());
        }
    }

    public function getBazarsListOrSum(int $dormitoryId, bool $sum = false): float|Collection
    {
        try {
            $query = Bazar::query()
                ->where('dormitory_id', $dormitoryId)
                ->whereMonth('created_at', (new DormitoryInfoStatic())->getMonth()->month)
                ->whereYear('created_at', (new DormitoryInfoStatic())->getMonth()->year);
            if ($sum) {
                return (float)$query->sum('amount');
            }

            return $query->get();
        } catch (Exception $exception) {
            throw_if(true,$exception->getMessage());
        }
    }

}
