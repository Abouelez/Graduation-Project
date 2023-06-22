import React from 'react'
import { HiStar } from 'react-icons/hi'
import { IoMdStarHalf } from 'react-icons/io'
import '../../css/coursecard.css'

const CourseCard = ({ title, instructor, price, thumbnail }) => {
  //console.log(title);
  return (
    <div className='coursecard'>
       <div className='imag'>
        <img src={ thumbnail} alt={ title} width={300} height={200} />
      </div>
      <div>
        <h2 className='h2'>{ title}</h2>
        <p className='p'>{ instructor}</p>
        <h4 className='h4'>4.7 <HiStar/></h4>
        <h2 className='h2'>E${ price}  </h2>
        <a className='button2' href='h'>Bestseller</a>
      </div> 
    </div>
  )
}

export default CourseCard
