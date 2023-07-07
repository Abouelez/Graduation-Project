<?php

namespace App\Http\Requests;

use App\Policies\QuizQuestionPolicy;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Gate;

class StoreQuizQuestionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Gate::allows('create', QuizQuestionPolicy::class);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'question' => 'required|string|min:3|max:100',
            'answer' => 'required|string|size:1',
            'A' => 'required|string|min:1|max:100',
            'B' => 'required|string|min:1|max:100',
            'quiz_id' => 'required|integer'
        ];
    }
}
