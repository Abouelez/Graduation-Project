import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/actions/authAction';

const LoginHook = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false)
    const [status, setStatus] =useState("")
    const [isPress, setIsPress] = useState(false)
  
    const dispatch=useDispatch()
    
  
    const onChangeEmail = (e) => {
      setEmail(e.target.value);
    };
  
    const onChangePassword = (e) => {
      setPassword(e.target.value);
    };
    const onSubmit = async () => {
        setIsPress(true)
        setLoading(true)
      await dispatch(loginUser(
       { email,
        password}
      ))
      setIsPress(false)
      setLoading(false)
  }
  
  const res = useSelector(state => state.authReducer.loginUser)

  useEffect(() => {
    if (loading === false) {
      if (res.data) {
          //console.log(res.data.user)
            if (res &&res.data && res.data.access_token ) {
                localStorage.setItem("token", res.data.access_token)
                localStorage.setItem("user", JSON.stringify(res.data.user))
             //   console.log("تم تسجيل الدخول بنجاح", "success")
                setTimeout(() => {
                    window.location.href = "/"
                }, 1500);
            } else {
                localStorage.removeItem("token")
                localStorage.removeItem("user")
            }

            if (res&& res.data && res.data.message === "The provided credentials are incorrect." ) {
                localStorage.removeItem("token")
                localStorage.removeItem("user")
                setStatus("password or email is incorrect")
             //  console.log("password or email is incorrect ")
            }
            setLoading(true)
        }
    }
}, [loading])
  
    return [
      email,
      password,
      onChangeEmail,
      onChangePassword,
      onSubmit,
      loading,
      isPress,status
    ];
}

export default LoginHook
