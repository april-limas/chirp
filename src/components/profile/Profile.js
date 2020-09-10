import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from '../../redux/actions/users';
import { Loader } from "../loader"

export const Profile = () => {

    const { userInfo, username } = useSelector(state => ({
        username: state.auth.username,
        userInfo: state.users.userInfo
    }
    ));

    const userLoading = useSelector(state => state.users.userLoading)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actions.getUserInfo(username))
    }, [])

    return (
        <>
            <br/>
            <h2>Profile</h2>
            <br/>
            <p>Username: {username}</p>
            {
                userInfo.user &&
                <>
                    <p>Display Name: {userInfo.user.displayName}</p>
                    <p>Account Created: {userInfo.user.createdAt}</p>
                    <p>Account Updated: {userInfo.user.updatedAt}</p>

                </>}
            <br/>
            { userLoading && <Loader /> }
        </>
    );
}
