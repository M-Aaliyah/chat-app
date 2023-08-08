import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData, history) => async (dispatch) => {
    console.log('signin');
    try {
        console.log('signin1.5');
        const { data } = await api.signIn(formData);
        console.log('signin2');
        dispatch({ type: AUTH, data });
        console.log('signin3');

        history.push('/');
    } catch (error) {
        console.log(error.message);
    }
};

export const signup = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);

        dispatch({ type: AUTH, data });

        history.push('/');
    } catch (error) {
        console.log(error);
    }
};