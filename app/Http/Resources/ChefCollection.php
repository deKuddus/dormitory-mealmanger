<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class ChefCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Support\HigherOrderCollectionProxy
     */
    public function toArray($request)
    {
        return $this->collection->map->only(
            'id',
            'dormitory_id',
            'name',
            'phone',
            'address',
            'status'
        );
    }
}
