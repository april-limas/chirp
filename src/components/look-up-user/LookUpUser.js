import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { actions} from "../../redux/actions/users"
import { UserInfo } from "../user-info";
import { Loader } from "../loader"


export const LookUpUser = () => {
    const [ username, setUsername ] = useState("")
    const [ toggle, setToggle ] = useState(false)

    const { user } = useSelector(state => state.users.userInfo)
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
            <h2>Look Up User</h2>
            <br />
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <div>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={handleChange} 
                    />
                </div>
                <br />
                <div>
                    <button 
                        type="submit" 
                        onClick={() => setToggle(true)}>
                            Look Up User
                    </button>
                </div>
            </form>
            { toggle && user && <UserInfo user={user} /> }
            { userLoading && <Loader /> }
        </>
    )
}
