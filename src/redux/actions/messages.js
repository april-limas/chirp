import api from "../../utils/api";

export const POST_MESSAGE_REQUEST = "POST_MESSAGE_REQUEST"
export const POST_MESSAGE_SUCCESS = "POST_MESSAGE_SUCCESS"
export const POST_MESSAGE_FAILURE = "POST_MESSAGE_FAILURE"
export const MESSAGE_LIST_SUCCESS = "MESSAGE_LIST_SUCCESS"
export const MESSAGE_LIST_FAILURE = "MESSAGE_LIST_FAILURE"

export const postMessageRequest = () => {
    return {
        type: POST_MESSAGE_REQUEST
    }
}

export const postMessageSuccess = (message) => {
    return {
        type: POST_MESSAGE_SUCCESS,
        payload: message
    }
}

export const postMessageFailure = (error) => {
    return {
        type: POST_MESSAGE_FAILURE,
        payload: error
    }
  }
export const messageListSuccess = (messageList) => {
    return {
        type: MESSAGE_LIST_SUCCESS,
        payload: messageList
      }
    }
export const messageListFailure = (error) => {
    return {
        type: MESSAGE_LIST_FAILURE,
        payload: error
      }

}

export const postMessage = (message) => async (dispatch, getState) => {
    try {
      dispatch(postMessageRequest());
      const payload = await api.addMessage(message)
      dispatch(postMessageSuccess(payload));
      const newPayload = await api.getMessageList()
      dispatch(messageListSuccess(newPayload))
    } catch (err) {
      dispatch(postMessageFailure(err.message));
    }
  }

export const getMessageList = () => async (dispatch, getState) => {
    try {
      dispatch(postMessageRequest());
      const payload = await api.getMessageList()
      // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
      dispatch(messageListSuccess(payload));
    } catch (err) {
      dispatch(messageListFailure(err.message));
    }
  }

  export const actions = {
    postMessage,
    getMessageList
  }