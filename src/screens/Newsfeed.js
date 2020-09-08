import React from "react"
import { AddMessage, MenuContainer, MessageList, LookUpUser } from "../components"



export const Newsfeed = () => {
    return (
        <>
            <MenuContainer />
            <AddMessage />
            <LookUpUser />
            <MessageList />
        </>
    )
}