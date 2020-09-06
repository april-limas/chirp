import React from "react"
import { AddMessage, MenuContainer, MessageList } from "../components";
import {LikeButton} from '../components/like-button';



export const Newsfeed = () => {
    return (
        <>
            <MenuContainer />
            <AddMessage />
            <MessageList />
        </>
    )
}