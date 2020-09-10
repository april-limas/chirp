import React, { useState }  from "react"
import { useSelector, useDispatch } from "react-redux"
import { actions } from "../../redux/actions/users";


export const EditProfile = () => {
    const { userInfo, username, userLoading } = useSelector(state => ({
        username: state.auth.username,
        userInfo: state.users.userInfo,
        userLoading: state.users.userLoading
    }
    ));

    const [ state, setState ] = useState({
        username: username,
        password: "",
        about: "",
        displayName: ""
    })

    const [ toggle, setToggle ] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(actions.editUserProfile(state));
        setToggle(true)
        setState((prevState) => ({
            ...prevState, 
            password: "",
            about: "",
            displayName: ""
        }))
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
                        type="password"
                        name="password"
                        value={state.password}
                        autoFocus
                        required
                        onChange={handleChange}
                    />
                </div>
                <label htmlFor="displayName">Display Name</label>
                <div>
                    <input
                        type="text"
                        name="displayName"
                        value={state.displayName}
                        placeholder={ userLoading ? null : userInfo.user.displayName}
                        autoFocus
                        required
                        onChange={handleChange}
                    />
                </div>
                <label htmlFor="about">About</label>
                <div>
                    <input
                        type="text"
                        name="about"
                        value={state.about}
                        placeholder={ userLoading ? null : userInfo.user.about}
                        autoFocus
                        required
                        onChange={handleChange}
                    />
                </div>
                <br/>
                <button type="submit">Submit</button>
                <br />
                <br />
                { toggle && <p>Your profile has been updated.</p>}
            </form>
        </>
    )
}