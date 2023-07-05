import React, { useState, useEffect } from 'react'
import UseCoursesSearchHook from '../Courses/UseCoursesSearchHook';

const NavbarSearchHook = () => {
    const [courses, total,result, onPress, getCourse]= UseCoursesSearchHook();

    const [searchWord, setSearchWord] = useState('')

    //when user type search word
    const OnChangeSearch = (e) => {
        localStorage.setItem("searchWord", e.target.value)
        setSearchWord(e.target.value)
        
         //console.log(localStorage.getItem("searchWord"));
        // const path = window.location.pathname;  
        // if (path != "/products") {
        //    window.location.href = "/products"
        // }
    }

    useEffect(() => {
        setTimeout(()=>{
            getCourse()
        },1000)
    }, [searchWord])
    return [OnChangeSearch, searchWord]
}

export default NavbarSearchHook