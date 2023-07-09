import {combineReducers} from 'redux'
import categoryReducer from './categoryReducer'
import subCategoryReducer from './subCategoryReducer'
import courseReducer from './courseReducer'
import instructorReducer from './instructorReducer'
import authReducer from './authReducer'
export default combineReducers ({
    allCourses :courseReducer,
    allCategories :categoryReducer,
    authReducer: authReducer,
    instructor:instructorReducer
})