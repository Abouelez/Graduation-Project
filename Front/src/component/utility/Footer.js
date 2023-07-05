 import React from 'react'
 import {BsLinkedin,BsYoutube,BsInstagram,BsGithub, BsTelegram, BsFacebook, BsTwitter} from "react-icons/bs"
 import "../../css/Footer.css"
 function Footer() {
   return (
    <>
    <footer className='py-4'>
     <div className='container'>
       <div className='row align-items-center'>
         <div className='col-5'>
            <div className='footer-top-data d-flex gap-15 align-items-center'>
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
    <footer className='py-3 footer2'>
    <div className='container'>
      <div className='row'>
      <div className='col-3'> <h2>Courza.</h2></div>
           <div className='col-6 d-flex  align-items-center'>
            <div className='social_icons d-flex flex-wrap gap-15'>
              <a href='1'><BsGithub  className='text-red ' size={20}/></a>
              <a href='3'><BsLinkedin className='text-blue ' size={20}/></a>
              <a href='4'><BsYoutube className='text-red ' size={20}/></a>
              <a href='4'><BsTelegram className='text-blue ' size={20}/></a>
              <a href='4'><BsFacebook className='text-blue ' size={20}/></a>
              <a href='4'><BsTwitter className='text-blue ' size={20}/></a>
              <a href='2'><BsInstagram className='text-orange' size={20}/></a>
            </div>
            </div>
           
            <div className='col-3'>
            <p className='text-center mb-0 text-white '>&copy;{new Date().getFullYear()} ; powerd by developer`s corner</p>
            </div>
           </div>
          
      </div>
    
    </footer>
  
    </>
   )
 }
 
 export default Footer