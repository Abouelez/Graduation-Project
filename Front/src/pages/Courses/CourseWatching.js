import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const CourseWatching = () => {
  
    // const { id } = useParams();
    // const course = useSelector((state) => state.allCourses.courses.data.find((course) => course.id === id));
  
    // if (!course) {
    //   return <div>Loading...</div>;
    // }
  
    return (
      <div className="container-fluid bg-light">
        <div className="row">
          <div className="col-lg-2 border-right">
            <h4 className="text-uppercase text-muted">Course Content</h4>
            <ul className="list-unstyled">
           {  //   {course.sections.map((section) => (
            //     <li key={section.id}>
            //       <h5 className="mb-3">{section.title}</h5>
            //       <ul className="list-unstyled">
            //         {section.lessons.map((lesson) => (
            //           <li key={lesson.id}>
            //             <a href={lesson.url} className="text-decoration-none text-body">{lesson.title}</a>
            //           </li>
            //         ))}
            //       </ul>
            //     </li>
            //   ))
        }
            </ul>
          </div>
          <div className="col-lg-10">
            <h1 className="mt-4">{'course.title'}</h1>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src='{course.videoUrl}' allowFullScreen title='{course.title}'></iframe>
            </div>
            <hr />
            <div className="my-4">
              <h4 className="mb-3">Description</h4>
              <p>{'course.description'}</p>
            </div>
            <hr />
            <div className="my-4">
              <h4 className="mb-3">Instructor</h4>
              <div className="media">
                <img src='{course.instructor.avatarUrl}' className="mr-3 rounded-circle" alt='{course.instructor.name}' />
                <div className="media-body">
                  <h5 className="mt-0 mb-1">'{'course.instructor.name'}'</h5>
                  <p>{'course.instructor.bio'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };





export default CourseWatching
