import React, { Children, useState } from 'react'
import "../../css/instructorcss/Sidebar.css"
import { NavLink, Outlet } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faVideo,faMessage,faChartSimple,faWrench,faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import { FaBars, FaViadeo, FaWrench, FaAirFreshener, FaAlipay, FaUsers } from "react-icons/fa"
import { Button, Card, Col, Nav, Navbar, ProgressBar, Row } from 'react-bootstrap'
<i class="fa-sharp fa-solid fa-circle-exclamation"></i>
const TestCoursesDash = ({ Children }) => {
    const [open, setopen] = useState(false);
    const toggle = () => setopen(!open);
    /*
    import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBell } from 'react-icons/fa';
import '../../css/instructorcss/Videos.css';

const CoursesDashboard = () => {
  const route = useNavigate();

  return (
    <div className="container-fluid">
      <div className="row">
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Courses
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Students
                </a>
              </li>
              </ul>
              </div>
            </nav>
            <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
              <div className="d-flex justify-content-between align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Courses</h1>
                <div className="d-flex align-items-center">
                  <FaBell className='me-3' />
                  <div className='name me-3'>AG</div>
                  <a href='/Sidebar/createCourse' className='btn btn-primary' onClick={() => { route('/Sidebar/createCourse') }}>Create Your Course</a>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 mb-4">
                  <div className="card h-100">
                    <img src="/images/engaging-course.jpg" className="card-img-top" alt="Create an Engaging Course" />
                    <div className="card-body">
                      <h2 className="card-title">Create an Engaging Course</h2>
                      <p className="card-text">Whether you've been teaching for years or are teaching for the first time, you can make an engaging course. We've compiled resources and best practices to help you get to the next level, no matter where you're starting.</p>
                      <button className="btn btn-primary">Get Started</button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="card h-100">
                    <img src="/images/newcomer-challenge.jpg" className="card-img-top" alt="Join the New Instructor Challenge!" />
                    <div className="card-body">
                      <h2 className="card-title">Join the New Instructor Challenge!</h2>
                      <p className="card-text">Get exclusive tips and resources designed to help you launch your first course faster! Eligible instructors who publish their first course on time will receive a special bonus to celebrate. Start today!</p>
                      <button className="btn btn-primary">Get Started</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 mb-4">
                  <div className="card h-100">
                    <div className="card-body">
                      <h2 className="card-title">Test Video</h2>
                      <p className="card-text">Get free feedback from Udemy video experts on your audio, video, and delivery.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-4">
                  <div className="card h-100">
                    <div className="card-body">
                      <h2 className="card-title">Marketplace Insights</h2>
                      <p className="card-text">Get Udemy-wide market data to create successful courses.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-4">
                  <div className="card h-100">
                    <div className="card-body">
                      <h2 className="card-title">Bulk coupon creation</h2>
                      <p className="card-text">Create multiple coupons at once via CSV upload.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="card h-100">
                    <div className="card-body">
                      <h2 className="card-title">Teaching Center</h2>
                      <p className="card-text">Find articles on Udemy teaching— from course creation to marketing.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="card h-100">
                    <div className="card-body">
                      <h2 className="card-title">Help and Support</h2>
                      <p className="card-text">Can’t find what you need? Our support team is happy to help.</p>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      )
    }
    
    */

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#">Dashboard Instructor</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#">Course 1</Nav.Link>
                        <Nav.Link href="#">Course 2</Nav.Link>
                        <Nav.Link href="#">Course 3</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className="container mt-3">
                <Row>
                    <Col md={4}>
                        <Card>
                            <Card.Header>Course 1</Card.Header>
                            <Card.Body>
                                <Card.Title>Enrolled Students</Card.Title>
                                <Card.Text>
                                    <FaUsers /> 100
                                </Card.Text>
                                <Button variant="primary">View Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Header>Course 2</Card.Header>
                            <Card.Body>
                                <Card.Title>Enrolled Students</Card.Title>
                                <Card.Text>
                                    <FaUsers /> 200
                                </Card.Text>
                                <Button variant="primary">View Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Header>Course 3</Card.Header>
                            <Card.Body>
                                <Card.Title>Enrolled Students</Card.Title>
                                <Card.Text>
                                    <FaUsers /> 150
                                </Card.Text>
                                <Button variant="primary">View Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col md={8}>
                        <Card>
                            <Card.Header>Course 1</Card.Header>
                            <Card.Body>
                                <Card.Title>Progress</Card.Title>
                                <ProgressBar now={75} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Header>Course 2</Card.Header>
                            <Card.Body>
                                <Card.Title>Enrolled Students</Card.Title>
                                <Card.Text>
                                    <FaUsers /> 200
                                </Card.Text>
                                <Button variant="primary">View Details</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default TestCoursesDash