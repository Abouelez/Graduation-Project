import { GET_ALL_COURSE, GET_COURSE_ID,GET_ERROR,ACCESS_COURSE_ID,CREATE_SECTION, ADD_LECTURE,CREATE_COURSE,CREATE_CATEGORY } from '../type'

const inital = {
    courses: [],
    loading: true,
    loading0: true,
    oneCourse:[],
    createCourse:[],
    section:[],
    lecture:[]
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
          case ACCESS_COURSE_ID:
          return {
            oneCourse: action.payload,
            loading: false,
          };
          case CREATE_COURSE:
            return {
              createCourse: action.payload,
                loading0: false,
            }
            case CREATE_SECTION:
            return {
                ...state,
                section: action.payload,
                loading: false,
            }
            case ADD_LECTURE:
              return {
                ...state,
                lecture: action.payload,
                  loading: false,
              }
      default:
        return state;
    }
    
  };
  
  export default courseReducer;