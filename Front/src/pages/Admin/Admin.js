    import React, {Children, useState } from 'react'
    import "../../css/Admin.css"
    import { NavLink, Outlet } from 'react-router-dom'
    import {FaBars, FaCreativeCommons, FaUser} from "react-icons/fa"

    const Admin = ({Children}) => {
        const [open ,setopen]=useState(false);
        const toggle=()=>setopen(!open);
        const menuItem=[
            {
            path:"userrequest",
            name:"UserRequest",
            icon:<FaUser  />
            },
            {
                path:"createcategory",
                name:"Createnewcategory",
                icon:<FaCreativeCommons  />
                },
        ]
    return (
        <>
        <div className='conf'>
        <div style={{width:open ? "300px" :"50px"}} className='Admin '>
            <div className='top-section'>
            <h1 style={{display:open ? "block" :"none"}} className='logo'>Admin</h1>
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
    export default Admin
