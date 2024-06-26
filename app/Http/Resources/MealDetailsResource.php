<?php

namespace App\Http\Resources;

use App\Models\Dormitory;
use Illuminate\Http\Resources\Json\JsonResource;

class MealDetailsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->full_name,
            'meals' => MemberMealShowResource::collection($this->meals) ?? 0,
            'total_meals' => $this->countTotalMeal() ?? 0
        ];
    }

    private function countTotalMeal()
    {
        if ($this->meals) {
            return array_sum([
                $this->meals->sum('break_fast'),
                $this->meals->sum('lunch'),
                $this->meals->sum('dinner'),
            ]);
        } else {
            return 0;
        }
    }
}
