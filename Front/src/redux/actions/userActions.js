import { useInsertDataWithImage } from '../../Hook/useInsertData';
import { ACCESS_COURSE_ID,GET_USER, GET_ERROR, HAS_ACCESS,BE_INSTRUCTOR} from '../type';
import axios from 'axios';


//access course

export const getUser = () => async (dispatch, getState) => {
    try {
      const token = localStorage.getItem('token') // Get the access token from the state
      const config = {
        headers: {
          Authorization: `Bearer ${token}` // Include the access token in the request header
        }
      };
      const response = await axios.get(`http://localhost:8000/api/user-dashboard`, config);
    // console.log(response);
      dispatch({
        type: GET_USER,
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
  //be instructor 
  export const beInstructor = () => async (dispatch, getState) => {
    try {
      const token = localStorage.getItem('token') // Get the access token from the state
      const config = {
        headers: {
          Authorization: `Bearer ${token}` // Include the access token in the request header
        }
      };
      const response = await axios.get(`http://localhost:8000/api/active-instructor-role`, config);
    // console.log(response);
      dispatch({
        type: BE_INSTRUCTOR,
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


  //can access to course content
  export const hasAccess = (id) => async (dispatch, getState) => {
    try {
      const token = localStorage.getItem('token') // Get the access token from the state
      const config = {
        headers: {
          Authorization: `Bearer ${token}` // Include the access token in the request header
        }
      };
      const response = await axios.get(`http://localhost:8000/api/user/has-purchased/${id}`, config);
     console.log(response);
      dispatch({
        type: HAS_ACCESS,
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