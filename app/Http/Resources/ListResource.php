<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @property $id
 * @property $desk_id
 * @property $name
 * @property $created_at
 */
class ListResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  Request  $request
     * @return array
     */
    public function toArray($request): array
    {
        return [
            'id'         => $this->id,
            'desk_id'    => $this->desk_id,
            'name'       => $this->name,
            'created_at' => $this->created_at,
        ];
    }
}
