import React, { useState } from 'react'
import "../../css/AddLecture.css"
import { FaPenSquare, FaTrash, FaFile } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { addLecture, createSection } from '../../redux/actions/courseAction';
import { useDispatch } from 'react-redux';
const AddLecture = () => {
    const [text, settext] = useState(''); 
    const [path, setpath] = useState('');
    const [title, setTitle] = useState(""); 
    const [lecVideo, setlecVideo]=useState(null)  
    const { id } = useParams()

       const dispatch = useDispatch();
   const accessToken = localStorage.getItem("token");
   const formData=new FormData()
   const handelSectionSubmit = (e) => {
    e.preventDefault();
    formData.append("title", title); 
    formData.append("course_id", id); 
    dispatch(createSection(formData, accessToken));

}
const formData0=new FormData()
    //////////////////
    const handelLectureSubmit = (e) => {
        e.preventDefault();
        formData0.append("title", title); 
        formData0.append("type", 'video'); 
        formData0.append("section_id", 1); 
        formData0.append("content", lecVideo); 
        dispatch(addLecture(formData, accessToken));
        console.log(lecVideo);

    }
    const handleFileChange = (e) => {
        setlecVideo(e.target.files[0]);
      };
    //////////
    return (
        <>
            <div className='totalpage'>
                <div className='AddSection'>
                    <div className='N'>
                        <h2>New Section</h2>
                        <input type='text' placeholder='Title' value={title} onChange={(w) => setTitle(w.target.value)} />
                    </div>
                    <div className='foot'>
                        <h2>Cancel</h2>
                        <button className='button' onClick={handelSectionSubmit}>Add Section</button>
                    </div>
                </div>
                <div className='Lecture'>
                    <div className='N'>
                        <div className='SCn'>
                            <h2>New Lecture</h2>
                            <div className='CO'>
                                <FaTrash className='icmp' />
                                <FaPenSquare className='icmp' />
                            </div>
                        </div>
                        <input type='text' placeholder='Title' value={text} onChange={(w) => settext(w.target.value)} />
                    </div>
                    
                    <input type='file' className='file' onChange={handleFileChange}/>
                    <div className='foot'>
                        <h2>Cancel</h2>
                        <button className='button' onClick={handelLectureSubmit} >Add Lecture</button>
                    </div>
                </div>
                {/* /////////// */}

                {/* ////////// */}
                <div className='details'>
                    <div className='SCn'>
                        <h2>Unpublished Section:</h2>
                        <FaFile className='i' />
                        <span className='para'>Course Name</span>
                        <div className='CO'>
                            <FaTrash className='icmp' />
                            <FaPenSquare className='icmp' />
                        </div>
                    </div>
                    <div className='LQCPA'>
                        <div className='pluse'>+</div>
                        <button className='button Lec'>Lecture</button>
                        <div className='pluse'>+</div>
                        <button className='button Lec'>Quize</button>
                        <div className='pluse'>+</div>
                        <button className='button Lec'>Coding Exercise</button>
                        <div className='pluse'>+</div>
                        <button className='button Lec'>Practice Test</button>
                        <div className='pluse'>+</div>
                        <button className='button Lec'>Assignment</button>
                    </div>
                    <button className='button BT'>+ Section</button>

                </div>
            </div>
        </>
    )
}

export default AddLecture

