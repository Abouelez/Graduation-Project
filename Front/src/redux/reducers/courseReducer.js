import { GET_ALL_COURSE, GET_ERROR, CREATE_CATEGORY } from '../type'

const inital = {
    course: [],
    loading: true,
}
 
const courseReducer = (state = inital, action) => {
    switch (action.type) {
      case GET_ALL_COURSE:
        return {
          ...state,
          courses: action.payload,
          loading: false,
        };
      default:
        return state;
    }
    
  };
  
  export default courseReducer;