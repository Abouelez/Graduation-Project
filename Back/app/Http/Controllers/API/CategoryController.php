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
     * 
     * @response status=200 {"data":[{"id":1,"name":"Officiis nostrum rerum facere reprehenderit ipsum reprehenderit.","parent":null,"children":[]},{"id":2,"name":"Et repudiandae quam sit ratione.","parent":null,"children":[]},{"id":3,"name":"Quam fugiat expedita fuga id inventore quisquam.","parent":null,"children":[]}]}
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
     * @authenticated
     * 
     * @bodyParam name string required Name of new category. Example: Development
     * @response status=200 {"data":{"id":16,"name":"new"}}
     * @response status=422 {"message":"The name field is required.","errors":{"name":["The name field is required."]}}
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
     * @response status=200 {"data":{"id":2,"name":"Et repudiandae quam sit ratione.","parent":null,"children":[],"courses":[{"id":3,"title":"Iusto qui inventore quis minus quam magnam labore facere.","description":"Assumenda repellendus temporibus soluta provident enim nobis praesentium. Aut est totam saepe iste et quasi rerum in. Rerum nulla nihil aliquam odio a. Veniam asperiores asperiores ut et cupiditate eveniet.","thumbnail":"https://via.placeholder.com/640x480.png/00ccff?text=et","price":"328.63","published":1,"instructor":{"id":1,"name":"Lilly Labadie","email":"jacky47@example.net","avatar":"https://via.placeholder.com/640x480.png/001111?text=dolores","is_instructor":1,"is_admin":0},"rate":"0.0","total_enrollments":0,"your_review":null},{"id":6,"title":"Praesentium sit id iusto repudiandae amet.","description":"Soluta quia minima et est expedita praesentium quisquam. Alias omnis illum inventore distinctio occaecati eum odit. Et impedit sapiente et quis. Temporibus earum eum placeat sed sequi eos molestias.","thumbnail":"https://via.placeholder.com/640x480.png/001166?text=unde","price":"304.67","published":1,"instructor":{"id":4,"name":"Wilton Vandervort","email":"jaclyn14@example.net","avatar":"https://via.placeholder.com/640x480.png/00eeee?text=eum","is_instructor":1,"is_admin":0},"rate":"0.0","total_enrollments":0,"your_review":null}]}}
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
     * @authenticated
     * 
     * @bodyParam name string required Updated name of category, Ex: Tech
     * @response status=200 {"data":{"id":16,"name":"Tech"}}
     * @response status=422 {"message":"The name field is required.","errors":{"name":["The name field is required."]}}
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
     * @authenticated
     * 
     * @response status=204
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
