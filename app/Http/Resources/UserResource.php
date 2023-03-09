<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'first_name' => $this->first_name,
            'last_name' => $this->last_name,
            'name' => $this->name,
            'email' => $this->email,
            'phone' => $this->phone,
            'present_address' => $this->present_address,
            'permanent_address' => $this->permanent_address,
            'nid' => $this->nid,
            'nid_type' => $this->nid_type,
            'institution' => $this->institution,
            'company' => $this->company,
            'status' => $this->status,
            'roles' => $this->roles
        ];
    }
}
