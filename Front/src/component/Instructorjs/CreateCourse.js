import React, {useState} from 'react'
import "../../css/CreateCourse.css"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBell} from '@fortawesome/free-solid-svg-icons'
const CreateCourse = () => {
    const[Title,setTitle]=useState('');
    const[desc,setdesc]=useState('');
    const[hand,sethand]=useState('');
    const[price,setprice]=useState('');
    const[category,setcategory]=useState('');
    const [cat , setsubcategory]=useState('');


    const handsubmit=(w)=>{
        w.preventDefault()
        if(Title.length===0 || desc.length===0){
            setTitle(true)
            setdesc(true)
    }
    if(Title===false){
        setTitle(false)
    }
}
        const handTitle=(d)=>{
            const n = d.target.value
            const b =/[a-zA-Z]{5,}/ig
            const pa = b.test(n)
            if(pa === false){
                setTitle(true)
            } else{
                setTitle(false)
        }
        }
        const handdesc =(j)=>{
            const n = j.target.value
            const b =/[a-zA-Z]{10,}/ig
            const pa = b.test(n)
            if(pa === false){
                setdesc(true)
            } else{
                setdesc(false)
        }
        }
        const handuser =(j)=>{
            const n = j.target.value
            const b =/[a-zA-Z]{10,}/ig
            const pa = b.test(n)
            if(pa === false){
                sethand(true)
            } else{
                sethand(false)
        }
        }
        const handprice=(l)=>{
            setprice(l.target.value)
        }
        const handcategory =(a)=>{
            setcategory(a.target.value)
        }
        const handsubcategory=(s)=>{
            setsubcategory(s.target.value);
        }
    return (
        <>
            <div className='head-titlt'>
                <h4>Student</h4>
                <p>Switch to the student view here - get back to the courses you’re taking.</p>
                <FontAwesomeIcon className='i' icon={faBell} />
                <div className='name'>AG</div>
            </div>
            <h1 className='T'>Create Your Course</h1>
                <form onSubmit={handsubmit} className='F'>
                            <div>
                                <input className='in' type="text" onChange={handTitle} placeholder="Title">
                                </input>
                            </div>
                            {Title?
                            <label>Title can't be empty</label>:""}  
                            <div>
                                <input className='in' type="text" onChange={handdesc} placeholder="Description"></input>
                            </div>
                            {desc?
                            <label>desc can't be empty</label>:""}
                            <div>
                                <input className='in' type="text" onChange={handprice} placeholder="price">
                                </input>
                            </div>                          
                            <div>
                                <input className='in' type="text" onChange={handuser} placeholder="user_id">
                                </input>
                            </div>
                            <div>
                                <input className='in' type="text" onChange={handcategory} placeholder="category_id">
                                </input>
                            </div>
                            <div>
                                <input className='in' type="text" onChange={handsubcategory} placeholder="sub-category_id">
                                </input>
                            </div>

                            <div>
                            <input className='in' type='file' name='ImageUpload'></input>
                            
                            </div>
                            <div>
                                <input className='AK' type="submit" value="Create"></input>
                        </div>  
                </form>
        </>
    )
}

export default CreateCourse

