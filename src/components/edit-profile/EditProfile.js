import React, { useState }  from "react"
import { useSelector, useDispatch } from "react-redux"
import { actions } from "../../redux/actions/users";

export const EditProfile = () => {
    const { userInfo, username } = useSelector(state => ({
        username: state.auth.username,
        userInfo: state.users.userInfo
    }
    ));

    const [ state, setState ] = useState({
        username: username,
        password: "",
        about: "",
        displayName: ""
    })

    

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
                <label htmlFor="password">Password</label>
                <div>
                    <input
                        type="text"
                        name="password"
                        value={state.password}
                        autoFocus
                        onChange={handleChange}
                    />
                </div>
                <label htmlFor="displayName">Display Name</label>
                <div>
                    <input
                        type="text"
                        name="displayName"
                        value={state.displayName}
                        // placeholder={userInfo.user.displayName}
                        autoFocus
                        onChange={handleChange}
                    />
                </div>
                <label htmlFor="about">About</label>
                <div>
                    <input
                        type="text"
                        name="about"
                        value={state.about}
                        // placeholder={userInfo.user.about}
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