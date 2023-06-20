import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "../../css/Auth.css"
const Reset = () => {
 const [email,setemail]= useState("");
  const UserrestPassword = (e)=>{
    e.preventDefault();
  }
  return (
   <>
   <section className="container auth">
   <div className="img">     <img src="images/reset.jpeg" alt="salah"  width={400} />
   </div>
   <div className="card">
   <div className="form">
    <h2>Reset Password</h2>
     <form onSubmit={UserrestPassword}>
     <input type="email" placeholder='Email' required   value={email} onChange={(e)=>setemail(e.target.value)}/>
     <button className="--btn --btn-primary --btn-block">Reset Password</button>
     <div className="links">
         <p><Link to={"/login"}>- Login</Link></p>
         <p><Link to={"/register"}>- Sign up</Link></p>
         </div>
     </form>
    
   </div>
   </div>
</section>
   </>
  )
}

export default Reset