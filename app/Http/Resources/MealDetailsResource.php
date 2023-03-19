<?php

namespace App\Http\Resources;

use App\Models\Mess;
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
            'name' => $this->first_name . ' ' . $this->last_name,
            'meals' =>  MemberMealShowResource::collection($this->meals),
            'total_meals' => $this->countTotalMeal()
        ];
    }

    private function countTotalMeal()
    {
        return array_sum([
            $this->meals->sum('break_fast'),
            $this->meals->sum('lunch'),
            $this->meals->sum('dinner'),
        ]);
    }
}
