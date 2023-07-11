import React from 'react'
import "../../css/VideosWatch.css"
import { Accordion, Button } from 'react-bootstrap'
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
    const details = course?.data?.data;
    useEffect(() => {
        dispatch(accessCourse(id));
    }, [dispatch, id]);


    return (
        <>
            <section className='section-video'>
            <div className="VI container" style={{ width: '100%', height: '500px' }}>
            <div className="embed-responsive embed-responsive-16by9 mb-3">
              <video className="embed-responsive-item" autoPlay="true"  controls src={`http://localhost:8000${source}`} />
            </div>
          </div>
                <h1 style={{ textAlign: "center" }}>Course :<p className='text'>{details?.title}</p> Content</h1>
                <Accordion className='container mt-5 p-3'>
                    {details?.sections.map((section, index) => (
                        <div key={index}>
                            <Accordion.Item eventKey="0" className='mb-3'>
                                <Accordion.Header>{section.title}</Accordion.Header>
                                <Accordion.Body>
                                    {section.lectures.map((lecture) => (
                                        <div key={lecture.id} onClick={(e) => setSource(lecture?.content)} className="d-flex align-items-center mb-2  mb-2 video-item">
                                            {lecture?.type === "video" ? (
                                                <div  className="d-flex align-items-center">
                                                <Button variant="primary" size="sm" className="me-2">
                                                  <FaVideo />
                                                </Button>
                                                <span>{lecture.title}</span>
                                              </div>
                                            ) : (
                                                <p>{lecture.content}</p>
                                            )}
                                        </div>
                                    ))}
                                </Accordion.Body>
                            </Accordion.Item>
                        </div>
                    ))
                    }
                </Accordion>
            </section>
        </>
    )
}

export default VideosWatch
