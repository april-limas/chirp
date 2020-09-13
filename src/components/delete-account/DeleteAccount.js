import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { actions } from "../../redux/actions/users"
import { actions as authActions } from "../../redux/actions/auth"
import { useHistory, Link } from "react-router-dom"
import { Modal, Button } from "react-bootstrap"



export const DeleteAccount = () => {
    const { username } = useSelector(state => state.auth.username)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const dispatch = useDispatch()
    
    const history = useHistory()

    const handleDeleteUser = () => {
        dispatch(actions.deleteUserAccount(username))
        dispatch(authActions.logout(false))
        history.push("/delete");
    }

    const handleClick = () => {
        setShow(true)
    }


    return (
        <>
            <Link
                style={{ marginLeft: '20px', color: 'gray' }}
                onClick={handleClick}>
                Delete Account
            </Link>
            { show &&
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                <Modal.Header closeButton>
                    <Modal.Title>Is this goodbye?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <strong>This action is permanent.</strong> Are you sure you don't want to reconsider?
            </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
            </Button>
                        <Button variant="primary" onClick={handleDeleteUser}>Delete</Button>
                    </Modal.Footer>
                </Modal>
            }
        </>
    )
}
