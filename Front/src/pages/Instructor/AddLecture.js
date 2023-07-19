    import React, { useState } from 'react'
    import "../../css/AddLecture.css"
    import { FaPenSquare, FaTrash, FaFile } from 'react-icons/fa';
    import { useParams } from 'react-router-dom';
    import { addLecture, createSection, getCourse } from '../../redux/actions/courseAction';
    import { useDispatch, useSelector } from 'react-redux';
    import { useEffect } from 'react';
    const AddLecture = () => {
        const { id } = useParams()

        const [text, settext] = useState('');
        const [path, setpath] = useState('');
        const [title, setTitle] = useState("");
        const [lecTitle, setLecTitle] = useState(""); ////
        const [lecVideo, setlecVideo] = useState(null)
        const [added, setAdded] = useState('');
        const [secId, setSecId] = useState()
        const [secState, setSecState] = useState()
        const [lectureState, setLectureState] = useState()
        const [loading, setLoading] = useState(false);
        
        const dispatch = useDispatch();
        const accessToken = localStorage.getItem("token");
        const formData = new FormData()
        const handelSectionSubmit = (e) => {
            setLoading(true)
            e.preventDefault();
            formData.append("title", title);
            formData.append("course_id", id);
            dispatch(createSection(formData, accessToken));
            setAdded('new section added')
            setLoading(false)
            setTitle('')
        }
        const handelLectureSubmit = () => {
            console.log(lecVideo);
            const formData = new FormData();
            formData.append('title', lecTitle);
            formData.append('type', 'video');
            formData.append('section_id', secId);
            formData.append('content', lecVideo);

            fetch('http://localhost:8000/api/lectures', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${accessToken}`
                },
                body: formData,
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log('Success:', data);
                    // Do something with the response data

                    setLectureState('lecture added')
                    setTimeout(() => {
                        setLecTitle('')
                        setlecVideo('')
                    },1000)
                    
                })
                .catch((error) => {
                    console.error('Error:', error);
                    // Handle the error
                    setLectureState('something wrong happened')
                    
                });
                setTimeout(() => {
                    setLecTitle('')
                    setlecVideo('') 
                },2000)
        };
        const handleFileChange = (e) => {
            setlecVideo(e.target.files[0]);
        };
        const res = useSelector(state => state.authReducer.loginUser)
        
        const dispatch0 = useDispatch();
    
    const course = useSelector((state) => state.allCourses.oneCourse);
    // console.log(course?.data?.data);
    const details = course?.data?.data;
    useEffect(() => {
        dispatch0(getCourse(id));
    }, [dispatch, id]);
        return (
            <>
                <div className='totalpage'>
                    <div className='AddSection'>
                        <div className='N'>
                            <h2>New Section</h2>
                            <input type='text' placeholder='Title' required value={title} onChange={(w) => setTitle(w.target.value)} />
                            {added != '' ? <h3 className='text-primary'>{added}</h3> : null}
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
                            <input type='text' placeholder='Title' required value={lecTitle} onChange={(w) => setLecTitle(w.target.value)} />
                        </div>
                        <select
                        name="cat"
                        value={secId}
                    onChange={(e) => setSecId(e.target.value)}
                        className="form-select mt-3 px-2"
                        aria-label="Select category"
                    >
                        <option value="">Select a section</option>
                        {details?.sections &&
                        details.sections.map((item, index) => (
                            <option key={index} value={item.id}>
                            {item.title}
                            </option>
                        ))}
                    </select>
                        <input type='file' required className='file' multiple onChange={handleFileChange} />
                        <h3 className='text-primary '>{lectureState&& lecTitle!=''?lectureState:null}</h3>
                        <div className='foot'>
                            <h2>Cancel</h2>
                            <button className='button' onClick={handelLectureSubmit}>Add Lecture</button>
                        </div>
                    </div>
                    
                </div>
            </>
        )
    }

    export default AddLecture