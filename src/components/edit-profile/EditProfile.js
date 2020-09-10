import React, { useState }  from "react"
import { useSelector, useDispatch } from "react-redux"
import { actions } from "../../redux/actions/users";

export const EditProfile = () => {
    const [ state, setState ] = useState({
        username: "",
        password: "",
        about: "",
        displayName: ""
    })

    const { userInfo, username } = useSelector(state => ({
        username: state.auth.username,
        userInfo: state.users.userInfo
    }
    ));

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(actions.editUserProfile(state));
      };

    const dispatch = useDispatch()

    const handleChange = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.value;
        setState((prevState) => ({ ...prevState, [inputName]: inputValue }));
      };


    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <div>
                    <input
                        type="text"
                        name="username"
                        value={state.username}
                        placeholder={username}
                        autoFocus
                        onChange={handleChange}
                    />
                </div>
                <label htmlFor="username">Password</label>
                <div>
                    <input
                        type="text"
                        name="username"
                        value={state.password}
                        autoFocus
                        onChange={handleChange}
                    />
                </div>
                <label htmlFor="username">Display Name</label>
                <div>
                    <input
                        type="text"
                        name="username"
                        value={state.displayName}
                        placeholder={userInfo.user.displayName}
                        autoFocus
                        onChange={handleChange}
                    />
                </div>
                <label htmlFor="username">About</label>
                <div>
                    <input
                        type="text"
                        name="username"
                        value={state.about}
                        placeholder={userInfo.user.about}
                        autoFocus
                        onChange={handleChange}
                    />
                </div>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}