import React from 'react'
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
    const loginrUser = (e) => {
        e.preventDefault();
    };
    const dispatch = useDispatch();
    
   // const { is_instructor } = user0;
    //console.log(is_instructor);
    // const { id, name0, email0, is_instructor, is_admin } = user0;
    // console.log(id, name0, email0, is_instructor, is_admin);
 

    const { user, loading } = useSelector((state) => state.user);
    // console.log(user?.data?.data)
    useEffect(() => {
        dispatch(getUser());
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
    return (
        <div className='header-profile' >
            <h1 class> </h1>
            <h1 className='h' style={{ textAlign: "center" }} > {user?.data?.data?.name} </h1>

            <div className='Img'>
                <img src='/images/WhatsApp Image 2023-06-21 at 17.32.38.jpg' alt='' />
            </div>
            <div className='profile'>

                <div className='input_group'>
                    <div className='btn btn-primary submit ' type="submit" value="Edit" onClick={handelClick}>be instructor</div>
                </div>
                <div className='input_group'>
                    <label className='name'>Name: {user?.data?.data?.name}</label>
                    <FaUser className='icons' />
                </div>
                <div className='input_group'>
                    <label className='name'>Email: {user?.data?.data?.email}</label>
                    <FaEnvelope className='icons' />
                </div>
                <div className='input_group'>
                    <label className='name'>Student: {user?.data?.data?.is_instructor ? 'Yes' : 'No'}</label>
                    <FaUserGraduate className='icons' />
                </div>

                <input type='file' className='II'></input>
            </div>
        </div>


    )
}

export default Userprofile
