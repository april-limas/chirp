import React, { useState }  from "react"
import { useSelector, useDispatch } from "react-redux"
import { actions } from "../../redux/actions/users";

export const SignUp = () => {
    const [ state, setState ] = useState({
        username: "",
        displayName: "",
        password: "",
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(actions.userSignUp(state));
      };

    const dispatch = useDispatch()

    const handleChange = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.value;
        setState((prevState) => ({ ...prevState, [inputName]: inputValue }));
      };


    return (
        <>
            <h2>Sign Up</h2>
            <br />
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <div>
                    <input
                        type="text"
                        name="username"
                        value={state.username}
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