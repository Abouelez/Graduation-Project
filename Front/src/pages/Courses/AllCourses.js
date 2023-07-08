import React from 'react';
import "./ReactjsCources.css";
import SearchCountResult from '../../component/utility/searchCountResult';
import { Col, Row } from 'react-bootstrap';
import SideFilter from '../../component/utility/SideFilter';
import CourseCard from '../../component/Courses/CourseCard'
import { Spinner } from 'react-bootstrap'
import Pagination from '../../component/utility/Pagination';
import UseCoursesSearchHook from '../../Hook/Courses/UseCoursesSearchHook';

const AllCourses = () => {

  const [courses, total, result, onPress, getCourse] = UseCoursesSearchHook();

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
            <Col sm='3' xs='3' md='2' className='d-flex'>
              <SideFilter />
            </Col>
            <Col sm='9' xs='9' md='10'>
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