import React from "react"
import { useSelector } from "react-redux"


export const UserInfoLink = () => {
    const { user } = useSelector(state => state.users.userInfo)


    return (
        <>
            <br/>
            <h2>User Info</h2>
            <br/>
            { user && 
                <>
                    <p>Chirper: {user.displayName}</p>
                    <p>Username: @{user.username}</p>
                    { user.about && <p>`About: ${user.about}`</p>}
                    <p>Created Account: {user.createdAt}</p>
                    <p>Account Updated: {user.updatedAt}</p>
                </>
            }
        </>
    )
}