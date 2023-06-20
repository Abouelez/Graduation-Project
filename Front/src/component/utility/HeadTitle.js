import React, { useState } from 'react'
import { FaShoppingCart, FaTimes, FaUserCircle } from 'react-icons/fa';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import "../../css/NavBar.css"
const logo = (
 <div className="logo">
  <a href='h'>
    <h2><span>Courza</span>.</h2>
  </a>
 </div>
);
const cart =(
 <span className="cart">
 <a href='k'>
  Cart
 <FaShoppingCart size={20}/>
 <p>0</p>
 </a>
</span>
);
function HeadTitle() {
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
         <li className="logo-mobile">{logo} <FaTimes size={22} color="#fff" onClick={hidemenu}/></li>
           <li><a href='h' className={({isActive})=>isActive ? "active":""} >Home</a></li>
           <li><a href="c" className={({isActive})=>isActive ? "active":""}>contact us</a></li>
           <li><a href='h' className={({isActive})=>isActive ? "active":""} >Our Store</a></li>
           
         </ul>
         <div className="header-right" onClick={hidemenu}>
           <span className="links">
              
              <a href='/#' style={{color:"#ff7722"}}><FaUserCircle/> Hi,salah </a>
           

            
               <a href='l' className={({isActive})=>isActive ? "active":""}>login</a>
             

               <a href="j" className={ ({isActive})=>isActive ? "active" : "" }>Sign Up</a>
                <a href="j" className={ ({isActive})=>isActive ? "active" : "" }>My orders</a>
                
                                                                             
               
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

export default HeadTitle