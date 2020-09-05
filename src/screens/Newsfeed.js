import React from "react"
import { AddMessage, MenuContainer, MessageList } from "../components"



export const Newsfeed = () => {
    return (
        <>
            <MenuContainer />
            <AddMessage />
            <MessageList />
        </>
    )
}