<?php

namespace App\Http\Resources;

use App\Models\Category;
use App\Models\SubCategory;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CourseResource extends JsonResource
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
            'description' => $this->description,
            'thumbnail' => $this->thumbnail,
            'price' => number_format(($this->price) / 100, 2),
            'category' => $this->category,
            'sub_category' => $this->whenNotNull($this->subCategory),
            'instructor' => new UserResource($this->instructor),

        ];
    }
}
