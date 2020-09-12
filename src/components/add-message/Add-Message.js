import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { actions } from "../../redux/actions/messages"
import { Loader } from "../loader"


export const AddMessage = () => {
    const messageLoading = useSelector(state => state.message.messageLoading)
    
    const [ text, setText ] = useState("")

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
                <p>What do you want to chirp today?</p>
                <input 
                    type="text" 
                    value={text} 
                    onChange={handleChange}>
                </input>
                <br />
                <br />
                <button 
                    type="submit">
                        Post Chirp
                </button>
            </form>
            { messageLoading && <Loader /> }
        </>
    )
}