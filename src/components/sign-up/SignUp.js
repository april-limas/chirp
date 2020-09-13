import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { actions } from "../../redux/actions/users"
import { Link } from "react-router-dom"
import { Form, Button, Modal } from "react-bootstrap"
import "./SignUp.css"

export const SignUp = () => {
    const [state, setState] = useState({
        username: "",
        displayName: "",
        password: "",
        // picture: null
    })

    const [ show, setShow ] = useState(false)
    const [ toggle, setToggle ] = useState(false)
    
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(actions.userSignUp(state))
        // dispatch(actions.uploadPhoto(state))
        setToggle(true)
        setShow(true)
        setState({
            username: "",
            displayName: "",
            password: "",
            // picture: null
        })
    }
    
    const handleChange = (event) => {
        const inputName = event.target.name
        const inputValue = event.target.value
        setState((prevState) => ({ ...prevState, [inputName]: inputValue }))
    }

    // const handleSelectPhoto = (event) => {
    //     setState(prevState => ({ 
    //         ...prevState, 
    //         picture: event.target.files[0]
    //     }))
    // }
    
    const handleClose = () => setShow(false);

    return (

        <Form className="formContainer" onSubmit={handleSubmit}>
            <br />
            <h2 className="title">Sign Up</h2>
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
                <Form.Text className="text-muted">
                    Your password must be 8-20 characters long, contain letters and numbers.
                </Form.Text>
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

            {/* <Form.Group controlId="formBasicPhoto">
                <Form.Label>Add Photo</Form.Label>
                <Form.Control
                    type="file"
                    name="photo"
                    value={state.photo}
                    onChange={handleSelectPhoto}
                />
            </Form.Group> */}

            <br />
            
            <Button variant="primary" type="submit">
                Submit
            </Button>

            <br />
            <br />
            <p>Already registered?</p>
            <p>Log in <Link to="/log-in">here</Link>.</p>
            { toggle && show &&
                <>
                    <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Thank you for signing up!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Please click the log in button to post your first chirp!</Modal.Body>
                    <Modal.Footer>
                    <Button 
                        variant="secondary" 
                        onClick={handleClose}>
                        Close
                    </Button>
                    <Button 
                        variant="primary" 
                        href="/log-in">
                        Log In
                    </Button>
                    </Modal.Footer>
                    </Modal>
                </>
            }
        </Form>
    )
}

        {/* <>
             <br />
             <h2>Sign Up</h2>
             <br />
             <form onSubmit={handleSubmit}>
                 <label htmlFor="username">Username</label>
                 <br />
                <input */}
        {/* //             type="text"
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
        //         <input */}
        {/* //             type="password"
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
        //         <input */}
        {/* //             type="text"
        //             name="displayName"
        //             value={state.displayName}
        //             autoFocus
        //             required
        //             onChange={handleChange} */}
        {/* //         />
        //         <br />
        //         <br />
        //         <button type="submit">Submit</button>
        //     </form> */}
        {/* //     <br />
        //     <p>Already registered?</p>
        //     <p>Log in <Link to="/">here</Link>.</p>
        //     { toggle &&  */}
        {/* //         <>
        //             <p>Thank you for signing up!</p>
        //             <p>Please click <Link to="/">here</Link> to log in and post your first chirp!</p>
        //         </>
        //     }   
        // </> */}