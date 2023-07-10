<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Controllers\ImageHelper;
use App\Http\Requests\PriceFilterRequest;
use App\Http\Requests\StoreCourseRequest;
use App\Http\Requests\UpdateCourseRequest;
use App\Http\Resources\CourseResource;
use App\Models\Course;
use Illuminate\Contracts\Cache\Store;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;
use PHPUnit\Framework\Constraint\Count;

/**
 * @group Courses
 * 
 * Managing Courses
 */

class CourseController extends Controller
{
    use ImageHelper;
    /**
     * Get Courses
     * 
     *  Return all courses.
     * 
     * @queryParam courses_per_page Number of course per page. Example: 10
     * @queryParam page Which page to show. Example: 1
     * 
     * @response status=200 {"data":[{"id":1,"title":"Dolores harum libero ullam.","description":"Consequatur magni et tempora voluptates vel sapiente. Beatae quo ipsa inventore beatae laudantium et. Modi ut perspiciatis dignissimos ratione qui. Cupiditate autem commodi eius.","thumbnail":"https://via.placeholder.com/640x480.png/004499?text=fuga","price":"827.31","published":1,"category":{"id":9,"name":"Sed soluta sunt delectus id."},"sub_category":null,"instructor":{"id":5,"name":"Wilford Skiles","email":"rafaela.wilderman@example.org","avatar":"https://via.placeholder.com/640x480.png/004444?text=similique","is_instructor":1,"is_admin":0},"rate":"0.0","total_enrollments":0,"your_review":null},{"id":2,"title":"Rem nostrum dolores tempore est veniam occaecati.","description":"Et et praesentium enim nemo sunt placeat et. Tempora earum accusantium sint porro. Voluptas facilis natus et eum ut nemo quia. Numquam sint provident nemo sit natus voluptatem atque.","thumbnail":"https://via.placeholder.com/640x480.png/0099ee?text=ad","price":"938.70","published":1,"category":{"id":1,"name":"Officiis nostrum rerum facere reprehenderit ipsum reprehenderit."},"sub_category":null,"instructor":{"id":5,"name":"Wilford Skiles","email":"rafaela.wilderman@example.org","avatar":"https://via.placeholder.com/640x480.png/004444?text=similique","is_instructor":1,"is_admin":0},"rate":"0.0","total_enrollments":0,"your_review":null},{"id":3,"title":"Iusto qui inventore quis minus quam magnam labore facere.","description":"Assumenda repellendus temporibus soluta provident enim nobis praesentium. Aut est totam saepe iste et quasi rerum in. Rerum nulla nihil aliquam odio a. Veniam asperiores asperiores ut et cupiditate eveniet.","thumbnail":"https://via.placeholder.com/640x480.png/00ccff?text=et","price":"328.63","published":1,"category":{"id":2,"name":"Et repudiandae quam sit ratione."},"sub_category":null,"instructor":{"id":1,"name":"Lilly Labadie","email":"jacky47@example.net","avatar":"https://via.placeholder.com/640x480.png/001111?text=dolores","is_instructor":1,"is_admin":0},"rate":"0.0","total_enrollments":0,"your_review":null},{"id":4,"title":"Voluptatum consequatur expedita laborum occaecati itaque corrupti.","description":"Sint iusto maiores eius quasi officia. Saepe qui quidem debitis sit. Dolore qui fuga earum laudantium aut. Praesentium hic nesciunt vero.","thumbnail":"https://via.placeholder.com/640x480.png/004411?text=id","price":"795.17","published":1,"category":{"id":14,"name":"Eius dolores consequatur earum quis id ad sed molestiae."},"sub_category":null,"instructor":{"id":1,"name":"Lilly Labadie","email":"jacky47@example.net","avatar":"https://via.placeholder.com/640x480.png/001111?text=dolores","is_instructor":1,"is_admin":0},"rate":"0.0","total_enrollments":0,"your_review":null},{"id":5,"title":"Officiis ut suscipit quasi sit recusandae itaque.","description":"Iure eum commodi illo voluptatem vel consequuntur ea. Ea sint optio reiciendis blanditiis omnis. Accusamus magnam quaerat culpa aperiam. Aperiam sint error vero.","thumbnail":"https://via.placeholder.com/640x480.png/0055bb?text=suscipit","price":"974.69","published":1,"category":{"id":8,"name":"Labore dolorum aut ipsum minus."},"sub_category":null,"instructor":{"id":8,"name":"Jeramy Will","email":"smiller@example.com","avatar":"https://via.placeholder.com/640x480.png/003300?text=dolorum","is_instructor":1,"is_admin":0},"rate":"0.0","total_enrollments":0,"your_review":null},{"id":6,"title":"Praesentium sit id iusto repudiandae amet.","description":"Soluta quia minima et est expedita praesentium quisquam. Alias omnis illum inventore distinctio occaecati eum odit. Et impedit sapiente et quis. Temporibus earum eum placeat sed sequi eos molestias.","thumbnail":"https://via.placeholder.com/640x480.png/001166?text=unde","price":"304.67","published":1,"category":{"id":2,"name":"Et repudiandae quam sit ratione."},"sub_category":null,"instructor":{"id":4,"name":"Wilton Vandervort","email":"jaclyn14@example.net","avatar":"https://via.placeholder.com/640x480.png/00eeee?text=eum","is_instructor":1,"is_admin":0},"rate":"0.0","total_enrollments":0,"your_review":null},{"id":7,"title":"Sunt non quia accusamus delectus id voluptatem et.","description":"Animi voluptatem dolore placeat dolorem id quisquam perspiciatis. Est quam occaecati similique dolores.","thumbnail":"https://via.placeholder.com/640x480.png/007788?text=mollitia","price":"278.89","published":1,"category":{"id":15,"name":"Natus et occaecati similique a impedit consequatur."},"sub_category":null,"instructor":{"id":2,"name":"Tatyana Wyman","email":"dexter.mohr@example.net","avatar":"https://via.placeholder.com/640x480.png/0066dd?text=ut","is_instructor":1,"is_admin":0},"rate":"0.0","total_enrollments":0,"your_review":null},{"id":8,"title":"Fugit a qui ipsa quasi ab aut.","description":"Eaque pariatur at sed ut veritatis voluptatem voluptatum exercitationem. Dolore eveniet possimus aut ut eos optio hic. Repellat nobis assumenda qui.","thumbnail":"https://via.placeholder.com/640x480.png/00eecc?text=ad","price":"783.07","published":1,"category":{"id":3,"name":"Quam fugiat expedita fuga id inventore quisquam."},"sub_category":null,"instructor":{"id":8,"name":"Jeramy Will","email":"smiller@example.com","avatar":"https://via.placeholder.com/640x480.png/003300?text=dolorum","is_instructor":1,"is_admin":0},"rate":"0.0","total_enrollments":0,"your_review":null},{"id":9,"title":"At nam odit qui debitis est.","description":"Quasi amet corrupti qui placeat ut laudantium doloremque. Dolore qui libero aut vel. Rerum hic voluptatibus quia possimus adipisci rerum sint.","thumbnail":"https://via.placeholder.com/640x480.png/0088cc?text=qui","price":"635.56","published":1,"category":{"id":14,"name":"Eius dolores consequatur earum quis id ad sed molestiae."},"sub_category":null,"instructor":{"id":5,"name":"Wilford Skiles","email":"rafaela.wilderman@example.org","avatar":"https://via.placeholder.com/640x480.png/004444?text=similique","is_instructor":1,"is_admin":0},"rate":"0.0","total_enrollments":0,"your_review":null},{"id":10,"title":"Eos rerum quia ut.","description":"Cupiditate est eos non exercitationem voluptas eos voluptatem. Voluptatum explicabo id accusantium iure repudiandae qui.","thumbnail":"https://via.placeholder.com/640x480.png/00bbcc?text=voluptatem","price":"72.36","published":1,"category":{"id":11,"name":"Distinctio sequi consequuntur et quae rerum reiciendis expedita."},"sub_category":null,"instructor":{"id":2,"name":"Tatyana Wyman","email":"dexter.mohr@example.net","avatar":"https://via.placeholder.com/640x480.png/0066dd?text=ut","is_instructor":1,"is_admin":0},"rate":"0.0","total_enrollments":0,"your_review":null}],"links":{"first":"http://localhost:8000/api/courses?page=1","last":"http://localhost:8000/api/courses?page=5","prev":null,"next":"http://localhost:8000/api/courses?page=2"},"meta":{"current_page":1,"from":1,"last_page":5,"links":[{"url":null,"label":"&laquo; Previous","active":false},{"url":"http://localhost:8000/api/courses?page=1","label":"1","active":true},{"url":"http://localhost:8000/api/courses?page=2","label":"2","active":false},{"url":"http://localhost:8000/api/courses?page=3","label":"3","active":false},{"url":"http://localhost:8000/api/courses?page=4","label":"4","active":false},{"url":"http://localhost:8000/api/courses?page=5","label":"5","active":false},{"url":"http://localhost:8000/api/courses?page=2","label":"Next &raquo;","active":false}],"path":"http://localhost:8000/api/courses","per_page":10,"to":10,"total":50}}
     */
    public function index(Request $request)
    {
        $numOfCoursePerPage = $request->courses_per_page ?? 10;
        $courses = Course::accepted()
            ->with(['category', 'subCategory', 'instructor'])
            ->paginate($numOfCoursePerPage);
        return  CourseResource::collection($courses);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
    }

    /**
     * Create Course
     * 
     * Create new course.
     * @authenticated
     * @bodyParam title string required Title of the course. Example: HTML Course
     * @bodyParam description string required Description of the course. Example: All you need in HTML
     * @bodyParam thumbnail file required Thumbnail of the course.
     * @bodyParam price number Price of the course. Example: 1000
     * @category_id integer requierd Which category course belong? Example: 2
     * 
     * @response status=201 {"data":{"id":51,"title":"HTML Course","description":"All You need in HTML","thumbnail":"/storage/content/courses/course51/thumbnail.jpeg","price":"1,000.00","published":null,"instructor":{"id":11,"name":"Abdulrahman","email":"abouelez10@gmail.com","is_instructor":1,"is_admin":1},"rate":"0.0","total_enrollments":0,"your_review":null}}
     * @response status=422 {"message":"The title field is required. (and 4 more errors)","errors":{"title":["The title field is required."],"description":["The description field is required."],"thumbnail":["The thumbnail field is required."],"price":["The price field is required."],"category_id":["The category id field is required."]}}
     */
    public function store(StoreCourseRequest $request)
    {
        $data = $request->except('thumbnail');
        $course = Course::create(array_merge($data, ['user_id' => auth()->user()->id]));

        $uploadedImage = $request->file('thumbnail');
        $resizedImage = Image::make($uploadedImage)->resize(300, 200);
        $imageName = 'thumbnail.' . $uploadedImage->getClientOriginalExtension();
        $imagePath = 'public/content/courses/course' . $course->id . '/' . $imageName;

        Storage::put($imagePath, $resizedImage->encode());


        $course->thumbnail = Storage::url($imagePath);
        $course->price *= 100;
        $course->save();

        return new CourseResource($course);
    }

    /**
     * Display Course
     * 
     * Display the Course Data without content.
     * 
     * @response status=200 {"data":{"id":1,"title":"Dolores harum libero ullam.","description":"Consequatur magni et tempora voluptates vel sapiente. Beatae quo ipsa inventore beatae laudantium et. Modi ut perspiciatis dignissimos ratione qui. Cupiditate autem commodi eius.","thumbnail":"https://via.placeholder.com/640x480.png/004499?text=fuga","price":"827.31","published":1,"category":{"id":9,"name":"Sed soluta sunt delectus id."},"sub_category":null,"instructor":{"id":5,"name":"Wilford Skiles","email":"rafaela.wilderman@example.org","avatar":"https://via.placeholder.com/640x480.png/004444?text=similique","is_instructor":1,"is_admin":0},"sections":[{"id":1,"title":"Section 1","lectures":[{"id":1,"title":"Lecture 1","type":"video","content":null}],"quizzes":[{"id":1,"title":"Quiz 1","questions":null}]}],"comments":[{"id":1,"comment_text":"good","user":{"id":11,"name":"Abdulrahman","email":"abouelez10@gmail.com","is_instructor":1,"is_admin":1}}],"rate":"0.0","reviews":[],"total_enrollments":0,"your_review":null}}
     */

    public function show(Course $course)
    {
        return new CourseResource($course->load(['category', 'subCategory', 'instructor', 'sections.lectures', 'sections.quizzes', 'comments', 'comments.user', 'reviews', 'reviews.user']));
    }

    /**
     * Acess Course
     * 
     * access full content of the course when you purchase it
     * @authenticated
     * @response status=200 {"data":{"id":1,"title":"Dolores harum libero ullam.","description":"Consequatur magni et tempora voluptates vel sapiente. Beatae quo ipsa inventore beatae laudantium et. Modi ut perspiciatis dignissimos ratione qui. Cupiditate autem commodi eius.","thumbnail":"https://via.placeholder.com/640x480.png/004499?text=fuga","price":"827.31","published":1,"category":{"id":9,"name":"Sed soluta sunt delectus id."},"sub_category":null,"instructor":{"id":5,"name":"Wilford Skiles","email":"rafaela.wilderman@a.org","avatar":"https://via.placeholder.com/640x480.png/004444?text=similique","is_instructor":1,"is_admin":0},"sections":[{"id":1,"title":"Section 1","lectures":[{"id":1,"title":"Lecture 1","type":"video","content":"/storage/content/courses/course1/section1/lecture.mp4"}],"quizzes":[{"id":1,"title":"Quiz 1","questions":[{"id":1,"question":"Question 1","answer":"A","A":"Answer A","B":"Answer B","C":"Answer C","D":"Answer D"},{"id":2,"question":"Question 1","answer":"A","A":"Answer A","B":"Answer B","C":"Answer C","D":"Answer D"}]}]}],"comments":[{"id":1,"comment_text":"good","user":{"id":11,"name":"Abdulrahman","email":"abouelez10@gmail.com","is_instructor":1,"is_admin":1}}],"rate":"0.0","reviews":[],"total_enrollments":0,"your_review":null}}
     */
    public function accessContent(Course $course)
    {

        return new CourseResource($course->load(['category', 'subCategory', 'instructor', 'sections.lectures', 'sections.quizzes', 'sections.quizzes.questions', 'comments', 'comments.user', 'reviews', 'reviews.user']));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update Course
     * 
     * Update Course Data.
     * @authenticated
     * 
     * @bodyParam title string required Title of the course. Example: HTML Course
     * @bodyParam description string required Description of the course. Example: All you need in HTML
     * @bodyParam price number Price of the course. Example: 1000
     * @category_id integer requierd Which category course belong? Example: 2
     * @response status=200 {"data":{"id":51,"title":"new title","description":"new description","thumbnail":"/storage/content/courses/course51/thumbnail.jpeg","price":"15.00","published":null,"instructor":{"id":11,"name":"Abdulrahman","email":"abouelez10@gmail.com","is_instructor":1,"is_admin":1},"rate":"0.0","total_enrollments":0,"your_review":null}}
     * @response status=422 {"message":"The title field is required. (and 3 more errors)","errors":{"title":["The title field is required."],"description":["The description field is required."],"price":["The price field is required."],"category_id":["The category id field is required."]}}
     */
    public function update(UpdateCourseRequest $request, Course $course)
    {
        $this->authorize('update', $course);

        $data = $request->except('thumbnail');
        $course->update($data);


        if ($request->hasFile('thumbnail')) {
            $uploadedImage = $request->file('thumbnail');
            $resizedImage = Image::make($uploadedImage)->resize(300, 200);
            $imageName = 'thumbnail.' . $uploadedImage->getClientOriginalExtension();
            $imagePath = 'public/content/courses/course' . $course->id . '/' . $imageName;

            if (Storage::exists($imagePath)) {
                Storage::delete($imagePath);
            }

            Storage::put($imagePath, $resizedImage->encode());

            $course->thumbnail = Storage::url($imagePath);
            $course->save();
        }

        return new CourseResource($course);
    }

    /**
     * Delete Course
     * 
     * Remove Course if it not published.
     * @authenticated
     * @response status=204
     */
    public function destroy(Course $course)
    {
        $this->authorize('delete', $course);

        if ($course->isPublished()) {
            return response()->json(['message' => 'The course is published and cannot be deleted.'], Response::HTTP_FORBIDDEN);
        }
        $course->delete();
        return response(null, Response::HTTP_NO_CONTENT);
    }

    /**
     * Search
     * 
     * Searches for course names and course descriptions and returns any courses that match the keyword
     * 
     * @queryParam keyword the word you are looking for. Example: HTML
     * @queryParam courses_per_page Number of course per page. Example: 10
     */

    // public function search(Request $request)
    // {
    //     $keyword = $request->input('keyword');
    //     $numOfCoursePerPage = $request->courses_per_page ?? 10;
    //     $results = Course::accepted()->where('title', 'LIKE', "%$keyword%")
    //         ->orWhere('description', 'LIKE', "%$keyword%")
    //         ->paginate($numOfCoursePerPage);
    //     return CourseResource::collection($results);
    // }

    // /**
    //  * Price Filter
    //  * 
    //  * Filter results based on min and max values
    //  * @hideFromQueryParams
    //  * @queryParam min number Minimum price. Example: 20
    //  * @queryParam max number Maximum price. Example: 1000
    //  * @queryParam order string In which order you want to see results. Example:asc
    //  * @queryParam courses_per_page Number of course per page. Example: 10
    //  */

    // public function priceFilter(Request $request)
    // {
    //     //The received value will be like this 199.99 and then convert it to 19999 like as we store in database
    //     $min = $request->input('min', 0) * 100;
    //     $max = $request->input('max', PHP_INT_MAX) * 100;
    //     $order = $request->input('order', 'desc');
    //     $numOfCoursePerPage = $request->courses_per_page ?? 10;
    //     $results = Course::filterByPrice($min, $max, $order)->accepted()->paginate($numOfCoursePerPage);
    //     return CourseResource::collection($results);
    // }
    /**
     * Filters
     * 
     * Filter by searching in names and descriptions, with price filter also
     * 
     * @queryParam keyword the word you are looking for. Example: HTML
     * @queryParam min number Minimum price. Example: 10
     * @queryParam max number Maximum price. Example: 50
     * @queryParam order string In which order you want to see results. Example:asc
     * @queryParam limit Number of course per page. Example: 10
     * 
     * @response status=200 {"data":[{"id":51,"title":"HTML  Course","description":"new description","thumbnail":"/storage/content/courses/course51/thumbnail.jpeg","price":"15.00","published":1,"instructor":{"id":11,"name":"Abdulrahman","email":"abouelez10@gmail.com","is_instructor":1,"is_admin":1},"rate":"0.0","total_enrollments":0,"your_review":null}],"links":{"first":"http://localhost:8000/api/courses/filter?page=1","last":"http://localhost:8000/api/courses/filter?page=1","prev":null,"next":null},"meta":{"current_page":1,"from":1,"last_page":1,"links":[{"url":null,"label":"&laquo; Previous","active":false},{"url":"http://localhost:8000/api/courses/filter?page=1","label":"1","active":true},{"url":null,"label":"Next &raquo;","active":false}],"path":"http://localhost:8000/api/courses/filter","per_page":10,"to":1,"total":1}}
     */
    public function filter(Request $request)
    {
        $keyword = $request->input('keyword', '');
        $min = $request->input('min', 0) * 100;
        $max = $request->input('max', PHP_INT_MAX) * 100;
        $order = $request->input('order', 'desc');
        $limit = $request->input('limit', 10);

        $results = Course::accepted()
            ->where('title', 'LIKE', "%$keyword%")
            ->orWhere('description', 'LIKE', "%$keyword%")
            ->filterByPrice($min, $max, $order)
            ->paginate($limit);

        return CourseResource::collection($results);
    }
}
