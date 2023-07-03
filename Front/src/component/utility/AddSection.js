import React, { useState } from 'react'
import "../../css/AddSection.css"
const AddSection = () => {


    const[text , settext]=useState('');
    const[path , setpath]=useState('');
    return (

        <div>
            <div className='Add'>
                        <div className='N'>
                            <h2>New Section</h2>
                            <input type='text' placeholder='Title' value={text} onChange={(w)=>settext(w.target.value)}/>
                        </div>
                    
                <div className='IN'>
                    <h4>What will students be able to do at the end of this section?</h4>
                    <input type='text' placeholder='Enter a Learning Objective. 'value={path} onChange={(f)=>setpath(f.target.value)}/>
                </div>
                <div className='foot'>
                    <h2>Cancel</h2>
                    <button className='button'>Add Section</button>
                </div>
            </div>
        </div>  
    )
}
export default AddSection
