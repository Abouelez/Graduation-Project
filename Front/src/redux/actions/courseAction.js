import { useInsertDataWithImage } from '../../Hook/useInsertData';
import { GET_ALL_COURSE,GET_COURSE_ID,CREATE_COURSE,ADD_LECTURE,CREATE_SECTION,ACCESS_COURSE_ID, GET_ERROR, } from '../type';
import axios from 'axios';

//get all courses
export const getAllCourses = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:8000/api/courses')
   console.log('all'+response.data.data);
    dispatch({
      type: GET_ALL_COURSE,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

const initialState = {
  courses: [],
  loading: true,
};


//get all courses with pagination using page number
export const getAllCoursesPage = (page) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:8000/api/courses?page=${page}`);
    //console.log(page+response);
      dispatch({
          type: GET_ALL_COURSE,
          payload: response,
      })

  } catch (e) {
      dispatch({
          type: GET_ERROR,
          payload: "Error " + e,
      })
  }
}
//get all Courses with query string
export const getAllCoursesSearch = (word) => async (dispatch) => {
  //console.log(word);
  try {
    const response = await axios.get(`http://localhost:8000/api/courses/filter?${word}`);
   // console.log(response);
    dispatch({

      type: GET_ALL_COURSE,
      payload: response.data, // Only dispatch the 'data' property from the response
      loading: true
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

//get one course
export const getCourse = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:8000/api/courses/${id}`);
   
    dispatch({
      type: GET_COURSE_ID,
      payload: response,
      loading: true
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

export const createCourseInfo = (formData, accessToken) => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:8000/api/courses", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${accessToken}`
      },
      body: formData,
    });
  //  console.log(response);
    const data = await response.json();
    dispatch({
      type: CREATE_COURSE,
      payload: data,
      loading: true
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: `Error ${e}`
    });
  }
};

export const createSection = (formData, accessToken) => async (dispatch) => {
  console.log(formData);
  try {
    const response = await fetch("http://localhost:8000/api/sections", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${accessToken}`
      },
      body: formData,
    });
   // console.log(response);
    const data = await response.json();
    dispatch({
      type: CREATE_SECTION,
      payload: data,
      loading: true
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: `Error ${e}`
    });
  }
};
export const addLecture = (formData, accessToken) => async (dispatch) => {
// console.log(formData, accessToken)
  try {
    const response = await fetch("http://localhost:8000/api/lectures", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${accessToken}`
      },
      body: formData,
    });
    console.log(response);
    const data = await response.json();
    dispatch({
      type: ADD_LECTURE,
      payload: data,
      loading: true
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: `Error ${e}`
    });
  }
};

//access course

export const accessCourse = (id) => async (dispatch, getState) => {
  try {
    const token = localStorage.getItem('token') // Get the access token from the state
    const config = {
      headers: {
        Authorization: `Bearer ${token}` // Include the access token in the request header
      }
    };
    const response = await axios.get(`http://localhost:8000/api/courses/access-content/${id}`, config);
   console.log(response);
    dispatch({
      type: ACCESS_COURSE_ID,
      payload: response,
      loading: true
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};