import React from 'react'
import { useState } from 'react';
import "../../css/Userprofile.css"
import { FaEnvelope, FaLock, FaPhone, FaUser } from 'react-icons/fa';
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
            </div>
                            <div className='input_group'>
                                <input className='name' type="text" placeholder='Name'  value={name} onChange={(a)=>setname(a.target.value)}/>
                                <FaUser className='icons' />
                            </div>
                            <div className='input_group'>
                                <input className='name' placeholder='Email'   type="email" required value={email} onChange=
                                {(e)=>setemail(e.target.value)} />
                                <FaEnvelope className='icons' />
                            </div> 
                            <div className='input_group'>
                                <input className='name'placeholder='password'   type="password"  required  value={password} onChange=
                                {(e)=>setpassword(e.target.value)}/> 
                                <FaLock className='icons' />
                            </div>
                            <div className='input_group'>
                                <input className='name'placeholder='Phone Number'   type="tel"  required  value={phone} onChange=
                                {(e)=>setphone(e.target.value)}/> 
                                <FaPhone className='icons' />
                            </div>
                            <div className='input_group'>
                                <input className='button submit ' type="submit" value="Create"></input>
                            </div>  
                            
        </form>
        <input type='file' className='II'></input>
        </div>


    )
}

export default Userprofile
