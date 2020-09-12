import React from "react"
import { useSelector } from "react-redux"


export const MessageLinkInfo = () => {
    const { message } = useSelector(state => state.message.message)
    
    
    return (
        <>
            <br />
            <h2>Chirp Info</h2>
            <br />
            <p>Chirper: {message.username}</p>
            <p>Chirp: {message.text}</p>
            <p>Posted: {message.createdAt}</p>
            <p>Hoots: {message.likes.length}</p>
        </>
    )
}