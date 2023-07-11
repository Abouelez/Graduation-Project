import { GET_USER, HAS_ACCESS,BE_INSTRUCTOR } from '../type';

const initialState = {
  user: [],
  loading: true,
  hasAccess: false,
  beInstructor: false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user:  action.payload,
        loading: false,
      };
      case HAS_ACCESS:
        return { 
          hasAccess:  action.payload,
          loading: false,
        };
        case BE_INSTRUCTOR:
        return { 
            beInstructor:  action.payload,
          loading: false,
        };
    default:
      return state;
  }
};

export default userReducer;