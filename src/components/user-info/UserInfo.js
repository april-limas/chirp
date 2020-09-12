import React from "react"

export const UserInfo = ({user}) => {

    return (
        <>
            <br/>
            <p>Chirper: {user.displayName}</p>
            <p>Username: @{user.username}</p>
            { user.about && <p>`About: ${user.about}`</p>}
            <p>Account Created: {user.createdAt}</p>
            <p>Account Last Updated: {user.updatedAt}</p>
        </>
    )


}