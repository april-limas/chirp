import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { userReducer } from "./users";
import { addMessageReducer } from "./messages";
import { likesReducer } from "./likes";

export default combineReducers({ 
    auth: authReducer,
    users: userReducer,
    addMessage: addMessageReducer,
    likes: likesReducer
});

