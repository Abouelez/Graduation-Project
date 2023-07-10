import React from 'react'
import "../../css/VideosWatch.css"
import { Accordion } from 'react-bootstrap'
import { FaJsSquare, FaSquare, FaSquareFull, FaSquareRootAlt, FaSquarespace, FaViadeo, FaVideo } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { accessCourse } from '../../redux/actions/courseAction'
import { useEffect } from 'react'
import { useState } from 'react'
const VideosWatch = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const course = useSelector((state) => state.allCourses.oneCourse);
    const [source, setSource] = useState()
    console.log(course?.data?.data.sections[0].lectures[0].content);
    const details = course?.data?.data;
    useEffect(() => {
        dispatch(accessCourse(30));
    }, [dispatch, id]);
    
    const handlesubmit = (e) => {
        e.preventDefault();
        
        console.log(e.target.value);
    }
    return (
        <>
            <section className='section-video'>
                <div className='VI container'>
                    <video controls src={`http://localhost:8000${source}`} width="800" />
                </div>
                <h1 style={{ textAlign: "center" }}>Course Content</h1>

                <Accordion className='container mt-5 p-3'>
                {details?.sections.map((section, index) => (
                    <div key={index}>
                        <Accordion.Item eventKey="0" className='item'>
                            <Accordion.Header>{section.title}</Accordion.Header>
                            <Accordion.Body>
                            {section.lectures.map((lecture) => (
                                <div key={lecture.id}>
                                  {lecture.type === "video" ? (
                                    <div className='d-flex'>
                                    <h3 className='btn' onClick={(e)=>setSource(lecture.content)}>{lecture.title}</h3>
                                    </div>
                                    
                                  ) : (
                                    <p>{lecture.content}</p>
                                  )}
                                </div>
                              ))}
                            </Accordion.Body>
                        </Accordion.Item>
                    </div>
                ))}
                </Accordion>
            </section>
        </>
    )
}

export default VideosWatch
