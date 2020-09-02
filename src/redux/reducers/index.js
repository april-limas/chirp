import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { addMessageReducer } from "./addMessage";

export default combineReducers({ 
    auth: authReducer,
    addMessage: addMessageReducer
});
