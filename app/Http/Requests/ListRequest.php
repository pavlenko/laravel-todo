<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

final class ListRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => 'required|max:255',
            'prev' => 'nullable|integer',
            'next' => 'nullable|integer',
        ];
    }
}
