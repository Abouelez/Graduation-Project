
import React from 'react'
import "../css/UserRequest.css"
import { FaTrash } from 'react-icons/fa'
const UserRequest = () => {

    return (
    <>
        <div className='cartShopping'>
            <div className='container-fluid '>
                <h2 className=' text-center' style={{marginBottom:"50px"}}> New User Request</h2>
                <div className='col-md-4'>
                    <div className=''table-responsive>
                        <table id="myTable" className='table'>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Firstname</th>
                                    <th>Lastname</th>
                                    <th>Email</th>
                                    <th>Reject</th>
                                    <th>Allow</th>
                                </tr>
                            </thead>
                            
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Ahmed</td>
                                    <td>ghaniem</td>
                                    <td>ghaniemahmed7@gmail.com</td>
                                    <td><button className='btn btn-danger'>Reject</button></td>
                                    <td colSpan="2"><button className='btn btn-success'>Allow</button></td>
                                </tr>
                            </tbody>

                            <tbody>
                                <tr>
                                    <td>2</td>
                                    <td>Ali</td>
                                    <td>Hossam</td>
                                    <td>hosam11@gmail.com</td>
                                    <td><button className='btn btn-danger'>Reject</button></td>
                                    <td colSpan="2"><button className='btn btn-success'>Allow</button></td>
                                </tr>
                            </tbody>

                            <tbody>
                                <tr>
                                    <td>3</td>
                                    <td>Ali</td>
                                    <td>Hossam</td>
                                    <td>hosam11@gmail.com</td>
                                    <td><button className='btn btn-danger'>Reject</button></td>
                                    <td colSpan="2"><button className='btn btn-success'>Allow</button></td>
                                </tr>
                            </tbody>

                            <tbody>
                                <tr>
                                    <td>4</td>
                                    <td>Ali</td>
                                    <td>Hossam</td>
                                    <td>hosam11@gmail.com</td>
                                    <td><button className='btn btn-danger'>Reject</button></td>
                                    <td colSpan="2"><button className='btn btn-success'>Allow</button></td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div> 
    </>

    )
}

export default UserRequest
