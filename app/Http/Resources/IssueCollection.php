<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class IssueCollection extends ResourceCollection
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
            'title',
            'status',
            'description',
            'issued_by',
            'assigned_by',
            'resolved_by',
            'assigner',
            'issuer',
            'resolver'
        );
    }
}
