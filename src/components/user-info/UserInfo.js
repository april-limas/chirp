import React from "react"

export const UserInfo = ({user}) => {
    return (
        <>
            <br/>
            <p>Username: {user.username}</p>
            <p>Display Name: {user.displayName}</p>
            <p>About The User: {user.about}</p>
            <p>Account Created: {user.createdAt}</p>
            <p>Account Last Updated: {user.updatedAt}</p>
        </>
    )


}