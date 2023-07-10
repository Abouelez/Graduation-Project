import React from 'react'
import "../../css/instructorcss/Communication.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope ,faBell} from '@fortawesome/free-solid-svg-icons'
import { FaBell, FaEnvelope} from 'react-icons/fa'
import { useSelector } from 'react-redux';
const Communication = () => {

  const { courses } = useSelector(state => state.instructor);
   return (
    <> 

    <div className='A'>
      <span className='h'>my information</span>
    </div>
    <div className='com'>
     {<h2><img src={courses?.data?.data.avatar} style={{ width: '100px', height: '100px' }} /> </h2>}
     
     <div><label>name</label>
        <h2>{courses?.data?.data.name}</h2>
     </div>
     <div><label>email:</label>
     <h2>{courses?.data?.data.email}</h2>     </div>
     <div><label>name</label>
        <h2>{courses?.data?.data.name}</h2>
     </div>

        <p>Direct messages are for you to communicate with your students or 
          other instructors privately. Here’s where you’ll see them.</p>
      </div>
    </>
  )
}

export default Communication
