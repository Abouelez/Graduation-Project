import React from 'react'
import "../../css/instructorcss/Communication.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope ,faBell} from '@fortawesome/free-solid-svg-icons'
import { FaBell, FaEnvelope} from 'react-icons/fa'
const Communication = () => {
  return (
    <>
    <div className='head-titlt'>
      <h4>Student</h4>
      <p>Switch to the student view here - get back to the courses you’re taking.</p>
      {/* <FontAwesomeIcon className='i' icon={faBell} /> */}
      <FaBell className="i"/>
      <div className='name'>AG</div>
    </div>
    <div className='A'>
      <span className='h'>Message</span>
    </div>
    <div className='com'>
    {/* <FontAwesomeIcon className='i' icon={faEnvelope} /> */}
    <FaEnvelope className="i"/>
        <h2>No new messages</h2>
        <p>Direct messages are for you to communicate with your students or 
          other instructors privately. Here’s where you’ll see them.</p>
      </div>
    </>
  )
}

export default Communication
