import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/actions/auth";
import Link from "react-router-dom";
import "./signUpForm.css";


const signUp = () => {
    const {loading, error} = useSelector((state) => ({
        loading: state.auth.loading,
        error: state.auth.errors
    }));

    const dispatch = useDispatch(); // to dispatch actions

    const [state, setState] = useState({
        displayname: "", 
        username: "",
        password: ""
    });

    const handleSubmit = (event) => {
        dispatch(actions.submit(state)); // sign up  submit
        event.preventDefault();
    };

    const handleChange = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.value;
        setState((prevState) => ({ ...prevState, [inputName]: inputValue }));
    };
    
    return ( // html/jsx
        <React.Fragment>
            <form id="signup-form" onSubmit={handleSubmit}>
                <label html For="">Display Name</label>
                <input
                    type="text"
                    name="email"
                    value={state.displayname}
                    autoFocus
                    required
                    onChange={handleChange}
                />

                <label html For="username">Username</label>
                <input
                    type="text"
                    name="username"
                    value={state.username}
                    autoFocus
                    required
                    onChange={handleChange}
                />

                <label html For="password">Password</label>
                <input
                    type="text"
                    name="password"
                    value={state.password}
                    autoFocus
                    required
                    onChange={handleChange}
                />

                <button type="submit" disabled={loading}>
                    Submit
                </button>
            </form>

            <Link to="/profile" className="btn btn-link">Profile</Link>
                
        </React.Fragment>
    )

    export default signUp;
}