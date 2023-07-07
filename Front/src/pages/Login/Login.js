import React from 'react';
import { FaGooglePlusG } from "react-icons/fa"
import { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginHook from '../../Hook/Auth/LoginHook';
import { Row, Spinner } from 'react-bootstrap';
function Login() {

  const [
    email,
    password,
    onChangeEmail,
    onChangePassword,
    onSubmit,
    loading,
    isPress
  ] = LoginHook()

  const loginrUser = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="container auth">
        <div className="img">
          <img src="/images/login.png" alt="salah" width={400} />
        </div>
        <div className="card">
          <div className="form">
            <h2>Login</h2>
            <div className="form-group mt-3">
              <label htmlFor="email"><h4>Email</h4> </label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" required value={email}
                onChange={onChangeEmail} />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="password"><h4>Password</h4> </label>
              <input type="password" className="form-control" id="password" placeholder="Enter your password" required value={password}
                onChange={onChangePassword} />
            </div>
            <button onClick={onSubmit} className="btn btn-primary mx-auto mt-4">  SignUp</button>
            <span className="register"><p>Dont have an account ?</p> <Link to={"/register"}>Sign up</Link></span>
          </div>
        </div>
        <Row>
         {isPress===true ?  (loading === true ? (<Spinner  animation="border" role="status">

        </Spinner>) : null) : null}
        </Row>
      </section>
    </>
  )
}

export default Login