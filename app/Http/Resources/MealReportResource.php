<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class MealReportResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->full_name,
            'email' => $this->email,
            'status' => $this->status,
            'meals_total' => $this->generalizedMeal(),
            'deposits' => $this->deposits->sum('amount'),
        ];
    }

    private function generalizedMeal(){
        return array_sum($this->meals->map(function ($row){
            return $row->break_fast_total + $row->lunch_total+  $row->dinner_total;
        })->toArray());
    }
}
