import React, { useState } from 'react'
import { FaShoppingCart, FaTimes, FaUserCircle } from 'react-icons/fa';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { Link ,NavLink} from 'react-router-dom';
import "../../css/NavBar.css"
const logo = (
 <div className="logo">
  <Link to={"/"}>
    <h2><span>Courza</span></h2>
  </Link>
 </div>
);
const cart =(
 <span className="cart">
 <Link to={"/cart"}>
  Cart
 <FaShoppingCart size={20}/>
 <p>0</p>
 </Link>
</span>
);
function NavBar() {
 const [showMenu,setshowMenu] = useState(false)
 const toggelmenu = ()=>{
  setshowMenu(!showMenu)
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
           <li><NavLink to={"/ourstore"} className={({isActive})=>isActive ? "active":""} >Our Store</NavLink></li>
           <li><NavLink to={"/coursedetails"} className={({isActive})=>isActive ? "active":""} >coursedetails</NavLink></li>
         </ul>
         <div className="header-right " onClick={hidemenu}>
           <span className="links">
              
              <a href='/#' style={{color:"blue"}}><FaUserCircle/> Hi,salah </a>
           

            
               <NavLink to={"/login"} className={({isActive})=>isActive ? "active":""}>login</NavLink>
                <NavLink to={"/myorders"} className={ ({isActive})=>isActive ? "active" : "" }>My orders</NavLink>
                
                                                                             
               
           </span>
            {cart}
         </div>
       </nav>
       <div className="menu-icon">
         {cart}
         <HiOutlineMenuAlt3 size={28} onClick={toggelmenu}/> 
       </div>
     </div>
   </header>
    </>
  )
}

export default NavBar