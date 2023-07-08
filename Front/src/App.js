import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/dropdown"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./component/utility/Footer";
import Login from "./pages/Login/Login";
import NavBar from "./component/utility/NavBar";
import Register from "./pages/Login/Register";
import Reset from "./component/utility/Reset";
import AllCourses from './pages/Courses/AllCourses'
import "./App.css";
import HomePage from "./pages/Home/HomePage";
import Coursedetails from "./pages/Courses/Coursedetails"
import HeadTitle from "./component/utility/HeadTitle";
import AddLecture from "./component/utility/AddLecture";
import AddSection from "./component/utility/AddSection";
import SectionDetails from "./component/utility/SectionDetails";
import Shopping from "./pages/Shopping";
import Checkout from "./pages/Checkout";
import Communication from "./component/Instructor/Communication"
import Tools from "./component/Instructor/Tools"
import CoursesDashboard from "./component/Instructor/CoursesDashboard"
import Resources from "./component/Instructor/Resources"
import CreateCourse from "./component/Instructor/CreateCourse"
import InstructorDashboard from "./component/Instructor/InstructorDashboard"  
import Student from "./pages/student/Student";
import Userprofile from "./pages/UserProfile";
import StudentCourcessEnroll from "./pages/student/StudentCourcessEnroll";
function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={ <HomePage/> }/>
        <Route path="/login" element={ <Login/> }/>
        <Route path="/register" element={ <Register/> }/>
        <Route path="/reset" element={ <Reset/> }/>
        <Route path="/coursedetails/:id" element={ <Coursedetails/> }/>
        <Route path="/allcourses" element={ <AllCourses/> }/>
        <Route path="/userprofile" element={ <Userprofile/> }/>
        <Route path="/Shopping" element={ <Shopping/> }/>
        <Route path="/Checkout" element={ <Checkout/> }/>
        <Route path="/instructorDashboard" element={ <InstructorDashboard/> }>
          <Route index element={ <CoursesDashboard/> }/>
           <Route path="communication" element={ <Communication/> }/>
           <Route path="tools" element={ <Tools/> }/>
          <Route path="coursesdashboard" element={ <CoursesDashboard/> }/>
          <Route path="resources" element={ <Resources/> }/>
          <Route path="createCourse" element={ <CreateCourse/> }/>
        </Route>
        <Route path="/student" element={ <Student/> }>
        <Route index element={ <Userprofile/> }/>
          <Route path="userprofile" element={ <Userprofile/> }/>
          <Route path="studentCourcessEnroll" element={ <StudentCourcessEnroll/> }/>
        </Route>

        </Routes>
      {/* <AddLecture/>
      <AddSection/>
      <SectionDetails/> */}
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
