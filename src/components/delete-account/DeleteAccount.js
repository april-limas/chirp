import React from "react"
import { useDispatch } from "react-redux"
import { actions } from '../../redux/actions/users';
import { actions as authActions } from '../../redux/actions/auth';

export const DeleteAccount = () => {

    const dispatch = useDispatch()

    const handleDeleteUser = () => { 
        dispatch(actions.deleteUserAccount())
        dispatch(authActions.logout(false))
    }
    
    return (
        <>
            <button onClick={handleDeleteUser}>Delete Account</button>
        </>
    )
}