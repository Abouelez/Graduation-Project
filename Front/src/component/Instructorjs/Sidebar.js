import React, {Children, useState } from 'react'
import "../../css/instructorcss/Sidebar.css"
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faVideo,faMessage,faChartSimple,faWrench,faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import {FaBars} from "react-icons/fa"
<i class="fa-sharp fa-solid fa-circle-exclamation"></i>
const Sidebar = ({Children}) => {
  const [open ,setopen]=useState(false);
const toggle=()=>setopen(!open);
  const menuItem=[
    {
      path:"/Videos",
      name:"Videos",
      icon:<FontAwesomeIcon icon={faVideo} />
    },
    {
      path:"/Communication",
      name:"Communication",
      icon:<FontAwesomeIcon icon={faMessage} />
    },
    {
      path:"/Tools",
      name:"Tools",
      icon:<FontAwesomeIcon icon={faWrench} />
    },
    
    {
      path:"/resources",
      name:"Resources",
      icon:<FontAwesomeIcon icon={faCircleExclamation} />
    },
  ]
  return (
    <div className='conf'>
      <div style={{width:open ? "300px" :"50px"}} className='Sidebar'>
        <div className='top-section'>
          <h1 style={{display:open ? "block" :"none"}} className='logo'>Courza</h1>
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
  )
}

export default Sidebar
