<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @property $id
 * @property $list_id
 * @property $name
 * @property $text
 * @property $created_at
 */
class CardResource extends JsonResource
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
            'list_id'    => $this->list_id,
            'name'       => $this->name,
            'text'       => $this->text,
            'created_at' => $this->created_at,
        ];
    }
}
