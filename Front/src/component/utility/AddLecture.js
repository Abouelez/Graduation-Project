import React, { useState } from 'react'
import "../../css/AddLecture.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFile , faTrashCan ,faPenToSquare} from '@fortawesome/free-solid-svg-icons'
const AddLecture = () => {
    const[text , settext]=useState('');
    return (
        <>
            <div className='Lecture'>
                        <div className='N'>
                            <div className='SCn'>
                                <h2>New Lecture</h2>
                                <div className='CO'>
                                    <FontAwesomeIcon className='icmp' icon={faTrashCan} />
                                    <FontAwesomeIcon className='icmp' icon={faPenToSquare} />
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
