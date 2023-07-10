import { useInsertDataWithImage } from '../../Hook/useInsertData';
import { GET_ALL_COURSE,GET_COURSE_ID,CREATE_COURSE, GET_ERROR, } from '../type';
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
    //console.log(response);
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
  console.log(formData);
  try {
    const response = await fetch("http://localhost:8000/api/courses", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${accessToken}`
      },
      body: formData,
    });
    console.log(response);
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