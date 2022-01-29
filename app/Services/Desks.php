<?php

namespace App\Services;

use App\DTO\DeskDTO;
use App\Models\DeskModel;

final class Desks
{
    /**
     * @return array<DeskDTO>
     */
    public function fetchAll(): array
    {
        $rows = DeskModel::query()->orderBy('updated_at', 'desc')->get();
        $data = [];
        foreach ($rows as $row) {
            $data[] = new DeskDTO($row->getAttributes());
        }

        return $data;
    }

    public function createDesk(DeskDTO $desk): void
    {
        $data = DeskModel::query()->create($desk->getAttributes());
        $desk->setAttributes($data->getAttributes());
    }
}
