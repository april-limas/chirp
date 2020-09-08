import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { actions } from "../../redux/actions/users"

export const LookUpUser = () => {
    const { username, setUsername } = useState("")

    const { data } = useSelector(state => state.users.data)

    const dispatch = useDispatch()

    const handleChange = (e) => {
        setUsername(e.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(actions.getUserInfo(username))
        setUsername("")
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" value={username} onChange={handleChange} placeholder="Username"/>
            <button type="submit">Look Up User</button>
        </form>
        {/* { data.user && <p>{data.user.displayName}</p>} */}
        </>
    )
}