import React, { useState } from 'react'
import { FaShoppingCart, FaTimes, FaUserCircle } from 'react-icons/fa';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { GrClose } from 'react-icons/gr';
import { BiSearch } from 'react-icons/bi';
import { Link ,NavLink} from 'react-router-dom';
import "../../css/NavBar.css"
const logo = (
 <div className="logo">
  <Link to={"/"}>
    <h2><span>Courza.</span></h2>
  </Link>
 </div>
);

function NavBar() {
  const [search,setsearch] = useState()
 const [showMenu,setshowMenu] = useState(false)
 const [showsearch,setshowsearch] = useState(false)
 const toggelmenu = ()=>{
  setshowMenu(!showMenu)
 }
 const showM= ()=>{
  setshowsearch(true)
 }
 const hideM= ()=>{
  setshowsearch(false)
 }
 const hidemenu = ()=>{
  setshowMenu(false)
 }
  return (
    <>
    <header>
      <div className="header">
        {logo}
        <nav className={showMenu ? "show-nav":"hide-nav"}>
          <div className={showMenu ? `"nav-wrapper" "show-nav-wrapper"` : "nav-wrapper"} onClick={hidemenu} >
          </div>
          <ul onClick={hidemenu}>
          <li className="logo-mobile">{logo} <FaTimes size={22} color="black" onClick={hidemenu}/></li>
            <li><NavLink to={"/"} className={({isActive})=>isActive ? "active":""} >Home</NavLink></li>
            <li><NavLink to={"/contact"} className={({isActive})=>isActive ? "active":""}>contact us</NavLink></li>
            <li><NavLink to={"/coursedetails"} className={({isActive})=>isActive ? "active":""} >coursedetails</NavLink></li>
          </ul>
          <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
            Category
          </button>
          <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton2">
            <li><h2 class="dropdown-item ">Action</h2>
              <ul className='dropdown-submenu'>
               <li><a class="dropdown-item" href="#1">Another action</a></li>
               <li><a class="dropdown-item" href="#1">Something else here</a></li>
               <li><a class="dropdown-item" href="#1">Another action</a></li>
               <li><a class="dropdown-item" href="#1">Something else here</a></li>
              </ul>
            </li>
            <li><h2 class="dropdown-item ">Action</h2>
              <ul className='dropdown-submenu'>
               <li><a class="dropdown-item" href="#1">Another action</a></li>
               <li><a class="dropdown-item" href="#1">Something else here</a></li>
               <li><a class="dropdown-item" href="#1">Another action</a></li>
               <li><a class="dropdown-item" href="#1">Something else here</a></li>
              </ul>
            </li>
            <li><h2 class="dropdown-item ">Action</h2>
            <ul className='dropdown-submenu'>
             <li><a class="dropdown-item" href="#1">Another action</a></li>
             <li><a class="dropdown-item" href="#1">Something else here</a></li>
             <li><a class="dropdown-item" href="#1">Another action</a></li>
             <li><a class="dropdown-item" href="#1">Something else here</a></li>
            </ul>
          </li>
          <li><h2 class="dropdown-item ">Action</h2>
          <ul className='dropdown-submenu'>
           <li><a class="dropdown-item" href="#1">Another action</a></li>
           <li><a class="dropdown-item" href="#1">Something else here</a></li>
           <li><a class="dropdown-item" href="#1">Another action</a></li>
           <li><a class="dropdown-item" href="#1">Something else here</a></li>
          </ul>
        </li>
        <li><h2 class="dropdown-item ">Action</h2>
        <ul className='dropdown-submenu'>
         <li><a class="dropdown-item" href="#1">Another action</a></li>
         <li><a class="dropdown-item" href="#1">Something else here</a></li>
         <li><a class="dropdown-item" href="#1">Another action</a></li>
         <li><a class="dropdown-item" href="#1">Something else here</a></li>
        </ul>
      </li>
          </ul>
        </div>
          <div className="header-right " onClick={hidemenu}>
            <span className="links">
              
            <NavLink to="/userprofile" style={{color:"black"}}><FaUserCircle/> Hi,salah </NavLink>


            
              <NavLink to={"/login"} className={({isActive})=>isActive ? "active":""}>login</NavLink>
              
                                                                            
              
          </span>
          <div className="d-flex cart">
          <div >
          <div className=' search'>
          <BiSearch  size={20} color="#000" onClick={showM} className="searchbtn" />
         <GrClose size={20}  onClick={hideM} className={showsearch? "closebtnn" : "closebtn"}/>
          </div>
          <div className={showsearch? "act" : "searchBox"}>
             <input type="text" placeholder='Search here ...'  value={search} onChange={(e)=>setsearch(e.target.value)}/>
          </div>
          </div>
          <Link to={"/cart"}>
           Cart
          <FaShoppingCart size={20}/>
          <p>0</p>
          </Link>
          
         </div>
         </div>
       </nav>
       <div className="menu-icon">
       <span className='cart1'>
       <Link to={"/cart"}>
       Cart
      <FaShoppingCart size={20}/>
      <p>0</p>
      </Link>
      </span>
         <HiOutlineMenuAlt3 size={28} onClick={toggelmenu}/> 
       </div>
     </div>
   </header>
    </>
  )
}

export default NavBar