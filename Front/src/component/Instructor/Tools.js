import React from 'react'
import "../../css/instructorcss/Tools.css"
import { FaBell, FaFillDrip, FaThumbtack, FaVideo } from 'react-icons/fa'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faVideo , faThumbtack , faFillDrip ,faBell} from '@fortawesome/free-solid-svg-icons'
const Tools = () => {
  return (
    <>
     
    <i class="fa-solid fa-thumbtack"></i>
    <div className='A'>
      <span  className='h'>Tools</span>
    </div>
    <div className='head'>
        <div className='Container'>
        <FaVideo className='i' />
            <h2>Test Video</h2>
            <p>Get free feedback from Udemy video experts on your audio, video, and delivery.</p>
        </div>
        <div className='Container'>
        <FaThumbtack className='i' />
            <h2>Marketplace Insights</h2>
            <p>Get Udemy-wide market data to create successful courses.</p>
        </div>
        <div className='Container'>
        <FaFillDrip className='i' />
            <h2>Bulk coupon creation</h2>
            <p>Create multiple coupons at once via CSV upload.</p>
        </div>
    </div>
    </>
  )
}

export default Tools
