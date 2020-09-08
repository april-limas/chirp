import api from '../../utils/api';

export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_FAILURE = 'DELETE_USER_FAILURE'

export const getUserRequest = () => {
    return {
        type: GET_USER_REQUEST
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

const getUserInfo = () => async (dispatch, getState) => {
    try {
        dispatch(getUserRequest());
        const payload = await api.profile(getState().auth.username);
        dispatch(getUserSuccess(payload));
    } catch (err) {
        dispatch(getUserFailure(err.message));
    }
};

const disableUserAccount = (username) => async (dispatch, getState) => {
    try {
        dispatch(getUserRequest());
        const payload = await api.deleteAccount(username);
        // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
          console.log({ payload })
        dispatch(deleteUserSuccess(payload));
    } catch (err) {
        dispatch(deleteUserFailure(err.message));
    }
};

export const actions = { 
    getUserInfo, 
    disableUserAccount }