import { GET_ALL_CATEGORY, GET_ERROR, CREATE_CATEGORY } from '../type'
import useGetData from '../useGetData' 
//get all category
export const getAllCategory = (limit) => async (dispatch) => {
    try {
        const response = await useGetData(`/api/courses`);
        console.log(response);
        dispatch({
            type: GET_ALL_CATEGORY,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error " + e,
        })
    }
}

// //get all category with pagination
// export const getAllCategoryPage = (page) => async (dispatch) => {
//     try {
//         const response = await useGetData(`api/courses`);
//         dispatch({
//             type: GET_ALL_CATEGORY,
//             payload: response,
//         })

//     } catch (e) {
//         dispatch({
//             type: GET_ERROR,
//             payload: "Error " + e,
//         })
//     }
// }


// //create category 
// export const createCategory = (formData) => async (dispatch) => {
//     try {
//         const response = await useInsertDataWithImage(`/api/v1/categories`, formData);
//         dispatch({
//             type: CREATE_CATEGORY,
//             payload: response,
//             loading: true
//         })

//     } catch (e) {
//         dispatch({
//             type: GET_ERROR,
//             payload: "Error " + e,
//         })
//     }
// }
