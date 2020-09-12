import React from "react"
import { Link } from "react-router-dom"

export const DeletedUserMsg = () => {
    return (
        <>
            <br />
            <p>Is this goodbye?</p>
            <p>We're sorry to see you go!</p>
            <p>If this was an accident, click <Link to="/sign-up">here</Link> to sign up again. </p>
            
            
        </>
    )
}