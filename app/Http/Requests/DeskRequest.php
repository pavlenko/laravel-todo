<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

final class DeskRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => 'required|max:255',
        ];
    }
}
