import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../redux/actions/messages"
import { Loader } from "../loader"

export const AddMessage = () => {
    const [ text, setText ] = useState("")
    const messageLoading = useSelector(state => state.message.messageLoading)

    const dispatch = useDispatch()

    const handleChange = (e) => setText(e.target.value)
    

    const handleAddMessage = (event) => {
        event.preventDefault()
        dispatch(actions.postMessage(text))
        setText("")
    }

    return (
        <>
            <form onSubmit={handleAddMessage}>
                <p>What's on your mind?</p>
                <input type="text" value={text} onChange={handleChange} placeholder="New Message"></input>
                <button type="submit">Post New Message</button>
            </form>
            { messageLoading && <Loader /> }
        </>
    )
}