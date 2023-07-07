<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use App\Http\Resources\CategoryResource;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

/** 
 * @group Categories
 * 
 * Managing Categories
 */
class CategoryController extends Controller
{
    /**
     * Get categories
     * 
     * List all categories
     */
    public function index()
    {
        $categories = Category::with('parent', 'children')->get();
        return CategoryResource::collection($categories);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Create Category
     * 
     * Store a newly created Category in storage.
     */
    public function store(StoreCategoryRequest $request)
    {
        $category = Category::create($request->all());
        return new CategoryResource($category);
    }

    /**
     * Display Category
     * 
     * Display the specified Category.
     */
    public function show(Category $category)
    {
        return new CategoryResource($category->load('courses', 'parent', 'children'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Category $category)
    {
        //
    }

    /**
     * Update Category
     * 
     * Update the specified Category in storage.
     */
    public function update(UpdateCategoryRequest $request, Category $category)
    {
        $category->update($request->all());

        return new CategoryResource($category);
    }

    /**
     * Delete Category
     * 
     * Remove the specified Category from storage.
     */
    public function destroy(Category $category)
    {
        $this->authorize('delete', Category::class);

        if ($category->courses()->exists() || $category->children()->exists()) {
            return response()->json(['message' => 'Category has courses or sub categories so cannot be deleted.'], Response::HTTP_FORBIDDEN);
        }
        $category->delete();
        return response(null, Response::HTTP_NO_CONTENT);
    }
}
