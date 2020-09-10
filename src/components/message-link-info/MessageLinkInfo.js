import React from 'react';
import { useSelector } from 'react-redux';


export const MessageLinkInfo = () => {
    const {message} = useSelector(state => state.message.message)
    
    return (
        <>
        <br />
        <h2>Tweet Info</h2>
        <br />
        <p>User: {message.username}</p>
        <p>Tweet: {message.text}</p>
        <p>Date Posted: {message.createdAt}</p>
        <p>Likes: {message.likes.length}</p>
        </>
    )
}