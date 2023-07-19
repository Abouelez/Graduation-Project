import React, { useState } from 'react'
import "../css/UserRequest.css"
import { FaTrash } from 'react-icons/fa'
const UserRequest = () => {

    const accessToken = localStorage.getItem('token');

    const [course, setCourse] = useState([])

    const url = 'http://localhost:8000/api/admin-dashboard';
    // const accessToken = localStorage.getItem('token');
    const [coursesToReview, setCoursesToReview] = useState([]);
    const [user, setUser] = useState([]);

    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        }
    })
        .then(response => response.json())
        .then(data => {
           // console.log(data?.courses_to_review[0]);
            setCoursesToReview(data?.courses_to_review || []);
            setUser(data?.user || []);
            // console.log(coursesToReview);
        })
        .catch(error => {
          //  console.error(error);
        });
    const handleView = (e) => {
        window.location.href = `/coursewatch/${e}`

    }
    const  acceptCourse=(courseId)=> {
        const url = `http://localhost:8000/api/accept-course/${courseId}`;

        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
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
                // Handle any errors
                console.error(error);
            });
    }

    const rejectCourse =(courseId) =>{
        const url = `http://localhost:8000/api/reject-course/${courseId}`;

        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
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
                // Handle any errors
                console.error(error);
            });
    }

    return (
        <>
            <div className='cartShopping'>
                <div className='container-fluid '>
                    <h2 className=' text-center' style={{ marginBottom: "50px" }}> New User Request</h2>
                    <div className='col-10   '>
                        <div className='' table-responsive>
                            <table id="myTable" className='table'>
                                <thead>
                                    <tr>
                                        <th>id</th>
                                        <th>title</th>
                                        <th>description</th>
                                        <th>price</th>
                                        <th>view</th>
                                        <th colSpan="2">Reject</th>
                                        <th colSpan="2">Allow</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {coursesToReview.map((course, index) => (
                                        <tr key={course.id}>
                                            <td>{course.id}</td>
                                            <td>{course.title}</td>
                                            <td>{course.instructor?.name}</td>
                                            <td>{course.price} $</td>
                                            <td colSpan="2"><button onClick={(e) => handleView(course.id)} className='btn btn-success'>view</button></td>
                                            <td colSpan="2">
                                                <button className='btn btn-danger' onClick={(e) => rejectCourse(course.id)}>Reject</button>
                                            </td>
                                            <td colSpan="2">
                                                <button className='btn btn-success' onClick={(e) => acceptCourse(course.id)}>Allow</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>



                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default UserRequest