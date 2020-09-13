import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { actions} from "../../redux/actions/users"
import { UserInfo } from "../user-info"
import { Loader } from "../loader"
import { Button, Modal, Jumbotron, Form } from "react-bootstrap"


export const LookUpUser = () => {
    const { user } = useSelector(state => state.users.userInfo)

    const { userLoading, userError } = useSelector(state => ({
        userLoading: state.users.userLoading,
        userError: state.users.userError
    }))

    const [ username, setUsername ] = useState("")

    const [ toggle, setToggle ] = useState(false)

    const [show, setShow] = useState(false)
    
    const dispatch = useDispatch()
    
    const handleChange = (e) => setUsername(e.target.value)
    
    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(actions.getUserInfo(username))
        setShow(true)
        setUsername("")
    }
    
    const handleClose = () => setShow(false);

    return (
        <>
            <Jumbotron style={{float: 'left', width: '20%', marginLeft: '20px', marginTop: '9px'}}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Look Up Username</Form.Label>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control 
                            type="text" 
                            value={username} 
                            onChange={handleChange} 
                        />
                    </Form.Group>
                    
                    <Button 
                        variant="flat" 
                        type="submit"
                        style={{backgroundColor: '#ff803d', color: 'white'}}
                        onClick={() => setToggle(true)}>
                        Submit
                    </Button>
                </Form>
            </Jumbotron>
            { toggle && user && <UserInfo user={user} /> }
            <br />
            { toggle && userError && show &&
            
                <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Whoops...</Modal.Title>
                </Modal.Header>
                <Modal.Body>{userError}</Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            }
            { userLoading && <Loader /> }
        </>
    )
}
                
                


{/* <h2>Look Up User</h2>
<br />
<form onSubmit={handleSubmit}>
    <label htmlFor="username">Username</label>
    <br />
    <input 
        type="text" 
        value={username} 
        onChange={handleChange} 
    />
    <br />
    <br />
    <button 
        type="submit" 
        onClick={() => setToggle(true)}>
            Look Up User
    </button>
</form> */}