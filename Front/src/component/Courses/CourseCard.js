import React from 'react'
import { HiStar } from 'react-icons/hi'
import '../../css/coursecard.css'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { hasAccess } from '../../redux/actions/userActions'
import { useState } from 'react'
const CourseCard = ({ course }) => {
  const [access, setAccess] = useState(false)
  const dispatch = useDispatch();

  const res = useSelector((state) => state.user.hasAccess);
  //console.log(res);
  const handleClick=(e)=>{
    e.preventDefault();
    if (access) {
      window.location.href = `/coursewatch/${course.id}`;
    } else {
      window.location.href = `/coursedetails/${course.id}`;
    }

  }
  useEffect(() => {
    dispatch(hasAccess(course.id));
   if(res==false)
    setAccess(false);
    else{
      setAccess(true);
    }
  }, [dispatch]);
  return (
    <div className="coursecard">
    <button onClick={handleClick}>
      <div className="imag">
        <img src={`http://localhost:8000${course.thumbnail}`} alt={course.title} width={300} height={200} />
      </div>
    </button>
    <div>
      <h2 className="h2">{course.title}</h2>
      <p className="p">{course.instructor.name}</p>
      <h4 className="h4">
        {course.rate}
        <HiStar />
        <span>(272.011)</span>
      </h4>
      <h2 className="h2">E{course.price} </h2>
    </div>
  </div>
  )
}

export default CourseCard;