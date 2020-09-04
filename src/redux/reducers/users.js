import {
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAILURE
} from '../actions';

const INITIAL_STATE = {
    data: [],
    userLoading: false,
    userError: "",
};

export const userReducer = (state = { ...INITIAL_STATE }, action) => {
    switch (action.type) {
        case GET_USER_REQUEST:
            return {
                ...INITIAL_STATE,
                userLoading: true,
            };
        case GET_USER_SUCCESS:
            return {
                ...INITIAL_STATE,
                data: action.payload,
                userLoading: false,
            };
        case GET_USER_FAILURE:
            return {
                ...INITIAL_STATE,
                userError: action.payload,
                userLoading: false,
            };
        default:
            return state;
    }
};
