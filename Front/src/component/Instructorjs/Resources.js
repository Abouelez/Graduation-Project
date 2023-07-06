import React from 'react'
import "../../css/instructorcss/Resources.css"
import { FaBell, FaChalkboard, FaComment, FaConciergeBell } from 'react-icons/fa'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faChalkboardUser,faComment,faBellConcierge ,faBell} from '@fortawesome/free-solid-svg-icons'
const Resources = () => {
  return (
    <>
    <div className='head-titlt'>
      <h4>Student</h4>
      <p>Switch to the student view here - get back to the courses you’re taking.</p>
      <FaBell className='i' />
      <div className='name'>AG</div>
    </div>
 <div className='A'>
      <span  className='h'>Resources</span>
    </div>
    <div className='head'>
        <div className='Container'>
        <FaChalkboard className='i' />
            <h2>Teaching Center</h2>
            <p>Find articles on Udemy teaching — from course creation to marketing..</p>
        </div>
        <div className='Container'>
        <FaComment className='i' />
            <h2>Instructor Community</h2>
            <p>Share your progress and ask other instructors questions in our community..</p>
        </div>
        <div className='Container'>
        <FaConciergeBell className='i' />
            <h2>Help and Support</h2>
            <p>Can’t find what you need? Our support team is happy to help..</p>
        </div>
    </div>
    </>
  )
}

export default Resources
