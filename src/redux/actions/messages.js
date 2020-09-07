import api from "../../utils/api";

export const POST_MESSAGE_REQUEST = "POST_MESSAGE_REQUEST"
export const POST_MESSAGE_SUCCESS = "POST_MESSAGE_SUCCESS"
export const POST_MESSAGE_FAILURE = "POST_MESSAGE_FAILURE"
export const MESSAGE_LIST_SUCCESS = "MESSAGE_LIST_SUCCESS"
export const MESSAGE_LIST_FAILURE = "MESSAGE_LIST_FAILURE"
export const ADD_LIKE = "ADD_LIKE"
export const LIKED = 'LIKED'
export const REMOVE_LIKE = 'REMOVE_LIKE'
export const LIKE_REMOVED = 'LIKE_REMOVED'

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

export const addLike = (messadeId) => {
    return {
        type: ADD_LIKE,
        payload: messadeId
    }
}

export const removeLike = (likeId) => {
    return {
        type: REMOVE_LIKE,
        payload: likeId
    }
}


export const likeMessage = (messageId) => async (dispatch, getState) => {
  try {
    const payload = await api.addLike(messageId)
    // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
    dispatch(addLike(payload));
  } finally {
    dispatch({type: LIKED})
  }
}

export const removeLikeFromMessage = (likeId) => async (dispatch, getState) => {
  try {
    const payload = await api.removeLike(likeId)
    // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
    dispatch(removeLike(payload));
  } finally {
    dispatch({type: LIKE_REMOVED})
  }
}


export const postMessage = (message) => async (dispatch, getState) => {
    try {
      dispatch(postMessageRequest());
      const payload = await api.addMessage(message)
      // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
      dispatch(postMessageSuccess(payload));
    } catch (err) {
      dispatch(postMessageFailure(err.message));
    }
  }

export const getMessageList = (username) => async (dispatch, getState) => {
    try {
      dispatch(postMessageRequest());
      const payload = await api.getMessageList(username)
      // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
      dispatch(messageListSuccess(payload));
    } catch (err) {
      dispatch(messageListFailure(err.message));
    }
  }

  export const actions = {
    postMessage,
    getMessageList,
    likeMessage,
    removeLikeFromMessage
  }