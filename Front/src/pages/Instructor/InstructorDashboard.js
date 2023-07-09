import React, { Children, useEffect, useState } from 'react'
import "../../css/instructorcss/Sidebar.css"
import { NavLink, Outlet } from 'react-router-dom'
import { FaBars, FaViadeo, FaWrench, FaAirFreshener, FaAlipay } from "react-icons/fa"
import { getInstructorCourses } from '../../redux/actions/instructorAction'
import { useDispatch, useSelector } from 'react-redux'
<i class="fa-sharp fa-solid fa-circle-exclamation"></i>
const InstructorDashboard = ({ Children }) => {
  const [open, setopen] = useState(false);
  const toggle = () => setopen(!open);
  const menuItem = [
    {
      path: "coursesDashboard",
      name: "courses",
      icon: <FaViadeo />
    },
    {
      path: "communication",
      name: "Communication",
      icon: <FaAlipay />
    },
    {
      path: "tools",
      name: "Tools",
      icon: <FaWrench />
    },
    {
      path: "resources",
      name: "Resources",
      icon: <FaAirFreshener />
    },
  ]
  
  const dispatch = useDispatch();
  const { courses, loading }   = useSelector(state => state.instructor);
 // console.log(courses);
  
  // move the destructuring assignment outside of the if statement
  const { id, name, email, avatar, is_instructor, is_admin, "created-courses": createdCourses } = courses?.data?.data || {};
  
  useEffect(() => {
    dispatch(getInstructorCourses());
  }, []); 
  
  return (
    <>
      <div className='conf'>
        <div style={{ width: open ? "300px" : "50px" }} className='Sidebar'>
          <div className='top-section'>
            {/* check if avatar exists before rendering */}
            {avatar && (
              <h1 style={{ display: open ? "block" : "none" }} className='logo'>
                {name}
              </h1>
            )}
            <div style={{ marginLeft: open ? "50px" : "0px" }} className='bars'>
              <FaBars onClick={toggle} />
            </div>
          </div>
          {menuItem.map((item, index) => (
            <NavLink to={item.path} key={index} className="link" activeclassname="active">
              <div className='icon'>{item.icon}</div>
              <div style={{ display: open ? "block" : "none" }} className='link_text'>{item.name}</div>
            </NavLink>
          ))}

        </div>

        <main>{Children}</main>


      </div>
      <Outlet />
    </>
  )
}

export default InstructorDashboard;