import {combineReducers} from 'redux'
import categoryReducer from './categoryReducer'
import brandReducer from './brandReducer'
import subCategoryReducer from './subCategoryReducer'
import courseReducer from './courseReducer'

export default combineReducers ({
    allCourses :courseReducer,
    allCategories :categoryReducer,
    allBrands :brandReducer,
})