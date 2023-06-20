import React from 'react' 
import {BsSearch} from "react-icons/bs"
import {BiCategory} from "react-icons/bi"
import {GoArrowRight} from "react-icons/go"
import "../../css/NavCategorySearch.css"
 function NavBarLogin() {
 

   return (
    <>
    <header className='header-upper py-3'>
     <div className='container'>
       <div className='row align-items-center'>
      
     
       <div className='col-5'>
       <div className="dropdown drop">
       <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        <BiCategory className="text-dark" size={28}/>
         <span className='me-5 d-inline-block'>Categoris</span>
        </button>
         <ul className="dropdown-menu  drop-menu" aria-labelledby="dropdownMenuButton1">
         <li><a className="dropdown-item drop-item"  href=''><GoArrowRight size={20}/> &nbsp; &nbsp; Active &raquo;</a> 
           <ul className='dropdown-menu submenu'>
            <li><a className="dropdown-item "  href=''><GoArrowRight size={20}/> &nbsp; &nbsp; Front end</a></li>
            <li><a className="dropdown-item "  href=''><GoArrowRight size={20}/> &nbsp; &nbsp; Back end</a></li>
            <li><a className="dropdown-item "  href=''><GoArrowRight size={20}/> &nbsp; &nbsp; Something else here</a></li>
            <li><a className="dropdown-item "  href=''><GoArrowRight size={20}/> &nbsp; &nbsp; Action</a></li>
            <li><a className="dropdown-item "  href=''><GoArrowRight size={20}/> &nbsp; &nbsp; Something else here</a></li>
            <li><a className="dropdown-item "  href=''><GoArrowRight size={20}/> &nbsp; &nbsp; Action</a></li>
          </ul>
         </li>
         <li><a className="dropdown-item drop-item"  href=''><GoArrowRight size={20}/> &nbsp; &nbsp; Another action &raquo;</a>
           <ul className='dropdown-menu submenu'>
            <li><a className="dropdown-item "  href=''><GoArrowRight size={20}/> &nbsp; &nbsp; Something else here</a></li>
            <li><a className="dropdown-item "  href=''><GoArrowRight size={20}/> &nbsp; &nbsp; Action</a></li>
            <li><a className="dropdown-item "  href=''><GoArrowRight size={20}/> &nbsp; &nbsp; Something else here</a></li>
            <li><a className="dropdown-item "  href=''><GoArrowRight size={20}/> &nbsp; &nbsp; Action</a></li>
            <li><a className="dropdown-item "  href=''><GoArrowRight size={20}/> &nbsp; &nbsp; Something else here</a></li>
            <li><a className="dropdown-item "  href=''><GoArrowRight size={20}/> &nbsp; &nbsp; Action</a></li>
           </ul>
         </li>
         <li><a className="dropdown-item drop-item"  href=''><GoArrowRight size={20}/> &nbsp; &nbsp; Something else here</a>
         <ul className='dropdown-menu submenu'>
            <li><a className="dropdown-item "  href=''><GoArrowRight size={20}/> &nbsp; &nbsp; Front end</a></li>
            <li><a className="dropdown-item "  href=''><GoArrowRight size={20}/> &nbsp; &nbsp; Back end</a></li>
            <li><a className="dropdown-item "  href=''><GoArrowRight size={20}/> &nbsp; &nbsp; Something else here</a></li>
            <li><a className="dropdown-item "  href=''><GoArrowRight size={20}/> &nbsp; &nbsp; Action</a></li>
            <li><a className="dropdown-item "  href=''><GoArrowRight size={20}/> &nbsp; &nbsp; Something else here</a></li>
            <li><a className="dropdown-item "  href=''><GoArrowRight size={20}/> &nbsp; &nbsp; Action</a></li>
          </ul>
         </li>
         <li><a className="dropdown-item drop-item"  href=''><GoArrowRight size={20}/> &nbsp; &nbsp; Action</a></li>
         <li><a className="dropdown-item drop-item"  href=''><GoArrowRight size={20}/> &nbsp; &nbsp; Another action</a></li>
         <li><a className="dropdown-item drop-item"  href=''><GoArrowRight size={20}/> &nbsp; &nbsp; Something else here</a></li>
         <li><a className="dropdown-item drop-item"  href=''><GoArrowRight size={20}/> &nbsp; &nbsp; Action</a></li>
         <li><a className="dropdown-item drop-item"  href=''><GoArrowRight size={20}/> &nbsp; &nbsp; Another action</a></li>
         <li><a className="dropdown-item drop-item"  href=''><GoArrowRight size={20}/> &nbsp; &nbsp; Something else here</a></li>
         </ul>
        </div>
       </div>
       <div className='col-6'>
         <div className='input-group '>  
           <input 
            type="text"
            className='form-control py-2'
            placeholder='search product here ...'
            aria-label='search product here ...' 
            aria-describedby='basic-addon2'/>
            <span className='input-group-text p-2 '><BsSearch className='fs-6 text-white'/></span>
         </div>
       </div>
       </div>
     </div>
    
    </header>
   
    </>
   )
 }
 
 export default NavBarLogin