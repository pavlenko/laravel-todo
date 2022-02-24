<?php

namespace App\Services;

use App\DTO\BaseSortableDTO;
use Illuminate\Database\Eloquent\Model;

abstract class BaseManager
{
    /**
     * @param BaseSortableDTO[] $data
     * @return BaseSortableDTO[]
     */
    protected final function sortByPrevNext(array $data): array
    {
        if (empty($data)) {
            return [];
        }

        /* @var $first BaseSortableDTO */
        $first  = current(array_filter($data, fn($item) => $item->prev == 0));
        $result = [$first];

        $findByID = function(array $data, int $id) {
            return current(array_filter($data, fn($item) => $item->id == $id)) ?: null;
        };

        /* @var $item BaseSortableDTO */
        $id = $first->next;
        while ($item = $findByID($data, $id)) {
            $result[] = $item;
            $id = $item->next;
        }

        return $result;
    }

    protected final function onCreateSortable(BaseSortableDTO $dto, Model $model): void
    {
        // Update new position
        $model::query()->whereKey($dto->prev)->update(['next' => $dto->id]);
    }

    protected final function onUpdateSortable(BaseSortableDTO $dto, Model $model): void
    {
        // Skip if not changed
        if (!$dto->isChanged('prev') && !$dto->isChanged('next')) {
            return;
        }

        // Update old position
        $srcPrev = (int) $dto->getOldValue('prev');
        $srcNext = (int) $dto->getOldValue('next');

        $model::query()->whereKey($srcPrev)->update(['next' => $srcNext]);
        $model::query()->whereKey($srcNext)->update(['prev' => $srcPrev]);

        // Update new position
        $model::query()->whereKey($dto->prev)->update(['next' => $dto->id]);
        $model::query()->whereKey($dto->next)->update(['prev' => $dto->id]);
    }

    protected final function onDeleteSortable(BaseSortableDTO $dto, Model $model): void
    {
        // Update old position
        $model::query()->whereKey($dto->prev)->update(['next' => $dto->next ?? 0]);
        $model::query()->whereKey($dto->next)->update(['prev' => $dto->prev ?? 0]);
    }
}
