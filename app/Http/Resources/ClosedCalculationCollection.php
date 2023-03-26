<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class ClosedCalculationCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return $this->collection->map->only(
            'id',
            'mess_id',
            'user_id',
            'amount',
            'description',
            'total_meal',
            'calculate_date',
            'carry',
            'user'
        );
    }
}
