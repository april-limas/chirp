import React, { useState } from "react"
// import { useDispatch } from "react-redux";
// import { actions } from "../../redux/actions/add-message"

export const AddMessage = () => {
    const [text, setText ] = useState("")
    // const dispatch = useDispatch

    const handleOnchange = (e) => (
            setText(e.target.value),
            console.log('this is working')
    )

    const handlePostMessage = (event) => {
        event.preventDefault()
        // dispatch(actions.postMessage)
        setText("")
    }

    return (
        <>
            <form onSubmit={handlePostMessage}>
                <p>What's on your mind?</p>
                <input type="text" value={text} onChange={handleOnchange} placeholder="New Message"></input>
                <button type="submit">Post New Message</button>
            </form>
        </>
    )
}