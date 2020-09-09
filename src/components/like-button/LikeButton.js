import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { actions } from '../../redux/actions/auth';
import { likesReducer } from '../../redux/reducers/likes';
import { actions as likeActions } from '../../redux/actions/messages';

export const LikeButton = ({ messageId, message }) => {
    const [state, setState] = useState({
        id: messageId
    })
    
    
    const dispatch = useDispatch()
    
    const addLike = () => {
        console.log(message)
        let userNotFound = true
        message.message.likes.map((like)=>{
            if (like.username === state.auth.username) {
                dispatch(actions.removeLikeFromMessage(like.id))
                userNotFound = false
            }
        })
        if (userNotFound) {
            dispatch(likeActions.likeMessage(state.id.messageId))
        }
        console.log(state.id.messageId)
        
    }

    const id = useSelector(state => state.likes)
    const removeLike = () => {
        console.log(id)
        
    }
   
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