<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;

trait ImageHelper
{
    public function saveImage($uploaded, $name, $path)
    {
        $imageName = $name . '.' . $uploaded->getClientOriginalExtension();
        $imagePath = $path . '/' . $imageName;

        Storage::disk('content')->putFileAs('', $uploaded, $imagePath);
        return $imagePath;
    }
}
