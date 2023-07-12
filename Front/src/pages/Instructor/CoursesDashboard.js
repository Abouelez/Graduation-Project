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

     
      <div className='A'>
        <span className='h'>Cources</span>
      </div>
      <div className='H'>
        <span>Jump Into Course Creation</span>
        <Link to='/instructorDashboard/createCourse' className='btn btn-primary'>Create Your Course</Link>
      </div>

      <div className='VDS'>
        <div className='TT'>
          


        </div>
        {
          loadin ? <h1>loading</h1> :
          courses?.data?.data["created-courses"].slice(0,5).map(course => (
          
            <div className='box p-2' key={course.id}>
              <div className='sec'>
                <img src={`http://localhost:8000${course.thumbnail}`} alt='' />
                <div className='p-2 text-primary'>
                  <h2>{course.title}</h2>
                  {course.published?<h2>Public</h2>:<h2>private</h2>}
                </div>
              </div>
              <div className='ED'>
              <Link to={`/courseUpdate/${course.id}`} className='btn btn-primary mx-2'><button className='btn'>Edit</button></Link>
              <Link to={`/courseUpdate/${course.id}`} className='btn btn-danger'><button className='btn'>Delete</button></Link>
               
              </div>
            </div>
          ))

            
        }



      </div>
    </>
  );
}

export default CoursesDashboard;