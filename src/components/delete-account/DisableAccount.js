import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { actions } from '../../redux/actions/users';

export const DisableAccount = () => {
    const { username, usersList } = useSelector(state => ({
        username: state.auth.username,
        usersList: state.users.usersList
    }))

    const dispatch = useDispatch()

    const handleDeleteUser = () => { 
        dispatch(actions.disableUserAccount(username))
    }
    
    return (
        <>
            <button onClick={handleDeleteUser}>Disable Account</button>
        </>
    )
}