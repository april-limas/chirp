import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../redux/actions/messages';
import {LikeButton} from '../like-button';
import {v4 as uuidv4} from 'uuid';

export const Trending = () => {

    const { messageList } = useSelector(state => state.message)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actions.getMessageList())
    }, [])

    const getTrendingKweets = () => {
        let topTenKweets = messageList.sort((a, b) => b.likes.length - a.likes.length).slice(0, 10)
        return topTenKweets
    }



    return (
        <>
            <br />
            <h2>Trending Kweets</h2>
            <ul>
                {getTrendingKweets().map((kweet) => (
                    <li key={uuidv4()}>Username: {kweet.username}
                        <br/>
                        {kweet.text}
                        <br/>
                    Likes: {kweet.likes.length}<br/>
                    <br/><br/></li>
                ))}
            </ul>
        </>
    )
}