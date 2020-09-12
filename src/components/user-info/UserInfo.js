import React from "react"

export const UserInfo = ({user}) => {

    return (
        <>
            <br/>
            <p>Chirper: {user.displayName}</p>
            <p>Username: @{user.username}</p>
            <p>{ user.about && `About: ${user.about}`}</p>
            <p>Account Created: {user.createdAt}</p>
            <p>Account Last Updated: {user.updatedAt}</p>
        </>
    )


}