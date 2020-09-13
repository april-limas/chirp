import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { actions} from "../../redux/actions/users"
import { UserInfo } from "../user-info"
import { Loader } from "../loader"
import { Button, Modal } from "react-bootstrap"


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
            <h2>Look Up User</h2>
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
            </form>
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
                
                
{/* <p>{userError}</p> */}