<?php

namespace App\DTO;

/**
 * @property $id
 * @property $desk_id
 * @property $prev
 * @property $next
 * @property $name
 * @property $created_at
 * @property $updated_at
 *
 * @property CardDTO[] $cards
 */
final class ListDTO extends BaseSortableDTO
{
    private array $cards = [];

    public function __construct(array $values, array $cards = [])
    {
        parent::__construct($values);
        $this->setCards($cards);
    }

    /**
     * @return CardDTO[]
     */
    public function getCards(): array
    {
        return $this->cards;
    }

    /**
     * @param CardDTO[] $cards
     */
    public function setCards(array $cards): void
    {
        $this->cards = [];
        foreach ($cards as $index => $item) {
            if (!($item instanceof ListDTO)) {
                throw new \InvalidArgumentException(sprintf(
                    'Lists item must be of type %s, got %s at index \'%s\'',
                    CardDTO::class,
                    is_object($item) ? get_class($item) : gettype($item),
                    $index
                ));
            }
            $this->cards[] = $item;
        }
    }

    public function attributes(): array
    {
        return [
            'id'         => null,
            'desk_id'    => null,
            'prev'       => null,
            'next'       => null,
            'name'       => null,
            'created_at' => null,
            'updated_at' => null,
        ];
    }

    public function toArray(): array
    {
        return parent::toArray() + ['cards' => $this->cards];
    }
}
