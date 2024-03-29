import React from 'react'
import { useState } from 'react';
import RegesterHook from '../../Hook/Auth/RegesterHook';
import { Spinner } from 'react-bootstrap';
const Register = () => {
  const [
    name,
    email,
    password,
    confirmPassword,
    onChangeName,
    onChangeEmail,
    onChangePassword,
    onChangeConfirmPassword,
    validateInputs,
    onSubmit,
    loading0,
    res,
    isPress,
    message
  ] = RegesterHook()
  const errors = validateInputs() 
  return (
    <>
      <section className="container auth">
        <div className="row justify-content-center">
          <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title text-center mb-4">Sign up</h2>

                <div className="form-group mt-3">
                  <label htmlFor="name"><h4>Name</h4> </label>
                  <input type="text" className="form-control" id="name" placeholder="Enter your name" required value={name}
                    onChange={onChangeName} />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="email"><h4>Email</h4> </label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email" required value={email}
                    onChange={onChangeEmail} />
                </div>
                {email &&
                  errors.email && <p className="text-danger">{errors.email}</p>}
                <div className="form-group mt-3">
                  <label htmlFor="password"><h4>Password</h4> </label>
                  <input type="password" className="form-control" id="password" placeholder="Enter your password" required value={password}
                    onChange={onChangePassword} />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="confirmPassword"><h4>Confirm Password</h4> </label>
                  <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm your password" required
                    value={confirmPassword} onChange={onChangeConfirmPassword} />
                  {password !== confirmPassword && <small className="form-text text-danger">Passwords do not match</small>}
                </div>
                {password && errors.password && <p className="text-danger">{errors.password}</p>}
                <button onClick={onSubmit} className="btn btn-primary mx-auto mt-4">  SignUp</button>
                <h5 className='text-danger'>{message !=""?message:null}</h5>
                <div>   {isPress === true ? (loading0 === true ? (<Spinner />
                ) : null) :
                  null
                }  </div>

                <div className="text-center mt-3">
                  <p className="text-muted"><a className='btn primary'> Already have an account?</a></p>

                  <a href="/login">Login</a>

                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img src="images/register.png" alt="salah" className="img-fluid" />
          </div>
        </div>
      </section>


    </>
  )
}

export default Register