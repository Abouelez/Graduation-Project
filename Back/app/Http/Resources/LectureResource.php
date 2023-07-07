<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class LectureResource extends JsonResource
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
            'type' => $this->type,
            'content' => $this->canAccess($request),
            // 'section' => new SectionResource($this->whenLoaded('section'))
        ];
    }

    public function canAccess($request)
    {
        $user = auth()->user();
        if (
            $user
            && ($user->hasPurchased($this->course()->id)
                || $this->instructor()->id == $user->id
                || $user->is_admin)
        ) {
            return $this->content;
        }
        return null;
    }
}
