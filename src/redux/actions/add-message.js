import api from "../../utils/api";

export const POST_MESSAGE_REQUEST = "POST_MESSAGE_REQUEST"
export const POST_MESSAGE_SUCCESS = "POST_MESSAGE_SUCCESS"
export const POST_MESSAGE_FAILURE = "POST_MESSAGE_FAILURE"

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

const postMessage = (message) => async (dispatch, getState) => {
    try {
      dispatch(postMessageRequest());
      const payload = await api.addMessage(message);
      // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
      dispatch(postMessageSuccess(payload));
      console.log({ payload })
    } catch (err) {
      dispatch(postMessageFailure(err.message));
    }
  }

  export const actions = {
    postMessage,
    postMessageRequest
  }