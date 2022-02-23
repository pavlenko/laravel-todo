<?php

namespace App\DTO;

/**
 * @property $id
 * @property $name
 * @property $created_at
 * @property $updated_at
 *
 * @property ListDTO[] $lists
 */
final class DeskDTO extends BaseDTO
{
    private array $lists = [];

    public function __construct(array $values, array $lists = [])
    {
        parent::__construct($values);
        $this->setLists($lists);
    }

    /**
     * @return ListDTO[]
     */
    public function getLists(): array
    {
        return $this->lists;
    }

    /**
     * @param ListDTO[] $lists
     */
    public function setLists(array $lists): void
    {
        $this->lists = [];
        foreach ($lists as $index => $item) {
            if (!($item instanceof ListDTO)) {
                throw new \InvalidArgumentException(sprintf(
                    'Lists item must be of type %s, got %s at index \'%s\'',
                    ListDTO::class,
                    is_object($item) ? get_class($item) : gettype($item),
                    $index
                ));
            }
            $this->lists[] = $item;
        }
    }

    public function attributes(): array
    {
        return [
            'id'         => null,
            'name'       => null,
            'created_at' => null,
            'updated_at' => null,
        ];
    }

    public function toArray(): array
    {
        return parent::toArray() + ['lists' => $this->lists];
    }
}
