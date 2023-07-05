import React from 'react'
import "../../css/instructorcss/Tools.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo , faThumbtack , faFillDrip ,faBell} from '@fortawesome/free-solid-svg-icons'
const Tools = () => {
  return (
    <>
    <div className='head-titlt'>
      <h4 className='h'>Student</h4>
      <p>Switch to the student view here - get back to the courses you’re taking.</p>
      <FontAwesomeIcon className='i' icon={faBell} />
      <div className='name'>AG</div>
    </div>
    <i class="fa-solid fa-thumbtack"></i>
    <div className='A'>
      <h1  className='h'>Tools</h1>
    </div>
    <div className='head'>
        <div className='Container'>
        <FontAwesomeIcon className='i' icon={faVideo} />
            <h2>Test Video</h2>
            <p>Get free feedback from Udemy video experts on your audio, video, and delivery.</p>
        </div>
        <div className='Container'>
        <FontAwesomeIcon className='i' icon={faThumbtack} />
            <h2>Marketplace Insights</h2>
            <p>Get Udemy-wide market data to create successful courses.</p>
        </div>
        <div className='Container'>
        <FontAwesomeIcon className='i' icon={faFillDrip} />
            <h2>Bulk coupon creation</h2>
            <p>Create multiple coupons at once via CSV upload.</p>
        </div>
    </div>
    </>
  )
}

export default Tools
