import React from "react"
import { Link } from "react-router-dom"

export const DeletedUser = () => {
    return (
        <>
            <br />
            <br />
            <p>We're sorry to see you go!</p>
            <p>If you changed your mind, you can click the link below to sign up again.</p>
            <Link to="/sign-up">Sign Up</Link>
        </>
    )
}