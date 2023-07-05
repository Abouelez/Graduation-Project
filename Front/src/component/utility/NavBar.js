import React, { useState } from 'react'
import { FaShoppingCart, FaTimes, FaUserCircle } from 'react-icons/fa';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { GrClose } from 'react-icons/gr';
import { BiSearch } from 'react-icons/bi';
import { Link, NavLink } from 'react-router-dom';
import "../../css/NavBar.css"
import { FormControl } from 'react-bootstrap';
import NavbarSearchHook from '../../Hook/Search/NavbarSearchHook';
const logo = (
  <div className="logo">
    <Link to={"/"}>
      <h2><span>Courza.</span></h2>
    </Link>
  </div>
);

function NavBar() {
  const [showMenu, setshowMenu] = useState(false)
  const [showsearch, setshowsearch] = useState(false)
  const toggelmenu = () => {
    setshowMenu(!showMenu)
  }
  const showM = () => {
    setshowsearch(true)
  }
  const hideM = () => {
    setshowsearch(false)
  }
  const hidemenu = () => {
    setshowMenu(false)
  }
  const [OnChangeSearch, searchWord] = NavbarSearchHook()
  let word = "";
  if (localStorage.getItem("searchWord") != null)
    word = localStorage.getItem("searchWord")
  return (
    <>
      <header>
        <div className="header">
          {logo}
          <nav className={showMenu ? "show-nav" : "hide-nav"}>
            <div className={showMenu ? `"nav-wrapper" "show-nav-wrapper"` : "nav-wrapper"} onClick={hidemenu} >
            </div>
            <ul onClick={hidemenu}>
              <li className="logo-mobile">{logo} <FaTimes size={22} color="black" onClick={hidemenu} /></li>

              <FormControl
                value={searchWord}
                onChange={OnChangeSearch}
                type="search"
                placeholder="ابحث..."
                className="me-2 w-100 text-center"
                aria-label="Search"
              />
            </ul>
            <div className="dropdown">
              {/*
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                  Category
                </button>
                 <ul className="dropdown-menu " aria-labelledby="dropdownMenuButton2">
                  <li><h2 className="dropdown-item ">Action</h2>
                    <ul className='dropdown-submenu'>
                      <li><a className="dropdown-item" href="#1">Another action</a></li>
                      <li><a className="dropdown-item" href="#1">Something else here</a></li>
                      <li><a className="dropdown-item" href="#1">Another action</a></li>
                      <li><a className="dropdown-item" href="#1">Something else here</a></li>
                    </ul>
                  </li>
                  <li><h2 className="dropdown-item ">Action</h2>
                    <ul className='dropdown-submenu'>
                      <li><a className="dropdown-item" href="#1">Another action</a></li>
                      <li><a className="dropdown-item" href="#1">Something else here</a></li>
                      <li><a className="dropdown-item" href="#1">Another action</a></li>
                      <li><a className="dropdown-item" href="#1">Something else here</a></li>
                    </ul>
                  </li>
                  <li><h2 className="dropdown-item ">Action</h2>
                    <ul className='dropdown-submenu'>
                      <li><a className="dropdown-item" href="#1">Another action</a></li>
                      <li><a className="dropdown-item" href="#1">Something else here</a></li>
                      <li><a className="dropdown-item" href="#1">Another action</a></li>
                      <li><a className="dropdown-item" href="#1">Something else here</a></li>
                    </ul>
                  </li>
                  <li><h2 className="dropdown-item ">Action</h2>
                    <ul className='dropdown-submenu'>
                      <li><a className="dropdown-item" href="#1">Another action</a></li>
                      <li><a className="dropdown-item" href="#1">Something else here</a></li>
                      <li><a className="dropdown-item" href="#1">Another action</a></li>
                      <li><a className="dropdown-item" href="#1">Something else here</a></li>
                    </ul>
                  </li>
                  <li><h2 className="dropdown-item ">Action</h2>
                    <ul className='dropdown-submenu'>
                      <li><a className="dropdown-item" href="#1">Another action</a></li>
                      <li><a className="dropdown-item" href="#1">Something else here</a></li>
                      <li><a className="dropdown-item" href="#1">Another action</a></li>
                      <li><a className="dropdown-item" href="#1">Something else here</a></li>
                    </ul>
                  </li>
                </ul> */
              }
            </div>
            <div className="header-right " onClick={hidemenu}>
              <span className="links">
                <NavLink to="/userprofile" style={{ color: "black" }}><FaUserCircle /> Hi,salah </NavLink>
                <NavLink to={"/login"} className={({ isActive }) => isActive ? "active" : ""}>login</NavLink>
              </span>
              <div className="d-flex cart">

                <Link to={"/Shopping"}>
                  Cart
                  <FaShoppingCart size={20} />
                  <p>0</p>
                </Link>

              </div>
            </div>
          </nav>
          <div className="menu-icon">
            <span className='cart1'>
              <Link to={"/Shopping"}>
                Cart
                <FaShoppingCart size={20} />
                <p>0</p>
              </Link>
            </span>
            <HiOutlineMenuAlt3 size={28} onClick={toggelmenu} />
          </div>
        </div>
      </header>
    </>
  )
}

export default NavBar