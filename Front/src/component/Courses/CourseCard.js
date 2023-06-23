import React from 'react'
import { HiStar } from 'react-icons/hi'
import { IoMdStarHalf } from 'react-icons/io'
import '../../css/coursecard.css'
const CourseCard = ({ course }) => {
  //console.log(course);
  return (
    <div className='coursecard'>
      <div className='imag'>
        <img src={course.thumbnail} alt={course.title} width={300} height={200} />
      </div>
      <div>
        <h2 className='h2'>{course.title}</h2>
        <p className='p'>{course.instructor.name}</p>
        <h4 className='h4'>4.7 <HiStar/><span>(272.011)</span></h4>
        <h2 className='h2'>E{course.price}  <span><del>E$1,699.99</del></span></h2>
        <a className='button2' href='h'>Bestseller</a>
      </div> 
    </div>
  )
}

export default CourseCard;