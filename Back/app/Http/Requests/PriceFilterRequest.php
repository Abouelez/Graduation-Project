<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;


/**

 */
class PriceFilterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'min' => 'numeric',
            'max' => 'numeric',
            'order' => 'string'
        ];
    }

    // protected function prepareForValidation()
    // {
    //     $this->merge([
    //         'min' => $this->input('min', 0),
    //         'max' => $this->input('max', PHP_INT_MAX),
    //         'order' => $this->input('order', 'desc'),
    //     ]);
    // }
}
