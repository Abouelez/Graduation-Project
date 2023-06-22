import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

const Slider = () => {
    
    const [scroll, setscroll] = useState(0);
    
    const A = useRef();
    useEffect(() => {
      setscroll(A.current.scrollWidth - A.current.offsetWidth);
    }, [])
    
    const slider_1 = [{ image: "/images/8.png", name: "book_1" },
      { image: "/images/2.jpeg", name: "book_2" }, { image: "/images/3.webp", name: "book_3" }, { image: "/images/4.jpg", name: "book_4" },
      { image: "/images/5.jpg", name: "book_5" }, { image: "/images/6.jpg", name: "book_6" }];

      
  return (
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
  )
}

export default Slider
