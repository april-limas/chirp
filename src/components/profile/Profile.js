import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { actions } from "../../redux/actions/users"
import { Loader } from "../loader"


export const Profile = () => {
    const { userInfo, username, userLoading } = useSelector(state => ({
        username: state.auth.username,
        userInfo: state.users.userInfo,
        userLoading: state.users.userLoading
    }))

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actions.getUserInfo(username))
    }, [])


    return (
        <>
            <br/>
            <h2>Profile</h2>
            <br/>
            {
                userInfo.user &&
                    <>
                        <p>Chirper: {userInfo.user.displayName}</p>
                        <p>Username: @{username}</p>
                        <p>{ userInfo.user.about && `About: ${userInfo.user.about}`}</p>
                        <p>Account Created: {userInfo.user.createdAt}</p>
                        <p>Account Updated: {userInfo.user.updatedAt}</p>

                    </>
            }
            <br/>
            { userLoading && <Loader /> }
        </>
    )
}
