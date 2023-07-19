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


  const dispatch = useDispatch();
  const { courses, loading } = useSelector(state => state.instructor);
  const handleDel=(e)=>{

    const accessToken = localStorage.getItem('token');
    const url = `http://localhost:8000/api/courses/${e}`;
  
    fetch(url, {
      method: 'DELETE',
      headers: { 
        'Accept': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => { 
        if(response?.statusText!='Forbidden'){
          window.location.href = "/instructorDashboard"
      }
      
    })
    .catch(error => {
      // Handle any errors
      console.error(error);
      setError(error);
    });
  }


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
            courses?.data?.data["created-courses"].slice(0, 5).map(course => (

              <div className='box p-2' key={course.id}>
                <div className='sec'>
                  <img src={`http://localhost:8000${course.thumbnail}`} alt='' />
                  <div className='p-2 text-primary'>
                    <h2>{course.title}</h2>
                    {course.published ? <h2>Public</h2> : <h2>private</h2>}
                  </div>
                </div>
                <div className='ED'>
                  <Link to={`/courseUpdate/${course.id}`} className='btn btn-primary mx-2'><button className='btn'>Edit</button></Link>
                  <div   onClick={(e)=> handleDel(course.id)} className='btn btn-danger'><button className='btn'>Delete</button></div>

                </div>
              </div>
            ))
        }
      </div>
    </>
  );
}

export default CoursesDashboard;