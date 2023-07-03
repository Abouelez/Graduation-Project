import React from 'react'
import { GrClose } from 'react-icons/gr';
import { BiSearch } from 'react-icons/bi';
import "../../css/NavBar.css"
function HeadTitle() {

 
  

 

  return (
    
    <header>
    <div className='header'>
     <a href='T' className='logo'>Courza</a>
     <div className='group'>
       <ul className='navigation'>
         <li><a href='h'>home</a></li>
         <li><a href='h'>home</a></li>
         <li><a href='h'>home</a></li>
         <li><a href='h'>home</a></li>
       </ul>
       <div className=' search'>
          <BiSearch  size={20} color="#000" />
         <GrClose size={20}  />
          </div>
        
     </div>
     </div>
    </header>
  
  );
}
export default HeadTitle