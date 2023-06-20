 import React from 'react'
 import {BsLinkedin,BsYoutube,BsInstagram,BsGithub} from "react-icons/bs"
 import "../../css/Footer.css"
 function Footer() {
   return (
    <>
    <footer className='py-4'>
     <div className='container'>
       <div className='row align-items-center'>
         <div className='col-5'>
            <div className='footer-top-data d-flex gap-30 align-items-center'>
               <img src='images/newsletter.png' alt='newsletter'/>
               <h5 className='mb-0 text-white'>Sign Up for news letter</h5>
            </div>
         </div>
         <div className='col-7'>
         <div className='input-group '>  
         <input 
          type="text"
          className='form-control py-1'
          placeholder='Your Email Adress...'
          aria-label='Your Email Adress...' 
          aria-describedby='basic-addon2'/>
          <span className='input-group-text p-1 '>Subscripe</span>
       </div>
         </div>
       </div>
     </div>
    </footer>
    <footer className='py-3'>
    <div className='container'>
      <div className='row'>
           <div className='col-4 d-flex flex-column align-items-center'>
            <h4 className='text-white mb-4'>Business</h4>
            <div className='footer-links d-flex flex-column align-items-center '>
            <a className='text-white py-2 mb-1'>About Us</a>
            <a  className='text-white py-2 mb-1'>Contact Us</a> 
            <div className='social_icons d-flex gap-15'>
              <a href='1'><BsGithub  className='text-white'/></a>
              <a href='2'><BsInstagram className='text-white'/></a>
              <a href='3'><BsLinkedin className='text-white'/></a>
              <a href='4'><BsYoutube className='text-white'/></a>
            </div>
            </div>
            <div></div>
           </div>
           <div className='col-3'>
             <h4 className='text-white mb-4'>information</h4>
             <div></div>
           </div>
      </div>
     </div>
    </footer>
    <footer className='lfooter py-4'>
     <div className='container'>
      <div className='row'>
       <div className='col-12 d-flex align-items-center justify-content-between'>
       <h2>Courza</h2>
       <p className='text-center mb-0 text-white '>&copy;{new Date().getFullYear()} ; powerd by developer`s corner</p>
       </div>
      </div>
     </div>
    </footer>
    </>
   )
 }
 
 export default Footer