import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { actions } from '../../redux/actions/auth';
import { likesReducer } from '../../redux/reducers/likes';
import { actions as likeActions } from '../../redux/actions/messages';

export const LikeButton = ({ messageId, message }) => {
    
    const user = useSelector(state => state.auth.username)

    const [isLiked, setIsLiked] = useState()

    const dispatch = useDispatch()

    useEffect(() => {
        let userLiked = false
        message.message.likes.map((like)=>{
            if (like.username === user){
                setIsLiked(true)
                userLiked = true
            }
        })
        if (userLiked === false) {
            setIsLiked(false)
        }
    })

    const handleLike = () => {
        let userFound = false
        console.log(message)
        message.message.likes.map((like) => {
            if (like.username === user) {
                dispatch(likeActions.removeLikeFromMessage(like.id))
                userFound = true
            }
        })
        if (userFound === false) {
            console.log(message.message.id)
            dispatch(likeActions.likeMessage(message.message.id))
        }
        console.log(isLiked)
    }



    return (
        <>
            <button onClick={handleLike}>Like</button>
        </>
    )
}