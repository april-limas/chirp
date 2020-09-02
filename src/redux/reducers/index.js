import { combineReducers } from "redux";
import { authReducer } from "./auth";
// import { AddMessage } from "../../components";

export default combineReducers({ 
    auth: authReducer,
    // addMessage: addMessageReducer
});
