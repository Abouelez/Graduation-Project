<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
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
            'name' => $this->name,
            'email' => $this->email,
            'avatar' => $this->whenNotNull($this->avatar),
            'bio' => $this->whenNotNull($this->bio),
            'is_instructor' => $this->is_instructor,
            'is_admin' => $this->is_admin,
            'enrolled_courses' => CourseResource::collection($this->whenLoaded('courses')),
            'cart' =>  CartResource::collection($this->whenLoaded('cart')),
            'wish-list' =>  WishResource::collection($this->whenLoaded('wishes')),
            'created-courses' => CourseResource::collection($this->whenLoaded('createdCourses'))
        ];
    }
}
