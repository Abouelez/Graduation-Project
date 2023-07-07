import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createNewUser } from '../../redux/actions/authAction';
import { useEffect } from 'react';

const RegisterHook = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(true)

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

  const onSubmit = async () => {
    console.log('submit');
    setLoading(true);
    await dispatch(createNewUser({
        name,
        email,
        password,
        password_confirmation: confirmPassword,
        
    })) 
    setLoading(false);
}
const res = useSelector(state => state.authReducer.createUser)

  useEffect(() => {
    setLoading(false);
    console.log(res);
  },[setLoading])

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
    onSubmit
  ];
};

export default RegisterHook;