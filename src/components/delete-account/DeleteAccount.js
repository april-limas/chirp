import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { actions } from "../../redux/actions/users"
import { actions as authActions } from "../../redux/actions/auth"
import { useHistory } from "react-router-dom"


export const DeleteAccount = () => {
    const { username } = useSelector(state => state.auth.username)

    const dispatch = useDispatch()
    const history = useHistory()

    const handleDeleteUser = () => { 
        dispatch(actions.deleteUserAccount(username))
        dispatch(authActions.logout(false))
        history.push("/delete");
    }
    

    return (
        <>
            <button 
                onClick={handleDeleteUser}>
                    Delete Account
            </button>
            
        </>
    )
}