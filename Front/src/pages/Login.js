import React from 'react';
import  "../css/Auth.css";
import {FaGooglePlusG} from "react-icons/fa"
import { useState } from 'react';
import { Link } from 'react-router-dom';
function Login() {
 const [email,setemail]= useState("");
 const [password,setpassword]= useState("");

 const loginrUser =(e)=>{
   e.preventDefault();
 };
 return (
   <>
   <section className="container auth">
      <div className="img">
        <img src="/images/login.png" alt="salah"  width={400} />
      </div>
      <div className="card">
      <div className="form">
       <h2>Login</h2>
        <form onSubmit={loginrUser}>
        <input type="email" placeholder='Email' required value={email} onChange={(e)=>setemail(e.target.value)} />
        <input type="password" placeholder='Password'  required  value={password} onChange={(e)=>setpassword(e.target.value)}/>
        <button className="--btn --btn-primary --btn-block">Login</button>
        <div className="links">
        <Link to={"/reset"}>reset password</Link>
        </div>
        <p className='p'>-- or --</p>
        <button type='submit' className="--btn --btn-danger --btn-block" onClick={loginrUser}><FaGooglePlusG color="#fff"/> Login with Googel</button>
        </form>
        <span className="register"><p>Dont have an account ?</p> <Link to={"/register"}>Sign up</Link></span>
      </div>
      </div>
   </section>
   </>
   )
}

export default Login