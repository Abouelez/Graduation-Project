import React from 'react';
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
    isPress,
    status
  ] = LoginHook()
  console.log();
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
            {isPress === true ? (loading === true ? (<button onClick={onSubmit} className="btn btn-primary mx-auto mt-4">login</button>
            ) : <button onClick={onSubmit} className="btn btn-primary mx-auto mt-4">  login</button>) :
              <button onClick={onSubmit} className="btn btn-danger mx-auto mt-4">  login</button>
            }   
            
            {
              status === "password or email is incorrect"? (
               
                  
                    <h2>password or email is incorrect</h2>):
                    null
            }
            <span className="register"><p>Dont have an account ?</p> <Link to={"/register"}>Sign up</Link></span>
          </div>
        </div>
        

      </section>
    </>
  )
}

export default Login