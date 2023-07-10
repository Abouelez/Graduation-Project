import React from 'react'
import { HiStar } from 'react-icons/hi'
import '../../css/coursecard.css'
import { Link } from 'react-router-dom'
const CourseCard = ({ course }) => {
  //console.log(course);
  return (
    <div className='coursecard'>
    <Link to={`/coursedetails/${course.id}`} style={{ textDecoration: 'none' }}>
    <div className='imag'>
    <img src={`http://localhost:8000${course.thumbnail}`} alt={course.title} width={300} height={200} />
  </div>
    </Link>
    <div>
        <h2 className='h2'>{course.title}</h2>
        <p className='p'>{course.instructor.name}</p>
        <h4 className='h4'>{course.rate}<HiStar/><span>(272.011)</span></h4>
        <h2 className='h2'>E{course.price}   </h2> 
      </div> 
    </div>
  )
}

export default CourseCard;