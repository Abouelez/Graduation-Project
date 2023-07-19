import React from 'react'
import { BsLinkedin, BsYoutube, BsInstagram, BsGithub, BsTelegram, BsFacebook, BsTwitter } from "react-icons/bs"
import "../../css/Footer.css"
import { FaMousePointer } from 'react-icons/fa'
function Footer() {
  return (
    <>
      <footer className='py-4'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-5'>
              <div className='footer-top-data d-flex gap-15 align-items-center'>
                <FaMousePointer className='mouse'/>
                <h5 className='mb-0 text-white'>Sign Up for news letter</h5>
              </div>
            </div>
            
          </div>
        </div>
      </footer>
      <footer className='py-3 footer2'>
        <div className='container'>
          <div className='row'>
            <div className='col-3'> <h2>courses platform</h2></div>
            <div className='col-6 d-flex  align-items-center'>
              <div className='social_icons d-flex flex-wrap gap-15'>
                <a href='1'><BsGithub className='text-red ' size={20} /></a>
                <a href='3'><BsLinkedin className='text-blue ' size={20} /></a>
                <a href='4'><BsYoutube className='text-red ' size={20} /></a>
                <a href='4'><BsTelegram className='text-blue ' size={20} /></a>
                <a href='4'><BsFacebook className='text-blue ' size={20} /></a>
                <a href='4'><BsTwitter className='text-blue ' size={20} /></a>
                <a href='2'><BsInstagram className='text-orange' size={20} /></a>
              </div>
            </div>

            <div className='col-3'>
              <p className='text-center mb-0 text-white '>&copy;{new Date().getFullYear()} ; onlin courses platform</p>
            </div>
          </div>

        </div>

      </footer>

    </>
  )
}

export default Footer