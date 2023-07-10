import React, { useEffect, useState } from 'react';
import '../../css/instructorcss/Videos.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaBell, FaSearch } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { GET_INSTRUCTOR_COURSES } from '../../redux/type';
import { getInstructorCourses } from '../../redux/actions/instructorAction';

const CoursesDashboard = () => {
  const route = useNavigate();
  const [courseData, setCourseData] = useState(null);

  let accessToken = localStorage.getItem('token');
  const [loadin, setLoading] = useState(false);
  const [error, setError] = useState(null);
  /*
   //  useEffect(() => {
   //    const accessToken = localStorage.getItem('token');
   //    setLoading(true);
   //    fetch('http://localhost:8000/api/instructor-dashboard', {
   //      method: 'GET',
   //      headers: {
   //        'Content-Type': 'application/json',
   //        'Accept': 'application/json',
   //        'Authorization': `Bearer ${accessToken}`
   //      }
   //    })
   //    .then(response => {
   //      if (response) {
   //       console.log(response);
   //       return response.json();
 
   //      } else {
   //        throw new Error('Failed to fetch data');
   //      }
   //    })
   //    .then(data => {
   //     console.log(data);
   //      setCourseData(data);
   //      setLoading(false);
   //    })
   //    .catch(error => {
   //      setError(error);
   //      setLoading(false);
   //    });
   //  }, []);
   */

  const dispatch = useDispatch();
  const { courses, loading } = useSelector(state => state.instructor);

  useEffect(() => {
    dispatch(getInstructorCourses());
  }, []);

 

  return (
    <>

      <div className='head-titlt'>
        <h4>Student</h4>
        <p>Switch to the student view here - get back to the courses you’re taking.</p>
        <FaBell className='i' />
        <div className='name'>AG</div>
      </div>
      <div className='A'>
        <span className='h'>Cources</span>
      </div>
      <div className='H'>
        <span>Jump Into Course Creation</span>
        <Link to='/instructorDashboard/createCourse' className='btn btn-primary'>Create Your Course</Link>
      </div>

      <div className='VDS'>
        <div className='TT'>
          <div className='search'>
            <input type='search' placeholder='Search Your Cources' />
            <FaSearch className='ic' />
          </div>


        </div>
        {
          loadin ? <h1>loading</h1> :
          courses?.data?.data["created-courses"].map(course => (
          
            <div className='box'>
              <div className='sec'>
                <img src='/images/1 (1).png' alt='' />
                <div>
                  <h2>{course.title}</h2>
                  {course.published?<h2>Public{course.id}</h2>:<h2>private</h2>}
                </div>
              </div>
              <div className='ED'>
              <Link to={`/courseUpdate/${course.id}`} className='btn btn-primary'>Edit</Link>
              <button className='btn btn-danger'>Delete</button>
              </div>
            </div>
          ))

            
        }



      </div>
    </>
  );
}

export default CoursesDashboard;