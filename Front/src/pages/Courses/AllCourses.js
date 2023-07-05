import React, { useState, useEffect } from 'react';
import "./ReactjsCources.css";
import SearchCountResult from '../../component/utility/searchCountResult';
import { Col, Row } from 'react-bootstrap';
import SideFilter from '../../component/utility/SideFilter';
import CourseCard from '../../component/Courses/CourseCard'
import { useSelector, useDispatch } from 'react-redux'
import { Spinner } from 'react-bootstrap'
import Pagination from '../../component/utility/Pagination';
import UseCoursesSearchHook from '../../Hook/Courses/UseCoursesSearchHook';
import { getAllCoursesPage } from '../../redux/actions/courseAction';

const AllCourses = () => {

  const [courses, total, result, onPress, getCourse] = UseCoursesSearchHook();
  const dispatch = useDispatch();

  // const {courses, loading } = useSelector(state => state.allCourses);
  // if (courses)
  let totall 
  let pageCount 


  if (total) {
    pageCount = total;
    totall = result;
  } else {
    pageCount = 0;
  }

  return (
    <>
      <section>

        <div className='container'>
          <SearchCountResult title={`${totall} courses`} />
          <Row className='d-flex flex-row'>
            <Col sm='2' xs='2' md='1' className='d-flex'>
              <SideFilter />
            </Col>
            <Col sm='10' xs='10' md='11'>
              <div className='row'>
                <div className='col-12'>
                  <div className='courses d-flex justify-content-between align-items-center flex-wrap gap-4'>
                    {courses && Array.isArray(courses) ? (
                      courses.map((course) => (
                        <CourseCard
                          key={course.id}
                          course={course}
                        />
                      ))
                    ) : (
                      <Spinner />
                    )}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          {
            courses && (<Pagination pageCount={pageCount} onPress={onPress} />)
          }
        </div>
      </section>
    </>
  );
};

export default AllCourses;