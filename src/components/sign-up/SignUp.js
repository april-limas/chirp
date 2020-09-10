import React, { useState }  from "react"
import { useSelector, useDispatch } from "react-redux"
import { actions } from "../../redux/actions/users";
import { Link } from "react-router-dom"

export const SignUp = () => {
    const [ state, setState ] = useState({
        username: "",
        displayName: "",
        password: "",
    })

    const [ toggle, setToggle ] = useState(false)
    
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(actions.userSignUp(state));
        setToggle(true)
    };


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
                        required
                        onChange={handleChange}
                    />
                </div>
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
                        autoFocus
                        required
                        onChange={handleChange}
                    />
                </div>
                <br/>
                <button type="submit">Submit</button>
            </form>
            <br />
            { toggle && 
                <>
                    <p>Thank you for signing up!</p>
                    <p>Please click <Link to="/">here</Link> to log in and post your first tweet!</p>
                </>
            }   
        </>
    )
}