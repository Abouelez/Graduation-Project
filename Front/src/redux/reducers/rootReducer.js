import {combineReducers} from 'redux'
import categoryReducer from './categoryReducer'
import subCategoryReducer from './subCategoryReducer'
import courseReducer from './courseReducer'
import authReducer from './authReducer'
export default combineReducers ({
    allCourses :courseReducer,
    allCategories :categoryReducer,
    authReducer: authReducer
})