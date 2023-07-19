import React, { useEffect, useState } from 'react'
import { FaShoppingCart, FaTimes, FaUser, FaUserCircle } from 'react-icons/fa';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { GrClose } from 'react-icons/gr';
import { BiSearch } from 'react-icons/bi';
import { Link, NavLink } from 'react-router-dom';
import "../../css/NavBar.css"
import { FormControl, NavDropdown } from 'react-bootstrap';
import NavbarSearchHook from '../../Hook/Search/NavbarSearchHook';
function NavBar() {



  const logo = (
    <div className="logo">
      <Link to={"/"}>
        <h2><span>courses platform</span></h2>
      </Link>
    </div>
  );
  const [user, setUser] = useState('');
  useEffect(() => {
    if (localStorage.getItem("user") != null)
      setUser(JSON.parse(localStorage.getItem("user")))
  }, [])

  const logOut = () => {
    localStorage.removeItem("user")
    setUser('')
  }
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
                placeholder="Search ..."
                className="search1 me-2 w-100 text-center"
                aria-label="Search"
              />
            </ul>
            <div className="dropdown">

            </div>
            {
              user != '' ? (
                <NavDropdown title={user.name} id="basic-nav-dropdown">
                  {
                    user.is_instructor === 1 ? (
                      <NavDropdown.Item as={Link} to="/instructorDashboard">
                        my dashboard
                      </NavDropdown.Item>
                    ) : (
                      <NavDropdown.Item as={Link} to="/student">
                        my profile
                      </NavDropdown.Item>
                    )
                  }
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logOut} href="/"> log out</NavDropdown.Item>
                </NavDropdown>
              ) : (
                <span className="links">
                  <NavLink to={"/login"} className={({ isActive }) => isActive ? "active" : ""}>login</NavLink>
                </span>
              )
            }

            <span className="links">
              <Link to={"/student"}>
                <FaUser size={20}/>
              </Link>
              {  
              user.is_admin === 1 ? 
              <NavLink to={"/admin"} className={({ isActive }) => isActive ? "active" : ""}>admin dashboard</NavLink>:null
              }
            </span>

            <div className="links d-flex ">
              <div className="header-right " onClick={hidemenu}>
                <div className="d-flex cart">
                  <Link to={"/Shopping"}>
                    <FaShoppingCart size={20} />
                    <p>0</p>
                  </Link>
                </div>
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