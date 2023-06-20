import React, { useEffect, useState, CSSProperties  } from 'react'
import "../../css/Home.css"
import AllCourses from "../../component/utility/AllCourses"
import Instructor from '../../component/utility/Instructor'
import Cat from '../../component/utility/Cat'
import CourseCard from '../../component/utility/CourseCard'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { getAllCourses } from '../../redux/actions/courseAction'

import { Spinner } from 'react-bootstrap'
function HomePage() {

  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCourses());
  }, []);

  const { courses, loading } = useSelector(state => state.allCourses);


  //console.log(courses);





  return (
    <>
      <section className='home-wraber-1 '>
        <div className='main-banner position-relative'>
          <img src='images/homepage.jpeg' alt='main-banner' />
          <div className='main-banner-content position-absolute'>
            <h4>The Best Theme</h4>
            <h5>Top Education <br /> Cources 2022/23</h5>
            <p></p>
            <a className='button' href='h'>FIND COURCE</a>
          </div>
        </div>
      </section>
      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>POPULAR COURSES</h3>
            </div>
            <div className='col-12'>
              <h1 className='section-heading'>Pick a course to <br />
                get started your study</h1>
            </div>
            <div className='col-12'>
              <div className='courses d-flex justify-content-between align-items-center flex-wrap'>
                {courses ? (
                  courses.data.slice(0, 4).map((course) => {
                    const { id, title, thumbnail, price, instructor } = course;
                    const { name: instructorName } = instructor;
                    return (
                      <CourseCard
                        key={id}
                        id={id}
                        title={title}
                        instructor={instructorName}
                        price={price}
                        thumbnail={thumbnail}
                      />
                    );
                  })
                ) : (<Spinner/>
                )}
              </div>

            </div>
            <div className='col-12'>
              <a className='button  coursebtn' href='h'>EXPLORE ALL COURCES</a>
            </div>
          </div>
        </div>
      </section>
      <section className='categorysection'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='categoryh'>CHECKOUT OUR CATEGORIES</h3>
            </div>
            <div className='col-12'>
              <h1 className='categoryh'>Top categories for popular<br />
                courses to show</h1>
            </div>
            <div className='col-12'>
              <div className='categorys d-flex justify-content-between align-items-center flex-wrap'>
                <Cat />
                <Cat />
                <Cat />
                <Cat />
                <Cat />
                <Cat />
              </div>

            </div>
          </div>
        </div>
      </section>
      <section className='instractorssection'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='categoryh'>QUALIFIED TEACHERS</h3>
            </div>
            <div className='col-12'>
              <h1 className='categoryh'>Meet the teacher who<br />
                teaches you online</h1>
            </div>
            <div className='col-12'>
              <div className=' instractors d-flex justify-content-between align-items-center flex-wrap'>
                <Instructor />
                <Instructor />
                <Instructor />
                <Instructor />
                <Instructor />

              </div>

            </div>
          </div>
        </div>
      </section>
      <AllCourses />
    </>
  )
}

export default HomePage
