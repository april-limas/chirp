import api from '../../utils/api';

export const USER_REQUEST = 'USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_FAILURE = 'DELETE_USER_FAILURE'
export const REMOVE_USER_DISPLAY = 'REMOVE_USER_DISPLAY'

export const userRequest = () => {
    return {
        type: USER_REQUEST
    }
}

export const getUserSuccess = (data) => {
    return {
        type: GET_USER_SUCCESS,
        payload: data
    }
}
export const getUserFailure = (err) => {
    return {
        type: GET_USER_FAILURE,
        payload: err
    }
}

export const deleteUserSuccess = (data) => {
    return {
        type: DELETE_USER_SUCCESS,
        payload: data
    }
}

export const deleteUserFailure = (err) => {
    return {
        type: DELETE_USER_FAILURE,
        payload: err
    }
}

export const removeUserDisplay = () => {
    return {
        type: REMOVE_USER_DISPLAY
    }
}

const getUserInfo = () => async (dispatch, getState) => {
    try {
        dispatch(userRequest());
        const payload = await api.profile(getState().auth.username);
        console.log(payload)
        dispatch(getUserSuccess(payload));
    } catch (err) {
        dispatch(getUserFailure(err.message));
    }
};

const deleteUserAccount = (username) => async (dispatch, getState) => {
    try {
        dispatch(userRequest());
        const payload = await api.deleteAccount(username);
        // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
        dispatch(deleteUserSuccess(payload));
    } catch (err) {
        dispatch(deleteUserFailure(err.message));
    }
};

export const actions = { 
    getUserInfo, 
    deleteUserAccount, 
    removeUserDisplay
 }
