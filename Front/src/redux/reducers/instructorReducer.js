import { GET_INSTRUCTOR_COURSES } from '../type';

const initialState = {
  courses: [],
  loading: true,
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INSTRUCTOR_COURSES:
      return {
        ...state,
        courses:  action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default courseReducer;