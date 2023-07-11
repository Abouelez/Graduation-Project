import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createNewUser } from '../../redux/actions/authAction';
import { useEffect } from 'react';

const RegisterHook = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading0, setLoading] = useState(true)
  const [isPress, setIsPress] = useState(false)
  const [message, setMessage] = useState("")
  const dispatch=useDispatch()
  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const validateInputs = () => {
    let errors = {};

    if (!name) {
      errors.name = "Name is required";
    }

    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }

    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    if (!confirmPassword) {
      errors.confirmPassword = "Confirm password is required";
    } else if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };

 // const {createUser,loading}= useSelector(state => state.authReducer  )
 const res = useSelector(state => state.authReducer.createUser)
   const onSubmit = async () => {
     setLoading(true);
    setIsPress(true)
    await dispatch(createNewUser({
        name,
        email,
        password,
        password_confirmation: confirmPassword,
        
    })) 
    setLoading(false)
    setIsPress(false)
    
    
}

useEffect(() => {
  if (loading0 === false) { 
    if (res?.data) {
          if (res &&res.data && res.data.access_token ) { 
              localStorage.setItem("token", res.data.access_token)
              localStorage.setItem("user", JSON.stringify(res.data.user))
             

               setTimeout(() => {
                   window.location.href = "/"
               }, 1500);
            
          } else { 
            setMessage(res.data.message )
              localStorage.removeItem("token")
              localStorage.removeItem("user")
          }

          if (res&& res.data && res.data.message === "The provided credentials are incorrect." ) {
              localStorage.removeItem("token")
              localStorage.removeItem("user")
 
          }
          setLoading(true)
      }
  }
}, [loading0])

  return [
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
  ];
};

export default RegisterHook;