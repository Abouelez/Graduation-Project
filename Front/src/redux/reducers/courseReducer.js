import { GET_ALL_COURSE, GET_COURSE_ID,GET_ERROR, CREATE_COURSE,CREATE_CATEGORY } from '../type'

const inital = {
    courses: [],
    loading: true,
    oneCourse:[],
}
 
const courseReducer = (state = inital, action) => {
    switch (action.type) {
      case GET_ALL_COURSE:
        return {
          ...state,
          courses: action.payload,
          loading: false,
        };
        case GET_COURSE_ID:
          return {
            oneCourse: action.payload,
            loading: false,
          };
          case CREATE_COURSE:
            return {
                ...state,
                courses: action.payload,
                loading: false,
            }
      default:
        return state;
    }
    
  };
  
  export default courseReducer;