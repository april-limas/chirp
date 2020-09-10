import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { actions } from '../../redux/actions/messages';

export const DeleteMessage = ({message}) => {

    const [isCurrentUser, seIsCurrentUser] = useState()
    const user = useSelector(state => state.auth.username)
    const dispatch = useDispatch()

    useEffect(() => {
        if (message.message.username === user) {
            seIsCurrentUser(true)
        }
    })
    
    const handleDeleteMessage = () => {
        dispatch(actions.deleteMessage(message.message.id))
    }

    return (
        <>
        {isCurrentUser ? 
        <button onClick={handleDeleteMessage}>Delete Message</button>
        : null}
        </>
    )
}