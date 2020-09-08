import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { actions } from '../../redux/actions/auth';
import { likesReducer } from '../../redux/reducers/likes';
import { actions as likeActions } from '../../redux/actions/messages';

export const LikeButton = ({ messageId }) => {
    const [state, setState] = useState({
        id: messageId
    })
    
    // Do api call to get message using message id
    const dispatch = useDispatch()
    
    const addLike = () => {
        console.log(state.id.messageId)
        dispatch(likeActions.likeMessage(state.id.messageId))
    }

    const likeId = useSelector(state => state.likes.likeId)
    const removeLike = () => {
        console.log(likeId)
        // dispatch(actions.removeLikeFromMessage(likeId))
    }
    // Do api call to add like object to likes array
    // Update number of likes and display on page
    // save like id in local state
    // Toggle like from on to off using like id
    // Toggle function also updates local state of lide id
    const showMessageId = () => {
        console.log(state.id.messageId)
    }

  
    

    
    return (
        <>
            <button onClick={addLike}>Like</button>
            <button onClick={removeLike}>Remove Like</button>
        </>
    )
}