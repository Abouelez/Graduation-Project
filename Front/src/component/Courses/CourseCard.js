import React from 'react'
import { HiStar } from 'react-icons/hi'
import { unstable_HistoryRouter, useHistory } from 'react-router-dom';
import '../../css/coursecard.css'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { hasAccess } from '../../redux/actions/userActions'
import { useState } from 'react'
const CourseCard = ({ course }) => {
  const [access, setAccess] = useState(false)
  const dispatch = useDispatch();
 //console.log(res?.data?.purchased);
  
  //
  const handleClick = (e) => {
    const accessToken = localStorage.getItem('token');

const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': `Bearer ${accessToken}`
};

fetch(`http://localhost:8000/api/user/has-purchased/${course.id}`, {
  method: 'GET',
  headers: headers
})
  .then(response => response.json())
  .then(data => {
    console.log(data.purchased);
    setAccess(data.purchased )
    if (data.purchased===true) { 
      
      window.location.href =`/coursewatch/${course.id}`
    }
     else { 
      window.location.href =`/coursedetails/${course.id}`
    }
    // handle the response here
  })
  .catch(error => {
    console.log(error);
    // handle any errors here
  }); 
    
  }; 
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

export default CourseCard;