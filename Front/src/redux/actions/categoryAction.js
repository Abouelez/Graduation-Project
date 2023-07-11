// Import action type constants
import { GET_ALL_CATEGORY, GET_ERROR, CREATE_CATEGORY } from '../type';

// Import dependencies
import axios from 'axios'; 

// Action creator function to get all categories
export const getAllCategory = () => async (dispatch) => {
  try {
    // Make a GET request to the backend API to get all categories
    const response = await axios.get('http://localhost:8000/api/categories');
    //console.log(response);
    // Dispatch an action to the Redux store with the categories data
    dispatch({
      type: GET_ALL_CATEGORY,
      payload: response.data,
    });
} catch (e) {
    // Dispatch an action to the Redux store with the error message
    dispatch({
        type: GET_ERROR,
        payload: "Error " + e,
    });
}
};