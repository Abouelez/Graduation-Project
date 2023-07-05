import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBell, faEnvelope, faInstitution, faMapMarker,faccVisa, faCcPaypal, faUser, faCreditCard, faLock, faPhone} from '@fortawesome/free-solid-svg-icons'
import "../css/Userprofile.css"
const Userprofile = () => {
    const [name,setname]= useState("");
    const [email,setemail]= useState("");
    const [phone,setphone]= useState("");
    const [password,setpassword]= useState("");
    const loginrUser =(e)=>{
        e.preventDefault();
        };
    return (
        <div className='header-profile'>
        <form className='form' onClick={loginrUser}>
            <h1 className='h' style={{textAlign:"center"}}>user Profile</h1>
            <div className='Img'>
                <img src='/images/WhatsApp Image 2023-06-21 at 17.32.38.jpg' alt=''/>
                <input type='file' className='II'/>
            </div>
                            <div className='input_group'>
                                <input className='name' type="text" placeholder='Name'  value={name} onChange={(a)=>setname(a.target.value)}/>
                                <FontAwesomeIcon icon={faUser} className='icons' />
                            </div>
                            <div className='input_group'>
                                <input className='name' placeholder='Email'   type="email" required value={email} onChange=
                                {(e)=>setemail(e.target.value)} />
                                <FontAwesomeIcon icon={faEnvelope} className='icons' />
                            </div> 
                            <div className='input_group'>
                                <input className='name'placeholder='password'   type="password"  required  value={password} onChange=
                                {(e)=>setpassword(e.target.value)}/> 
                                <FontAwesomeIcon icon={faLock} className='icons' />
                            </div>
                            <div className='input_group'>
                                <input className='name'placeholder='Phone Number'   type="tel"  required  value={phone} onChange=
                                {(e)=>setphone(e.target.value)}/> 
                                <FontAwesomeIcon icon={faPhone} className='icons' />
                            </div>
                            <div className='input_group'>
                                <input className='button submit ' type="submit" value="Create"></input>
                            </div>  
        </form>
        </div>


    )
}

export default Userprofile
