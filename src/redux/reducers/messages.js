import { POST_MESSAGE_REQUEST, POST_MESSAGE_SUCCESS, POST_MESSAGE_FAILURE, MESSAGE_LIST_SUCCESS, MESSAGE_LIST_FAILURE } from "../actions"

const INITIAL_STATE = {
    messageLoading: false,
    message: "",
    error: "",
    messageList: []
}

export const addMessageReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case POST_MESSAGE_REQUEST:
            return {
                ...state,
                messageLoading: true
            }
        case POST_MESSAGE_SUCCESS:
            return {
                ...state,
                messageLoading: false,
                message: action.payload,
                error: ""
            }
        case POST_MESSAGE_FAILURE:
            return {
                ...state,
                messageLoading: false,
                message: "",
                error: action.payload
            }
        case MESSAGE_LIST_SUCCESS:
            
        return {
                ...state,
                messageLoading: false,
                messageList: action.payload,
                error: ""
            }
        case MESSAGE_LIST_FAILURE:
            return {
                ...state,
                messageLoading: false,
                messageList: "",
                error: action.payload
            }
        default:
            return state
    }
}