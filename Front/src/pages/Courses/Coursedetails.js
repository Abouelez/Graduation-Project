import React from 'react'
import "../../css/Coursedetails.css"
import { TbCalendarStats } from "react-icons/tb"
const Coursedetails = () => {
    return (
        <>
            {/* <div className='photo'>
                <h1 className='h1'>Course Details</h1>
                <img src="/images/pt.jpg" alt="" />
            </div> */}
            <div className='section_details'>
                <div className='image'>
                    <img src="/images/imm.jpg" alt="" />
                    <h3>
                        Master Web Design in Adobe XD: Complete UI/UX
                        Masterclass
                    </h3>
                    <h2>About This Course</h2>
                    <p>
                        Synergistically foster 24/7 leadership rather than scalable
                        platforms. Conveniently visualize installed base products
                        before interactive results. Collaboratively restore
                        corporate experiences and
                        open-source applications. Proactively mesh cooperative
                        growth strategies for covalent opportunities. Competently
                        create efficient markets through best-of-breed
                        potentialities.
                    </p>
                    <p>
                        Proactively initiate corporate vortals via bricks-and-clicks
                        relationships. Dynamically envisioneer cutting-edge
                        paradigms via client-centered relationships. Globally
                        repurpose backward-compatible growth strategies and fully
                        tested e-services. Energistically promote stand-alone
                        models whereas effective solutions. Quickly target low-risk
                        high-yield e-markets via web-enabled networks.
                    </p>
                    <h4>Instractor</h4>
                    <div className='Instractor'>
                        <div className='picture'>
                            <img src='/images/44.jfif' alt='' />
                        </div>
                        <div className='Information_about_instracotr'>
                            <p>Ahmed Abo Zeid</p>
                            <h5>Award Winning Chemical & User Interface Design
                                Training
                            </h5>
                            <h6>Synergistically foster 24/7 leadership rather than
                                scalable platforms. Conveniently visualize installed
                                base products before
                                interactive results. Collaboratively restore
                                corporate experiences and open-source applications.
                                Proactively mesh cooperative growth strategies.
                            </h6>
                        </div>
                    </div>
                </div>
                <div className='Course'>
                    <img src="/images/book.jpg" alt="" />
                    <h2>$15.17</h2>
                    <a href='#' className='button'>Add To Cart</a>
                    <a href='#' className='button'>Enroll Now</a>
                    <ul>
                        <li>
                            <TbCalendarStats className='icon' />
                            <label>lesson</label>
                        </li>
                        <li>
                            <TbCalendarStats className='icon' />
                            <label>Quizess</label>
                        </li>
                        <li>
                            <TbCalendarStats className='icon' />
                            <label>Students</label>
                        </li>
                        <li>
                            <TbCalendarStats className='icon' />
                            <label> Duration</label>
                        </li>
                        <li>
                            <TbCalendarStats className='icon' />
                            <label>Skill Level</label>
                        </li>
                        <li>
                            <TbCalendarStats className='icon' />
                            <label>Language</label>
                        </li>
                        <li>
                            <TbCalendarStats className='icon' />
                            <label>Certificate</label>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Coursedetails
