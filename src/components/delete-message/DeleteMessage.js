import React, {useState, useEffect} from "react"
import { useSelector, useDispatch } from "react-redux"
import { actions } from "../../redux/actions/messages"


export const DeleteMessage = ({message}) => { 
    const user = useSelector(state => state.auth.username)

    const [ isCurrentUser, setIsCurrentUser ] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        if (message.message.username === user) {
            setIsCurrentUser(true)
        }
    }, [])
    
    const handleDeleteMessage = () => {
        dispatch(actions.deleteMessage(message.message.id))
    }


    return (
        <>
            { isCurrentUser && 
                <button 
                onClick={handleDeleteMessage}>
                    Delete Message
                </button>
            }
        </>
    )
}