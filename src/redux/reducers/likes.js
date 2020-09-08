import {
    ADD_LIKE,
    LIKED,
    REMOVE_LIKE,
    LIKE_REMOVED
} from '../actions';


const INITIAL_STATE = {
    like: {
        id: 0,
        username: "",
        messageId: 0,
        createdAt: ""
    },
    statusCode: 0
}

export const likesReducer = (state = { INITIAL_STATE }, action) => {
    switch (action.type) {
        case ADD_LIKE:
            const { statusCode, like } = action.payload
            return {
                ...INITIAL_STATE,
                like: {
                    ...like
                }
            };
        case REMOVE_LIKE:
            return {
                ...INITIAL_STATE,
                statusCode
            }
        default:
            return state;

    }
}