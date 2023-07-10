<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class QuizResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'questions' => $this->canAccess()
        ];
    }




    public function canAccess()
    {
        /** @var User $user */
        $user = auth()->user();
        if (
            $user
            && ($user->hasPurchased($this->course()->id)
                || $this->instructor()->id == $user->id
                || $user->is_admin)
        ) {
            return QuestionResource::collection($this->whenLoaded('questions'));
        }
        return null;
    }
}
