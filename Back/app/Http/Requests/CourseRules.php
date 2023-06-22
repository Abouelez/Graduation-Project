<?php

namespace App\Http\Requests;

trait CourseRules
{
    public function commonRules()
    {
        return [
            'title' => 'required|string|min:5|max:255',
            'description' => 'required|string|min:10|max:5000',
            'thumbnail' => 'required|image|max:2048',
            'price' => 'required|numeric|min:0',
            'category_id' => 'required',
            'sub_category_id' => '',
            'user_id' => 'required',
        ];
    }
}
