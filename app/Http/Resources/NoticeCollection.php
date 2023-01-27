<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class NoticeCollection extends ResourceCollection
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
            'title',
            'description',
            'published_date',
            'status',
            'deleted_at',
            'crated_at'
        );
    }
}
