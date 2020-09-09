import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { userReducer } from "./users";
import { messageReducer } from "./messages";

export default combineReducers({ 
    auth: authReducer,
    users: userReducer,
    message: messageReducer });

