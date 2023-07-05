import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses, getAllCoursesSearch } from '../../redux/actions/courseAction';

const UseCoursesSearchHook = () => {

    const dispatch = useDispatch();
    const getCourse = async () => {
        getStorge();
        sortData();

        await dispatch(getAllCoursesSearch(`keyword=${word}&min=20&max=1000&${sort}&limit=10`))
    }
    useEffect(() => {
        getCourse()
    }, [])

    const allCourses = useSelector(state => state.allCourses);

    let courses = []; let total = 0; let result = {};

    if (allCourses && allCourses.courses && allCourses.courses.data) {
        courses = allCourses.courses.data;
    }
    else
        courses = []
    if (allCourses && allCourses.courses && allCourses.courses.meta) {
        result = allCourses.courses.meta.total
        total = allCourses.courses.meta.last_page
    }
    else {
        total = 0
        result = 0
    }

    //when click pagination
    const onPress = async (page) => {
        sortData();
        getStorge()
        await dispatch(getAllCoursesSearch(`keyword=${word}&min=20&max=1000&${sort}&limit=10&page=${page}`))
    }
    let word = ' '
    const getStorge = () => {
        if (localStorage.getItem("searchWord") != null)
            word = localStorage.getItem("searchWord")
    }
    let sortType = "", sort = ' ';
    ///when user choose sort type
    const sortData = () => {
        if (localStorage.getItem("sortType") !== null)

            sortType = localStorage.getItem("sortType")

        if (sortType === "hiegher")
            sort = " "
        else if (sortType === "lower")
            sort = "order=asc"
    }
    return [courses, total, result, onPress, getCourse]
}
export default UseCoursesSearchHook
