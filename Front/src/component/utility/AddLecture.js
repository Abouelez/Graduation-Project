import React, { useState } from 'react'
import "../../css/AddLecture.css"
import { FaPenSquare, FaTrash } from 'react-icons/fa';
const AddLecture = () => {
    const[text , settext]=useState('');
    return (
        <>
            <div className='Lecture'>
                        <div className='N'>
                            <div className='SCn'>
                                <h2>New Lecture</h2>
                                <div className='CO'>
                                    <FaTrash className='icmp'  />
                                    <FaPenSquare className='icmp'  />
                                </div>
                            </div>
                            <input type='text' placeholder='Title' value={text} onChange={(w)=>settext(w.target.value)}/>
                                
                            

                        </div>
                <div className='foot'>
                    <h2>Cancel</h2>
                    <button className='button'>Add Lecture</button>
                </div>
            </div>
        </>
    )
}

export default AddLecture
