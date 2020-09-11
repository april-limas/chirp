import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../redux/actions/messages';

export const Trending = () => {

    const { messageList } = useSelector(state => state.message)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actions.getMessageList())
        // console.log(messageList)
        // getTrendingKweets()
    }, [])

    const getTrendingKweets = () => {
        let topTenKweets = messageList.sort((a, b) => b.likes.length - a.likes.length).slice(0, 10)
        console.log(topTenKweets)
        return topTenKweets
    }



    return (
        <>
            <br />
            <h2>Trending Kweets</h2>
            {getTrendingKweets().map((kweet) => (
                <p>{kweet.username}
                    <br />
                    {kweet.text}
                    <br />
                    Likes: {kweet.likes.length}</p>
            ))}
        </>
    )
}