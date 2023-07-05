import React from 'react'
import "../../css/instructorcss/Communication.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faEnvelope } from '@fortawesome/free-solid-svg-icons';
const Communication = () => {
  return (
    <>
    <div className='head-titlt'>
      <h4>Student</h4>
      <p>Switch to the student view here - get back to the courses you’re taking.</p>
      <FontAwesomeIcon className='i' icon={faBell} />
      <div className='name'>AG</div>
    </div>
    <div className='A'>
      <h1 className='h'>Message</h1>
    </div>
    <div className='com'>
    <FontAwesomeIcon className='i' icon={faEnvelope} />
        <h2>No new messages</h2>
        <p>Direct messages are for you to communicate with your students or 
          other instructors privately. Here’s where you’ll see them.</p>
      </div>
    </>
  )
}

export default Communication
