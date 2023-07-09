import React, { useEffect, useState } from 'react';
import '../../css/instructorcss/Videos.css';
import { useNavigate } from 'react-router-dom';
import { FaBell } from 'react-icons/fa';
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
  //const = useSelector(state => state.courses);
  const { courses, loading }   = useSelector(state => state.instructor);

  //console.log(courses.data.data["created-courses"]);
  useEffect(() => {
    dispatch(getInstructorCourses());
  }, []); 
    


  return (
    <>
    <div>
    <div className='A'>
      <span className='h'>Courses</span>
    </div>

    <div className='H '>
      <span>Jump Into Course Creation</span>
      <a href='' className='btn btn-primary' onClick={() => { route('/instructorDashboard/createCourse') }}>Create Your Course</a>
    </div>

    {loading ? (
      <div>Loading...</div>
    ) : (
      <>
        <div className='title'>
          <h2>Based on your experience, we think these resources will be helpful.</h2>
        </div>

        <h2 className='ti'>Have questions? Here are our most popular instructor resources.</h2>

        <div className='head top'>
          {courses &&courses.data &&courses.data.data && courses.data.data["created-courses"].slice(0,3).map(course => (
            <div className='Container' key={course.id}>
              <h2>{course.title}</h2>
              <p>{course.description}</p>
            </div>
          ))}
        </div>
      </>
    )}
  </div>
    </>
  );
}

export default CoursesDashboard;