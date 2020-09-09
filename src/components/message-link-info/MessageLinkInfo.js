import React from 'react';
import { useSelector } from 'react-redux';


export const MessageLinkInfo = () => {
    const {message}=useSelector(state=>state.message.message)
    console.log({message})
    return (
        <>
        <p>User: {message.username}</p>
        <p>Tweet: {message.text}</p>
        <p>Date posted: {message.createdAt}</p>
        <p>Likes: {message.likes.length}</p>
        </>
    )
}