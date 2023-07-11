
import React, {Children, useState } from 'react'
import "../../css/instructorcss/Sidebar.css"
import { NavLink, Outlet, useParams } from 'react-router-dom'
import {FaBars, FaUser, FaVideo} from "react-icons/fa"
import { useDispatch, useSelector } from 'react-redux'
import { getUser, hasAccess } from '../../redux/actions/userActions'
import { useEffect } from 'react'
<i class="fa-sharp fa-solid fa-circle-exclamation"></i>

const Student = ({Children}) => {
  const [data, setData] = useState();
  const accessToken = localStorage.getItem('token');
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
      const dispatch = useDispatch();
    const id=useParams()
    const {user,loading} = useSelector((state) => state.user); 
    
    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);
 

      return (
    <>
    <div className='conf'>
      <div style={{width:open ? "300px" :"50px"}} className='Sidebar '>
        <div className='top-section'>
          <h1 style={{display:open ? "block" :"none"}} className='logo'><p className='text-danger'>{user?.data?.data?.name}</p></h1>
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
