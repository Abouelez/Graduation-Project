import React from 'react'
import { useState } from 'react';
import "../css/Userprofile.css"
const Userprofile = () => {
    const [name,setname]= useState("");
    const [email,setemail]= useState("");
    const [password,setpassword]= useState("");
    const[Confirmpassword ,setConfirmpassword]=useState("");
    const loginrUser =(e)=>{
        e.preventDefault();
        };
    return (
        <div className='header-profile'>
            <h1 style={{textAlign:'center' , position:'relative',top:'40px',color:'blue'}}>User Profile</h1>
        <form className='form' onClick={loginrUser}>
            <div className='Img'>
                <img src='/images/WhatsApp Image 2023-06-21 at 17.32.38.jpg' alt=''/>
                <input type='file' className='II'/>
            </div>
                            <div>
                                <input className='I' type="text" placeholder='Name'  value={name} onChange={(a)=>setname(a.target.value)}>
                                </input>
                            </div>
                            <div>
                                <input className='I' placeholder='Email'   type="email" required value={email} onChange=
                                {(e)=>setemail(e.target.value)} />
                            </div> 
                            <div>
                                <input className='I'placeholder='password'   type="password"  required  value={password} onChange=
                                {(e)=>setpassword(e.target.value)}/> 
                            </div>
                            <div>
                                <input className='I' placeholder='Confirm Password' type="password"  required  value={Confirmpassword} onChange=
                                {(e)=>setConfirmpassword(e.target.value)}/> 
                            <div/>
                            <div>
                                <input className='I' placeholder='phone number' type="password"  required  value={Confirmpassword} onChange=
                                {(e)=>setConfirmpassword(e.target.value)}/> 
                            <div/>
                            <div>
                                <input className='button submit' type="submit" value="Create"></input>
                        </div>  
                </div>
                </div>
        </form>
        </div>


    )
}

export default Userprofile
