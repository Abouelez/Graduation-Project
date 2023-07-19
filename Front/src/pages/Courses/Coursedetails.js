import React, { useEffect } from 'react'
import "../../css/Coursedetails.css"
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCourse } from '../../redux/actions/courseAction';
const Coursedetails = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  
  const course = useSelector((state) => state.allCourses.oneCourse);
  const details = course?.data?.data;
  useEffect(() => {
    dispatch(getCourse(id));
  }, [dispatch, id]);
  return (
    <div className="container my-5 margin-8">
      {details && (<div className="row">
        <div className="col-lg-8">
          <div className="course-details mt-4">
            <h1 className="course-title display-3 mb-4" style={{fontWeight:"bold" ,fontSize:"20px"}}>{details.title}</h1>
            <img className="course-image img img-fluid mb-4" src={`http://localhost:8000${details.thumbnail}`} alt="Course Image" />
            <p className="course-description lead mb-4">{details.description} </p>
            <div className="course-details-info mb-4">
              <div className="d-flex mb-2">
                <span className="mr-2" style={{fontWeight:"bold" ,fontSize:"20px"}} >Instructor:</span>
                {details.instructor && details.instructor.name && (
                  <span style={{fontWeight:"bold" ,fontSize:"20px" , color:"blue", marginLeft:"10px"}}>{details.instructor.name}</span>
                )}
              </div>
              <div className="d-flex mb-2">
                <span className="mr-2"  style={{fontWeight:"bold" ,fontSize:"20px"}}>Duration:</span>
                <span  style={{fontWeight:"bold" ,fontSize:"20px" , color:"blue", marginLeft:"10px"}}>Course Duration</span>
              </div>
              <div className="d-flex mb-2">
                <span className="mr-2"  style={{fontWeight:"bold" ,fontSize:"20px"}}>Skill Level:</span>
                <span  style={{fontWeight:"bold" ,fontSize:"20px" , color:"blue", marginLeft:"10px"}}>Course Skill Level</span>
              </div>
              <div className="d-flex mb-2">
                <span className="mr-2"  style={{fontWeight:"bold" ,fontSize:"20px" }}>Price:</span>
                <span  style={{fontWeight:"bold" ,fontSize:"20px" , color:"blue", marginLeft:"10px"}}>{details.price}</span>
              </div>
            </div>
            <div className="course-syllabus mb-4">
              <h2 className="display-4 mb-4"  style={{fontWeight:"bold"}}>Syllabus</h2>
              {
                details.sections && details.sections.map((section, index) => {
                  return (
                    <div className="course-section mb-4">
                      <h3 className="h4 mb-3">{section.title}</h3>
                      <ul className="list-unstyled mb-0">
                        <li>{section.id}</li>
                        <li>Lesson 2 Title</li>
                        <li>Lesson 3 Title</li>
                      </ul>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        <div className="col-lg-4" style={{height:"100vh"}}>
          <div className="course-sidebar bg-light p-3 mt-4">
            <div className="course-stats mb-3">
              <div className="course-rating display-4 mb-2">
                rate :{details.rate}<i className="fas fa-star"></i>
              </div>
              <div className="course-enrollment lead">{details.total_enrollments} enrolled</div>
            </div>
            <div className="course-cta mb-3">
              <Link to="/checkout">
                <button className="btn btn-primary btn-lg btn-block mb-2">
                  Enroll Now
                </button>
              </Link>
              <button className="btn btn-outline-primary btn-lg btn-block">Add to Wishlist</button>
            </div>
            <div className="course-categories">
              <h3 className="h5 mb-3">Categories:</h3>
              <ul className="list-unstyled mb-0">
                <li>{details.category ? details.category.name : null}</li>

              </ul>
            </div>
          </div>
        </div>
      </div>)}
    </div>
  );
};

export default Coursedetails
