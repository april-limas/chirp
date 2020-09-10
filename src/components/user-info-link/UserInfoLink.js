import React from "react"
import { useSelector } from "react-redux"


export const UserInfoLink = () => {
    const { user } = useSelector(state => state.users.data)
    return (
        <>
            <br/>
            <h2>User Info</h2>
            <br/>
            {user && 
                <>
                    <p>Display Name: {user.displayName}</p>
                    <p>Username: {user.username}</p>
                    <p>About the User: {user.about}</p>
                    <p>Created Account: {user.createdAt}</p>
                    <p>Last Account Update: {user.updatedAt}</p>
                </>
            }
        </>
    )
}