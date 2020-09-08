import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { userReducer } from "./users";
import { addMessageReducer } from "./messages";

export default combineReducers({ 
    auth: authReducer,
    users: userReducer,
    addMessage: addMessageReducer });

