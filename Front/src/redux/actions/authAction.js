import { useInsertData } from '../../Hook/useInsertData';
import { CREATE_NEW_USER , LOGIN_USER } from '../type'
import axios from 'axios';

//create new user 
export const createNewUser = (data) => async (dispatch) => {
    try {
        const response = await useInsertData(`api/auth/register`, data);
        console.log(response);
        dispatch({
            type: CREATE_NEW_USER,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: CREATE_NEW_USER,
            payload: e.response,
        })
    }
}

//login  user 
export const loginUser = (data) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/auth/login`, data);
       // console.log(response);
        dispatch({
            type: LOGIN_USER,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: LOGIN_USER,
            payload: e.response,
        })
    }
}