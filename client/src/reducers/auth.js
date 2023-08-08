import { AUTH, LOGOUT } from '../constants/actionTypes';

const authReducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }));

            return { ...state, authData: action?.data };
        case LOGOUT: // When the user logs out, clear the user profile from local storage
            localStorage.clear(); 

            return { ...state, authData: null };
        default:
            return state;
    }
};

export default authReducer;