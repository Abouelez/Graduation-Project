<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SectionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'title' => $this->title,
            'lectures' => LectureResource::collection($this->whenLoaded('lectures')),
            'quizzes' => QuizResource::collection($this->whenLoaded('quizzes'))
        ];
    }
}
