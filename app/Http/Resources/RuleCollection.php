<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class RuleCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Support\HigherOrderCollectionProxy
     */
    public function toArray($request)
    {
        return $this->collection->map->only(
            'id',
            'dormitory_id',
            'title',
            'status',
            'published_date',
            'rule_items_count',
        );
    }
}
