import React from "react"
import { AddMessage, MenuContainer, MessageList } from "../components";
import {LikeButton} from '../components/like-button';


export const Newsfeed = () => (
    <>
        <MenuContainer />
        <br/>
        <AddMessage />
        <br/>
        <MessageList />
    </>
)
