<?php

namespace App\DTO;

abstract class BaseDTO
{
    private array $oldAttributes = [];
    private array $newAttributes = [];

    public function __construct(array $values)
    {
        foreach ($this->attributes() as $attribute => $type) {
            $this->oldAttributes[$attribute] = $this->typecast($type, $values[$attribute] ?? null);
            $this->newAttributes[$attribute] = $this->typecast($type, $values[$attribute] ?? null);
        }
    }

    protected function typecast(?string $type, $value)
    {
        if (null === $value || gettype($value) === $type) {
            return $value;
        }

        if (class_exists($type)) {
            return new $type($value);
        }

        if (substr($type, -2) === '[]') {
            $type = substr($type, 0, -2);
            $data = [];
            foreach ($value as $key => $item) {
                $data[$key] = $this->typecast($type, $item);
            }
            return $data;
        }

        switch ($type) {
            case 'string':
                if (is_float($value)) {
                    return str_replace(',', '.', (string) $value);
                }

                return (string) $value;
            case 'boolean':
                return $value && $value !== "\0";
            case 'float':
            case 'double':
                return (float) $value;
            case 'array':
                return '' === $value ? [] : [$value];
            case 'object':
                return (object) $value;
        }

        return $value;
    }

    abstract public function attributes(): array;

    public function getAttributes(): array
    {
        $values = [];
        foreach ($this->attributes() as $attribute => $type) {
            $values[$attribute] = $this->{$attribute};
        }
        return $values;
    }

    public function setAttributes(array $values)
    {
        foreach ($this->attributes() as $attribute => $type) {
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
        $names = array_keys($this->attributes());
        $names = array_flip($names);

        $attributes = [];
        foreach ($this->newAttributes as $name => $value) {
            if (isset($names[$name]) && (!array_key_exists($name, $this->oldAttributes) || $value !== $this->oldAttributes[$name])) {
                $attributes[$name] = $value;
            }
        }

        return $attributes;
    }

    public function getOldValue(string $name)
    {
        if (!array_key_exists($name, $this->attributes())) {
            return null;
        }

        return $this->oldAttributes[$name] ?? null;
    }

    public function __get(string $name)
    {
        if (!array_key_exists($name, $this->attributes())) {
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
        if (!array_key_exists($name, $this->attributes())) {
            return;
        }

        $setter = 'set' . $name;
        if (method_exists($this, $setter)) {
            // set property
            $this->{$setter}($value);
            return;
        }

        $this->newAttributes[$name] = $this->typecast($this->attributes()[$name], $value);
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
