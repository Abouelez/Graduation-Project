import React from 'react'
import "../../css/Videos.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBell} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
const Videos = () => {
    const route = useNavigate();

  return (
    <>
      <div className='head-titlt'>
      <h4>Student</h4>
      <p>Switch to the student view here - get back to the courses you’re taking.</p>
      <FontAwesomeIcon className='i' icon={faBell} />
      <div className='name'>AG</div>
    </div>
    <div className='A'>
      <h1>Cources</h1>
    </div>
    <div className='H'>
      <span>Jump Into Course Creation</span>
      <a href='' onClick={()=>{route('/CreateCourse')}}>Create Your Course</a>
    </div>
    <div className='title'><h2>Based on your experience, we think these resources will be helpful.</h2></div>
    <h2 className='title'>Based on your experience, we think these resources will be helpful.</h2>
    <div className='H-2'>
      <div className='right-section'>
        <h2>Create an Engaging Course</h2>
        <p>Whether you've been teaching for years or are teaching for the first time, you can make an engaging
          course. We've compiled resources and best practices to help you get to the next
            level, no matter where you're starting.</p>
            <button>Get Started</button>
      </div>
      <div className='left-section'>
        <img src='/images/engaging-course.jpg' alt=""/>
      </div>
    </div>
    <div className='H-3'>
      <div className='right-section'>
        <h2>Join the New Instructor Challenge!</h2>
        <p>Get exclusive tips and resources designed to help you launch your first course 
          faster! Eligible instructors who publish their first course on time will receive a special
           bonus to celebrate. Start today!
            level, no matter where you're starting.</p>
            <button>Get Started</button>
      </div>
      <div className='left-section'>
        <img src='/images/newcomer-challenge.jpg' alt=""/>
      </div>
    </div>  
    <h2 className='ti'>Have questions? Here are our most popular instructor resources.</h2>
    <div className='head top'>
        <div className='Container'>
        {/* <FontAwesomeIcon className='i' icon={faVideo} /> */}
            <h2>Test Video</h2>
            <p>Get free feedback from Udemy video experts on your audio, video, and delivery.</p>
        </div>
        <div className='Container'>
        {/* <FontAwesomeIcon className='i' icon={faThumbtack} /> */}
            <h2>Marketplace Insights</h2>
            <p>Get Udemy-wide market data to create successful courses.</p>
        </div>
        <div className='Container'>
        {/* <FontAwesomeIcon className='i' icon={faFillDrip} /> */}
            <h2>Bulk coupon creation</h2>
            <p>Create multiple coupons at once via CSV upload.</p>
        </div>
        <div className='Container'>
        {/* <FontAwesomeIcon className='i'  icon={faChalkboardUser} /> */}
            <h2>Teaching Center</h2>
            <p>Find articles on Udemy teaching — from course creation to marketing..</p>
        </div>
        <div className='Container'>
        {/* <FontAwesomeIcon className='i' icon={faBellConcierge} /> */}
            <h2>Help and Support</h2>
            <p>Can’t find what you need? Our support team is happy to help..</p>
        </div>
    </div>
    </>
  )
}

export default Videos
