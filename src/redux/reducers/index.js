import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { addMessageReducer } from "./messages";

export default combineReducers({ 
    auth: authReducer,
    addMessage: addMessageReducer
});
