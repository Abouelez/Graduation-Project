<?php

namespace App\Http\Requests;

use App\Models\Lecture;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Gate;

class StoreLectureRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Gate::allows('create', Lecture::class);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|string|min:3|max:60',
            'type' => 'required',
            'section_id' => 'required|integer',
            'content' => 'required|mimetypes:video/*,text/plain,text/csv,application/pdf',
        ];
    }
}
