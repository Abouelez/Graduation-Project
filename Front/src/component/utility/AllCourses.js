import React, { useState } from 'react';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion'
import { BiCategory } from "react-icons/bi";
import "../../css/ReactjsCources.css";
import Data from './data.json';
import CourseCard from './CourseCard';
const AllCourses = () => {

  const [scroll, setscroll] = useState(0);

  const [curentPage, setcurentPage] = useState(1);

  const recordsPerPage = 12;
  const lastIndex = curentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = Data.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(Data.length / recordsPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);


  const A = useRef();
  useEffect(() => {
    setscroll(A.current.scrollWidth - A.current.offsetWidth);
  }, [])
  const nextPage = () => {
    if (curentPage !== nPage) {
      setcurentPage(curentPage + 1)
    }
  }
  const prevPage = () => {
    if (curentPage !== 1) {
      setcurentPage(curentPage - 1)
    }
  }
  const changePage = (id) => {
    setcurentPage(id)
  }
  const slider_1 = [{ image: "/images/8.png", name: "book_1" },
  { image: "/images/2.jpeg", name: "book_2" }, { image: "/images/3.webp", name: "book_3" }, { image: "/images/4.jpg", name: "book_4" },
  { image: "/images/5.jpg", name: "book_5" }, { image: "/images/6.jpg", name: "book_6" }];
  return (
    <>
      <section className='courceshead'>
        <div className='container'>
          <h2 className='h2'>4,432 results for “React”</h2>
        </div>
      </section>


      <section className='slider'>
        <div className='container'>
          <div>
            <motion.div ref={A} className='carousel'>
              <motion.div drag="x" dragConstraints={{ right: 0, left: -scroll }} className='inner-carousel'>
                {slider_1.map((item) => (
                  <motion.div className='item'>
                    <img src={item.image} alt="" />
                    <h2 className='h2'>{item.name}</h2>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>


      <section className='dropdownfilter'>
        <div className='container'>
          <div className='row'>
            <div className='col-9 d-flex justify-content-between align-items-center flex-wrap'>
              <div >
                <div className="dropdown drop dropfilter">
                  <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <BiCategory className="text-dark" size={28} />
                    <span className='me-5 d-inline-block'>Filter</span>
                  </button>
                  <ul className="dropdown-menu drop-menufilter " aria-labelledby="dropdownMenuButton1">
                    <li><a className="dropdown-item " href='1'>Arabic</a> </li>
                    <li><a className="dropdown-item " href='2'> English</a> </li>
                    <li><a className="dropdown-item " href='2'> Free</a></li>
                    <li><a className="dropdown-item " href='2'> Paid</a></li>
                  </ul>
                </div>
              </div>
              <div className='sortby'>
                <div className="dropdown drop dropfilter">
                  <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <BiCategory className="text-dark" size={28} />
                    <span className='me-5 d-inline-block'>Sort by</span>
                  </button>
                  <ul className="dropdown-menu drop-menufilter " aria-labelledby="dropdownMenuButton1">
                    <li><a className="dropdown-item " href='1'>High Price</a> </li>
                    <li><a className="dropdown-item " href='1'>Low Price</a> </li>
                    <li><a className="dropdown-item " href='2'> Most Reviewed</a> </li>
                    <li><a className="dropdown-item " href='2'> Highest Rated</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='courses d-flex justify-content-between align-items-center flex-wrap '>
                {/* {records.map((d) => (

                  <CourseCard />
                ))} */}
              </div>
            </div>
          </div>
          <div className='pagination1'>
            <ul className='pagination'>
              <li className='page-item'>
                <a href='#1' className='page-link' onClick={prevPage}  >perv</a>
              </li>
              {numbers.map((n) => (
                <li className={`page-item ${curentPage === n ? 'active ' : ''} `} >
                  <a href='#1' className='page-link' onClick={() => changePage(n)}  >{n}</a>
                </li>
              ))}
              <li className='page-item'>
                <a href='#1' className='page-link' onClick={nextPage} >Next</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

    </>
  )
}

export default AllCourses;