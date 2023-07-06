import React, { useEffect } from 'react'
import "../../css/Coursedetails.css"
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCourse } from '../../redux/actions/courseAction';
const Coursedetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getCourse(id));
    }, [dispatch, id]);
    
    const course = useSelector((state) => state.allCourses);

    let details = null;
    if (course && course.courses && course.courses.data) {
      details = course.courses.data;
    }
   console.log(course);
    return (
        <div className="container my-5 margin-8">
          {details &&(<div className="row">
            <div className="col-lg-8">
              <div className="course-details">
                <h1 className="course-title display-3 mb-4">{  details.title}</h1>
                <img className="course-image img img-fluid mb-4" src={ details.thumbnail} alt="Course Image" />
                <p className="course-description lead mb-4">{ details.description} </p>
                <div className="course-details-info mb-4">
                  <div className="d-flex mb-2">
                    <span className="mr-2">Instructor:</span>
                    { details.instructor && details.instructor.name && (
                        <span>{details.instructor.name}</span>
                      )}
                  </div>
                  <div className="d-flex mb-2">
                    <span className="mr-2">Duration:</span>
                    <span>Course Duration</span>
                  </div>
                  <div className="d-flex mb-2">
                    <span className="mr-2">Skill Level:</span>
                    <span>Course Skill Level</span>
                  </div>
                  <div className="d-flex mb-2">
                    <span className="mr-2">Price:</span>
                    <span>Course Price</span>
                  </div>
                </div>
                <div className="course-syllabus mb-4">
                  <h2 className="display-4 mb-4">Syllabus</h2>
                  <div className="course-section mb-4">
                    <h3 className="h4 mb-3">Section 1 Title</h3>
                    <ul className="list-unstyled mb-0">
                      <li>Lesson 1 Title</li>
                      <li>Lesson 2 Title</li>
                      <li>Lesson 3 Title</li>
                    </ul>
                  </div>
                  <div className="course-section mb-4">
                    <h3 className="h4 mb-3">Section 2 Title</h3>
                    <ul className="list-unstyled mb-0">
                      <li>Lesson 1 Title</li>
                      <li>Lesson 2 Title</li>
                      <li>Lesson 3 Title</li>
                    </ul>
                  </div>
                  <div className="course-section mb-4">
                    <h3 className="h4 mb-3">Section 3 Title</h3>
                    <ul className="list-unstyled mb-0">
                      <li>Lesson 1 Title</li>
                      <li>Lesson 2 Title</li>
                      <li>Lesson 3 Title</li>
                    </ul>
                  </div>
                </div>
                 
              </div>
            </div>
            <div className="col-lg-4">
              <div className="course-sidebar bg-light p-3">
                <div className="course-stats mb-3">
                  <div className="course-rating display-4 mb-2">
                   rate :{details.Rate}<i className="fas fa-star"></i>
                  </div>
                  <div className="course-enrollment lead">1000+ enrolled</div>
                </div>
                <div className="course-cta mb-3">
                  <button className="btn btn-primary btn-lg btn-block mb-2">Enroll Now</button>
                  <button className="btn btn-outline-primary btn-lg btn-block">Add to Wishlist</button>
                </div>
                <div className="course-share mb-3">
                  <h3 className="h5 mb-3">Share:</h3>
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item mr-3">
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="list-inline-item mr-3">
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="course-features mb-3">
                  <h3 className="h5 mb-3">Course Features:</h3>
                  <ul className="list-unstyled mb-0">
                    <li>Feature 1</li>
                    <li>Feature 2</li>
                    <li>Feature 3</li>
                    <li>Feature 4</li>
                  </ul>
                </div>
                <div className="course-categories">
                  <h3 className="h5 mb-3">Categories:</h3>
                  <ul className="list-unstyled mb-0">
                    <li>{details.category ?details.category.name:null}</li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>)}
        </div>
      );
    };

export default Coursedetails
