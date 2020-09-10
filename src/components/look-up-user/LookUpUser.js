import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { actions, removeUserDisplay} from "../../redux/actions/users"
import { UserInfo } from "../user-info";
import { Loader } from "../loader"


export const LookUpUser = () => {
    const [ username, setUsername ] = useState("")
    const [ toggle, setToggle ] = useState(false)

    const { user } = useSelector(state => state.users.data)
    const userLoading = useSelector(state => state.users.userLoading)

    const dispatch = useDispatch()

    const handleChange = (e) => setUsername(e.target.value)
    
        const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(actions.getUserInfo(username))
        setUsername("")
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={handleChange} placeholder="Username"/>
                <button type="submit" onClick={() => setToggle(true)}>Look Up User</button>
            </form>
            { toggle && user && <UserInfo user={user} /> }
            { userLoading && <Loader /> }
        </>
    )
}
