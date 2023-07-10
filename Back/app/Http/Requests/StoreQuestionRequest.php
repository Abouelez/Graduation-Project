<?php

namespace App\Http\Requests;

use App\Models\Question;
use App\Models\Questions;
use App\Models\QuizQuestion;
use App\Policies\QuizQuestionPolicy;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Gate;

class StoreQuestionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Gate::allows('create', Question::class);
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
