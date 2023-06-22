import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./component/utility/Footer";
import Login from "./pages/Login/Login";
import NavBar from "./component/utility/NavBar";
import NavCategorySearch from "./component/utility/NavCategorySearch";
import Register from "./pages/Login/Register";
import Reset from "./component/utility/Reset";
import AllCourses from './pages/Courses/AllCourses'
import "./App.css";
import HomePage from "./pages/Home/HomePage";
import Coursedetails from "./pages/Courses/Coursedetails"
function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <NavCategorySearch/>
     <Routes>
      <Route path="/" element={ <HomePage/> }/>
      <Route path="/login" element={ <Login/> }/>
      <Route path="/register" element={ <Register/> }/>
      <Route path="/reset" element={ <Reset/> }/>
      <Route path="/coursedetails" element={ <Coursedetails/> }/>
      <Route path="/allcourses" element={ <AllCourses/> }/>
     </Routes>
     
     <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
