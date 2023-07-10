import { GET_INSTRUCTOR_COURSES,GET_ERROR } from '../type';
import axios from 'axios';

export const getInstructorCourses = () => async (dispatch) => {
  try {
    const accessToken = localStorage.getItem('token');
    const response = await axios.get('http://localhost:8000/api/instructor-dashboard', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      }
    });
    //console.log(response.data);
    dispatch({
      type: GET_INSTRUCTOR_COURSES,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: GET_ERROR,
      payload: `Error ${error}`,
    });
  }
};