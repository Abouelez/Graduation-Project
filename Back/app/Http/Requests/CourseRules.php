<?php

namespace App\Http\Requests;

trait CourseRules
{
    public function commonRules()
    {
        return [
            'title' => 'required|string|min:5|max:255',
            'description' => 'required|string|min:10|max:5000',
            'thumbnail' => 'required|image',
            'price' => 'required|numeric|min:0',
            'category_id' => 'required|integer',
            'sub_category_id' => 'integer',
            // 'user_id' => 'required|integer',
        ];
    }
}
