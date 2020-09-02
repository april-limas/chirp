import React from "react"
import { useDispatch } from "react-redux";
import { actions } from "../../redux/actions/add-message"

export const AddMessage = () => {
    const dispatch = useDispatch

    const handlePostMessage = (event) => {
        event.preventDefault()
        dispatch(actions.postMessage)
    }

    return (
        <>
            <form>
                <p>What's on your mind?</p>
                <input type="text" placeholder="New Message"></input>
                <button type="submit" handleClick={handlePostMessage}>Post New Message</button>
            </form>
        </>
    )
}