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
        console.log({data})
    }, [])

    return (
        <>
            <h2>Profile</h2>
            <p>{username}</p>
            <p>{JSON.stringify(data.user)}</p>
        </>
    );
}