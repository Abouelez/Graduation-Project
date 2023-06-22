import React, { useState,useEffect } from 'react';
import "./ReactjsCources.css";
import Slider from '../../component/utility/Slider';
import data from '../../component/utility/data.json'
import SearchCountResult from '../../component/utility/searchCountResult';
import { Col, Row } from 'react-bootstrap';
import SideFilter from '../../component/utility/SideFilter';
import CourseCard from '../../component/Courses/CourseCard'
import { useSelector, useDispatch } from 'react-redux'
import { getAllCourses } from '../../redux/actions/courseAction'

import { Spinner } from 'react-bootstrap'
const AllCourses = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCourses());
  }, []);

  const { courses, loading } = useSelector(state => state.allCourses);
  //console.log(courses);


  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 12;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = data.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(data.length / recordsPerPage);
  const pageNumbers = [...Array(totalPages).keys()].map(n => n + 1);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  
  return (
    <>
    
    
      <section>

        <div className='container'>
          <SearchCountResult title='355 courses'/>
          <Row className='d-flex flex-row'>
            <Col sm='2' xs='2' md='1' className='d-flex'>
            <SideFilter/>
            </Col>
            <Col  sm='10' xs='10' md='11'>
            <div className='row'>
            <div className='col-12'>
              <div className='courses d-flex justify-content-between align-items-center flex-wrap gap-4'>
              {courses ? (
                  courses.data.map(({ id, title, thumbnail, price, instructor }) => (
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
              </div>
            </div>
          </div>
            </Col>
          </Row>
          
          <div className='pagination1'>
            <ul className='pagination'>
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button className='page-link' onClick={prevPage}>Prev</button>
              </li>
              {pageNumbers.map((pageNumber) => (
                <li
                  key={pageNumber}
                  className={`page-item ${currentPage === pageNumber ? 'active' : ''}`}
                >
                  <button className='page-link' onClick={() => changePage(pageNumber)}>
                    {pageNumber}
                  </button>
                </li>
              ))}
              <li className={`page-item ${currentPage === totalPages ? 'disabled': ''}`}>
                <button className='page-link' onClick={nextPage}>Next</button>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllCourses;