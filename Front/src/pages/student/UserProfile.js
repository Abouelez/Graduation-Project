import React from 'react'
import axios from 'axios';

import { useState } from 'react';
import "../../css/Userprofile.css"
import { FaEnvelope, FaLock, FaPhone, FaUser, FaUserGraduate } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUser } from '../../redux/actions/userActions';
const Userprofile = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const [password, setpassword] = useState("");
    const [img, setImg] = useState("");
    const [bio, setBio] = useState("");
    const loginrUser = (e) => {
        e.preventDefault();
    };
    const dispatch = useDispatch();
    const { user, loading } = useSelector((state) => state.user);
    // console.log(user?.data?.data)
    useEffect(() => {
        dispatch(getUser());
        setImg(user?.data?.data?.avatar)
    }, [dispatch]);

     
    const handelClick = (e) => {
        const accessToken = localStorage.getItem('token');

        fetch('http://localhost:8000/api/active-instructor-role', {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }
        })
            .then(response => response.json())
            .then(data => {
                // Handle the response data
                console.log(data);
            })
            .catch(error => {
                console.log('Error:', error);
            });
        const user = JSON.parse(localStorage.getItem("user"));

        // modify the is_instructor property
        user.is_instructor = 1;

        // store the modified object back into local storage
        localStorage.setItem("user", JSON.stringify(user));
        console.log(localStorage.getItem("user"));
        setTimeout(() => {
            window.location.href = "/"
        }, 1000);
    }
    const handelChanges =  (e) => {
        e.preventDefault();
        const accessToken = localStorage.getItem('token');
         console.log(img);
        const data = {
          name: name,
          email:user.data.data.email,
          bio: bio,
          avatar: img
        };
 
        const headers = {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        };
        
        fetch('http://localhost:8000/api/user/update-profile', {
          method: 'PUT',
          headers: headers,
          body: JSON.stringify(data)
        })
          .then(response => response.json())
          .then(data => {
            console.log(data);
            // handle the response here
          })
          .catch(error => {
            console.log(error);
            // handle any errors here
          });
           setTimeout(() => {
             window.location.href = "/student/userprofile"
        }, 1000);
      };
    return (
        <div className='header-profile' >
            <h1 class> </h1>
            <h1 className='h' style={{ textAlign: "center" }} > {user?.data?.data?.name} </h1>

            <div className='Img bg-green'>
                <img className='' src={`http://localhost:8000${user?.data?.data?.bio} `} alt='' />
            </div>
            <div>
                <input type='file' className='II' mu onChange={(e) => setImg(e.target.files[0])}></input>
            </div>
            <div className='profile'>

                <div className=''>
                    <div  className='btn btn-dark submit ' type="submit" value="Edit" onClick={handelClick} style={{marginLeft:"100px"}}>be instructor</div>
                </div>
                <div className='input_group'>
                    <label className='name'>bio: {user?.data?.data?.bio}</label>
                    <input onChange={(e) => setBio(e.target.value)} placeholder='edit bio '></input>
                    <FaUserGraduate className='icons' />
                </div>
                <div className='input_group'>
                    <label className='name'>Name: {user?.data?.data?.name}</label>
                    <input onChange={(e) => setname(e.target.value)} placeholder='change name'></input>
                    <FaUser className='icons' />
                </div>
                <div className='input_group'>
                    <label className='name'>Email: {user?.data?.data?.email}</label>
                    <FaEnvelope className='icons' />
                </div>

                <div className='input_group'>
                    <div className='Sub btn btn-success submit ' type="submit" value="Edit" onClick={handelChanges}>submit changes</div>
                </div>
            </div>
        </div>


    )
}

export default Userprofile