import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./component/utility/Footer";
import Login from "./pages/Login";
import NavBar from "./component/utility/NavBar";
import NavCategorySearch from "./component/utility/NavCategorySearch";
import Register from "./pages/Register";
import Reset from "./component/utility/Reset";
import "./css/App.css";
import HomePage from "./pages/Home/HomePage";
import Coursedetails from "./component/utility/Coursedetails"
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
     </Routes>
     
     <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
