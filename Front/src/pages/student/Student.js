
import React, {Children, useState } from 'react'
import "../../css/instructorcss/Sidebar.css"
import { NavLink, Outlet } from 'react-router-dom'
import {FaBars, FaUser, FaVideo} from "react-icons/fa"
<i class="fa-sharp fa-solid fa-circle-exclamation"></i>

const Student = ({Children}) => {
    const [open ,setopen]=useState(false);
    const toggle=()=>setopen(!open);
    const menuItem=[
        {
          path:"userprofile",
          name:"Userprofile",
          icon:<FaUser  />
        },
        {
          path:"studentCourcessEnroll",
          name:"StudentCourcessEnrolled",
          icon:<FaVideo  />
        },
      ]
  return (
    <>
    <div className='conf'>
      <div style={{width:open ? "300px" :"50px"}} className='Sidebar '>
        <div className='top-section'>
          <h1 style={{display:open ? "block" :"none"}} className='logo'>Student</h1>
          <div style={{marginLeft:open ? "50px" :"0px"}} className='bars'>
            <FaBars onClick={toggle}/> 
          </div>
        </div>
        { menuItem.map((item,index)=>(
          <NavLink to={item.path} key={index} className="link" activeclassname="active">
            <div className='icon'>{item.icon}</div>
            <div style={{display:open ? "block" :"none"}} className='link_text'>{item.name}</div>
          </NavLink>
        ))}
        
      </div>
      
<main>{Children}</main>

    </div>
    <Outlet/>
    </>
  )
}
export default Student
