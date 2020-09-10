import {
    USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAILURE,
    REMOVE_USER_DISPLAY,
    GET_FOLLOWERS_SUCCESS,
    GET_FOLLOWERS_FAILURE
} from '../actions';

const INITIAL_STATE = {
    data: [],
    userLoading: false,
    userError: "",
    usersList: []
};

export const userReducer = (state = { ...INITIAL_STATE }, action) => {
    switch (action.type) {
        case USER_REQUEST:
            return {
                ...INITIAL_STATE,
                userLoading: true
            };
        case GET_USER_SUCCESS:
            return {
                ...INITIAL_STATE,
                data: action.payload,
                userLoading: false
            };
        case GET_USER_FAILURE:
            return {
                ...INITIAL_STATE,
                userError: action.payload,
                userLoading: false
            };
        case REMOVE_USER_DISPLAY:
            return {
                ...INITIAL_STATE,
                data: []
            };
        case GET_FOLLOWERS_SUCCESS:
            return {
                ...INITIAL_STATE,
                usersList: action.payload
            };
        case GET_FOLLOWERS_FAILURE:
            return {
                ...INITIAL_STATE,
                userError: action.payload
            }
        default:
            return state;
    }
};
