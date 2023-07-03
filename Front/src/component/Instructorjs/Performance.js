import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBell} from '@fortawesome/free-solid-svg-icons'
const Performance = () => {
  return (
    <>
    <div className='head-titlt'>
      <h4>Student</h4>
      <p>Switch to the student view here - get back to the courses you’re taking.</p>
      <FontAwesomeIcon className='i' icon={faBell} />
      <div className='name'>AG</div>
    </div>
    <div className='A'>
      <h1>Overview</h1>
      <a href='Revenue' >Revenue Report</a>
    </div>
    </>
  )
}

export default Performance
