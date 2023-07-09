<?php

namespace App\Http\Resources;

use App\Models\Category;
use App\Models\Review;
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
        if (!$request->user()) {
            $your_review = null;
        } else {
            $your_review =
                Review::where('course_id', $this->id)
                ->where('user_id', $request->user()->id)
                ->first();
        }
        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'thumbnail' => $this->thumbnail,
            'price' => number_format(($this->price) / 100, 2),
            'published' => $this->AC,
            'category' => new CategoryResource($this->whenLoaded('category')),
            'sub_category' => new CategoryResource($this->whenLoaded('subCategory')),
            'instructor' => new UserResource($this->instructor),
            'sections' => SectionResource::collection($this->whenLoaded('sections')),
            'comments' => CommentResource::collection($this->whenLoaded('comments')),
            'rate' => number_format($this->reviews()->avg('rate'), 1),
            'reviews' => ReviewResource::collection($this->whenLoaded('reviews')),
            'total_enrollments' => $this->users->count(),
            'your_review' => $this->whenNotNull(new ReviewResource($your_review)),

        ];
    }
}
