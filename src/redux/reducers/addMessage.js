// import { POST_MESSAGE_REQUEST, POST_MESSAGE_SUCCESS, POST_MESSAGE_FAILURE } from "../actions"

// const INITIAL_STATE = {
//     loading: false,
//     message: "",
//     error: ""
// }

// const addMessageReducer = (state = INITIAL_STATE, action) => {
//     switch (action.type) {
//         case POST_MESSAGE_REQUEST:
//             return {
//                 ...state,
//                 loading: true
//             }
//         case POST_MESSAGE_SUCCESS:
//             return {
//                 ...state,
//                 loading: false,
//                 message: action.payload,
//                 error: ""
//             }
//         case POST_MESSAGE_FAILURE:
//             return {
//                 ...state,
//                 loading: false,
//                 message: "",
//                 error: action.payload
//             }
//         default:
//             return state
//     }
// }