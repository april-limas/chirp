import {
    ADD_LIKE,
    LIKED,
    REMOVE_LIKE,
    LIKE_REMOVED
} from '../actions';


const INITIAL_STATE = {
    id: 0,
    username: "",
    messageId: 0,
    createdAt: "",
    likeId: 0
}

export const likesReducer = (state = { INITIAL_STATE }, action) => {
    switch (action.type) {
        case ADD_LIKE:
            const { id, username, messageId, createdAt } = action.payload
            return {
                ...INITIAL_STATE,
                id,
                username,
                messageId,
                createdAt
            };
        case REMOVE_LIKE:
            return {
                ...INITIAL_STATE,
                
            }
        default:
            return state;

    }
}