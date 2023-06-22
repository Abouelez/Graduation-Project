<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;
use Image;

trait ImageHelper
{
    public function imageResizeAndSave($uploaded, $name, $path, $width = 300, $height = 200)
    {
        $resizedImage =
            Image::make($uploaded)->resize($width, $height, function ($constraint) {
                $constraint->aspectRatio();
                $constraint->upsize();
            });

        $imageName = $name . '.' . $uploaded->getClientOriginalExtension();
        $imagePath = $path . '/' . $imageName;

        Storage::disk('content')->putFileAs('', $resizedImage, $imagePath);
        return $imagePath;
    }
}
