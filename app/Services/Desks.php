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

    public function fetchRow($params): ?DeskDTO
    {
        if (!is_array($params)) {
            $data = DeskModel::query()->find($params);
        } else {
            $data = DeskModel::query()->where($params)->first();
        }

        return null !== $data ? new DeskDTO($data->getAttributes()) : null;
    }

    public function createDesk(DeskDTO $desk): void
    {
        $data = DeskModel::query()->create($desk->getAttributes());
        $desk->setAttributes($data->getAttributes());
    }

    public function updateDesk(DeskDTO $desk): void
    {
        DeskModel::query()->whereKey($desk->id)->update($desk->getAttributes());
    }

    public function deleteDesk(DeskDTO $desk): void
    {
        DeskModel::query()->whereKey($desk->id)->delete();
    }
}
