import React, {useState} from 'react'
import "../../css/instructorcss/CreateCourse.css"
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faBell, faEnvelope, faInstitution, faMapMarker,faccVisa, faCcPaypal, faUser, faCreditCard, faLock, faPhone, faHeading, faAudioDescription, faMoneyBill, faIdCard, faMobileScreenButton} from '@fortawesome/free-solid-svg-icons'
import { FaAudioDescription, FaBell ,FaHeading, FaMobile, FaMoneyBill,FaIdCard } from 'react-icons/fa';
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
                <FaBell className='i'/>
                <div className='name'>AG</div>
            </div>
                <form onSubmit={handsubmit} className='F'>
                <h1 className=' h T' style={{textAlign:"center"}}>Create Your Course</h1>
                            <div className='input_group'>
                                <div className='input_box'>
                                <input className='name' type="text" onChange={handTitle} placeholder="Title"/>
                                <FaHeading className='icons' />
                                </div>
                            </div>
                            <div className='input_group'>
                                <div className='input_box'>
                                    <input className='name' type="text" onChange={handdesc} placeholder="Description"/>
                                    <FaAudioDescription  className='icons' />
                                </div>
                            </div>
                            <div className='input_group'>
                                <div className='input_box'>
                                    <input className='name' type="text" onChange={handprice} placeholder="price"/>
                                    <FaMoneyBill className='icons' />
                                </div>
                            </div>                          
                            <div className='input_group'>
                                <div className='input_box'>
                                    <input className='name' type="text" onChange={handuser} placeholder="user_id"/>
                                    <FaIdCard className='icons' />
                                </div>
                            </div>
                            <div className='input_group'>
                                <div className='input_box'>
                                    <input className='name' type="text" onChange={handcategory} placeholder="category_id"/>
                                    <FaIdCard className='icons' />
                                    </div>
                            </div>
                            <div className='input_group'>
                                <div className='input_box'>
                                    <input className='name' type="text" onChange={handsubcategory} placeholder="sub-category_id"/>
                                    <FaMobile className='icons' />
                                </div>
                            </div>

                            <div>
                            <input className='in' type='file' name='ImageUpload'></input>
                            
                            </div>
                            <div>
                                <button className=' button AK'>Create</button>
                        </div>  
                </form>
               
        </>
    )
}

export default CreateCourse

