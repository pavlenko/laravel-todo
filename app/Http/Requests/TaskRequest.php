<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

final class TaskRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'   => 'required|max:255',
            'prev'   => 'nullable|integer',
            'next'   => 'nullable|integer',
            'status' => 'integer|min:0|max:2',
        ];
    }
}
