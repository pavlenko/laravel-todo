<?php

namespace App\DTO;

abstract class BaseDTO
{
    private array $oldAttributes = [];
    private array $newAttributes = [];

    public function __construct(array $values)
    {
        foreach ($this->attributes() as $attribute) {
            $this->oldAttributes[$attribute] = $values[$attribute] ?? null;
            $this->newAttributes[$attribute] = $values[$attribute] ?? null;
        }
    }

    abstract public function attributes(): array;

    /*public function attributes(): array
    {
        $class = new \ReflectionClass($this);
        $names = [];
        foreach ($class->getProperties(\ReflectionProperty::IS_PUBLIC) as $property) {
            if (!$property->isStatic()) {
                $names[] = $property->getName();
            }
        }

        return $names;
    }*/

    public function getAttributes(): array
    {
        $values = [];
        foreach ($this->attributes() as $attribute) {
            $values[$attribute] = $this->{$attribute};
        }
        return $values;
    }

    public function setAttributes(array $values)
    {
        foreach ($this->attributes() as $attribute) {
            if (isset($values[$attribute])) {
                $this->{$attribute} = $values[$attribute];
            }
        }
    }

    public function isChanged(string $name, bool $identical = true): bool
    {
        if (isset($this->newAttributes[$name], $this->oldAttributes[$name])) {
            if ($identical) {
                return $this->newAttributes[$name] !== $this->oldAttributes[$name];
            }

            return $this->newAttributes[$name] != $this->oldAttributes[$name];
        }

        return isset($this->newAttributes[$name]) || isset($this->oldAttributes[$name]);
    }

    public function hasChanges(): bool
    {
        return count($this->getChanges()) > 0;
    }

    public function getChanges(): array
    {
        $names = $this->attributes();
        $names = array_flip($names);

        $attributes = [];
        foreach ($this->newAttributes as $name => $value) {
            if (isset($names[$name]) && (!array_key_exists($name, $this->oldAttributes) || $value !== $this->oldAttributes[$name])) {
                $attributes[$name] = $value;
            }
        }

        return $attributes;
    }

    public function __get(string $name)
    {
        if (!in_array($name, $this->attributes())) {
            return null;
        }

        $getter = 'get' . $name;
        if (method_exists($this, $getter)) {
            // read property, e.g. getName()
            return $this->{$getter}();
        }

        return $this->newAttributes[$name] ?? null;
    }

    public function __set(string $name, $value): void
    {
        if (!in_array($name, $this->attributes())) {
            return;
        }

        $setter = 'set' . $name;
        if (method_exists($this, $setter)) {
            // set property
            $this->{$setter}($value);
            return;
        }

        $this->newAttributes[$name] = $value;
    }

    public function __isset(string $name): bool
    {
        $getter = 'get' . $name;
        if (method_exists($this, $getter)) {
            return $this->{$getter}() !== null;
        }

        return $this->newAttributes[$name] !== null;
    }

    public function __unset(string $name): void
    {
        $setter = 'set' . $name;
        if (method_exists($this, $setter)) {
            $this->{$setter}(null);
            return;
        }

        $this->newAttributes[$name] = null;
    }

    public function toArray(): array
    {
        return $this->getAttributes();
    }
}
