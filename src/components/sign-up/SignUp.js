import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { actions } from "../../redux/actions/users"
import { Link } from "react-router-dom"
import { Form, Button } from "react-bootstrap"


export const SignUp = () => {
    const [state, setState] = useState({
        username: "",
        displayName: "",
        password: "",
    })

    const [toggle, setToggle] = useState(false)

    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(actions.userSignUp(state))
        setToggle(true)
        setState({
            username: "",
            displayName: "",
            password: "",
        })
    }

    const handleChange = (event) => {
        const inputName = event.target.name
        const inputValue = event.target.value
        setState((prevState) => ({ ...prevState, [inputName]: inputValue }))
    }


    return (
        
        <Form onSubmit={handleSubmit}>
            <br />
            <h2>Sign Up</h2>
            <br />
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Choose username" 
                    name="username" 
                    value={state.username}
                    autoFocus 
                    required
                    onChange={handleChange}
                />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Choose password" 
                    name="password"
                    value={state.password}
                    autoFocus
                    required    
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group controlId="formBasicDisplayName">
                <Form.Label>Display Name</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Choose display name" 
                    name="displayName"
                    value={state.displayName}
                    autoFocus
                    required
                    onChange={handleChange}
                />
            </Form.Group>

            <br />

            <Button variant="primary" type="submit">
                Submit
            </Button>

            <br />
            <br />
            <p>Already registered?</p>
            <p>Log in <Link to="/">here</Link>.</p>
                { toggle && 
                    <>
                        <p>Thank you for signing up!</p>
                        <p>Please click <Link to="/">here</Link> to log in and post your first chirp!</p>
                    </>
                }   
        </Form>
    )
}
        // <>
        //     <br />
        //     <h2>Sign Up</h2>
        //     <br />
        //     <form onSubmit={handleSubmit}>
        //         <label htmlFor="username">Username</label>
        //         <br />
        //         <input
        //             type="text"
        //             name="username"
        //             value={state.username}
        //             autoFocus
        //             required
        //             onChange={handleChange}
        //         />
        //         <br />
        //         <br />
        //         <label htmlFor="password">Password</label>
        //         <br />
        //         <input
        //             type="password"
        //             name="password"
        //             value={state.password}
        //             autoFocus
        //             required    
        //             onChange={handleChange}
        //         />
        //         <br />
        //         <br />
        //         <label htmlFor="displayName">Display Name</label>
        //         <br />
        //         <input
        //             type="text"
        //             name="displayName"
        //             value={state.displayName}
        //             autoFocus
        //             required
        //             onChange={handleChange}
        //         />
        //         <br />
        //         <br />
        //         <button type="submit">Submit</button>
        //     </form>
        //     <br />
        //     <p>Already registered?</p>
        //     <p>Log in <Link to="/">here</Link>.</p>
        //     { toggle && 
        //         <>
        //             <p>Thank you for signing up!</p>
        //             <p>Please click <Link to="/">here</Link> to log in and post your first chirp!</p>
        //         </>
        //     }   
        // </>