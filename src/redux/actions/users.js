import api from '../../utils/api';

export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';

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

const getUserInfo = (username) => async (dispatch, getState) => {
    try {
        dispatch(getUserRequest());
        const payload = await api.getUserProfileInfo(username);
        // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
          console.log({ payload })
        dispatch(getUserSuccess(payload));
    } catch (err) {
        dispatch(getUserFailure(err.message));
    }
};

export const actions = { getUserInfo, getUserRequest }