import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from '../../redux/actions/users';


export const Profile = () => {

    const { data, username } = useSelector(state => ({
        username: state.auth.username,
        data: state.users.data
    }
    ));

    console.log(data)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actions.getUserInfo(username))
        console.log({ data })
    }, [])

    return (
        <>
            <h2>Profile</h2>
            <p>Username: {username}</p>
            {
                data.user &&
                <>
                    <p>Display Name: {data.user.displayName}</p>
                    <p>Account Created: {data.user.createdAt}</p>
                    <p>Account Updated: {data.user.updatedAt}</p>

                </>}

        </>
    );
}