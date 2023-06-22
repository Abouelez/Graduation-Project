<<<<<<< HEAD
import React, { useEffect, useState, CSSProperties } from 'react'
import "../../css/Home.css"
import InstructorCard from '../../component/Instructor/InstructorCard'
import CourseCard from '../../component/Courses/CourseCard'
import { useSelector, useDispatch } from 'react-redux'
import { getAllCourses } from '../../redux/actions/courseAction'

import { Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CatCard from '../../component/categories/CatCard'
function HomePage() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCourses());
  }, []);

  const { courses, loading } = useSelector(state => state.allCourses);
  console.log(loading);
=======
import React, { useEffect, useState } from 'react'
import "../../css/Home.css"
import AllCourses from "../../component/utility/AllCourses"
import Instructor from '../../component/utility/Instructor'
import Cat from '../../component/utility/Cat'
import CourseCard from '../../component/utility/CourseCard'
import axios from 'axios'
import {useSelector,useDispatch} from 'react-redux'
import {getAllCourses} from '../../redux/actions/courseAction'
function HomePage() {
  
const [data,setData]=useState()
  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(getAllCourses());
  }, [dispatch]); 
  const data0=useSelector(state =>state.allCourses.courses)
  const loading=useSelector(state =>state.allCourses.loading)
  if (data0){
    
console.log(data0);
console.log(loading);
  }
  

    
  
  
>>>>>>> 459e6535796b0307256781af4de090612d9a5dd2
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
<<<<<<< HEAD
                {courses ? (
                  courses.data.slice(0, 4).map(({ id, title, thumbnail, price, instructor }) => (
                    <CourseCard
                      key={id}
                      id={id}
                      title={title}
                      instructor={instructor.name}
                      price={price}
                      thumbnail={thumbnail}
                    />
                  ))
                ) : (
                  <Spinner />
                )}
=======
               {data0?
                <CourseCard course={data0.data[0]}/>:<h1>noneeeeeeeee</h1>
                }
>>>>>>> 459e6535796b0307256781af4de090612d9a5dd2
              </div>
            </div>
            <div className='col-12'> 
              <Link  to={"/allcourses"}>
                <h2><span className='button coursebtn' >EXPLORE ALL COURSES</span></h2>
              </Link>
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
                <CatCard/>
                <CatCard/>
                <CatCard/>
                <CatCard/>
                <CatCard/>
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
                <InstructorCard /> 
                <InstructorCard />
                <InstructorCard />
                <InstructorCard />
                <InstructorCard />

              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
