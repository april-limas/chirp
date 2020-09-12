import React from "react"
import { Link } from "react-router-dom"


export const DeletedUserMsg = () => {

    return (
        <>
            <br />
            <br />
            <h3>Is this goodbye?</h3>
            <br />
            <p>We're sorry to see you go!</p>
            <br />
            <p>If this was an accident, click <Link to="/sign-up">here</Link> to sign up again. 
            </p>
        </>
    )
}