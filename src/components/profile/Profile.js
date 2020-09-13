import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { actions } from "../../redux/actions/users"
import { Loader } from "../loader"
import { Card, Button} from "react-bootstrap"
import { Link } from "react-router-dom"
import "./Profile.css"


export const Profile = () => {
    const { userInfo, username, userLoading } = useSelector(state => ({
        username: state.auth.username,
        userInfo: state.users.userInfo,
        userLoading: state.users.userLoading
    }))

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actions.getUserInfo(username))
    }, [])


    return (
        <>
            <br />
            <h2 className="profile">Profile</h2>
            <br />
            {
                userInfo.user &&
                <>
                    <Card className="profileCard">
                        <Card.Img variant="top" src="https://nas-national-prod.s3.amazonaws.com/styles/hero_mobile/s3/h_a1_7443_5_painted-bunting_julie_torkomian_adult-male.jpg?itok=dMVj7z0b" />
                        <Card.Body>
                            <Card.Title>Chirper: {userInfo.user.displayName}</Card.Title>
                            <Card.Text>Username: @{username}</Card.Text>
                            <Card.Text>{ userInfo.user.about && `About: ${userInfo.user.about}`}</Card.Text>
                            <Card.Text>Created: {userInfo.user.createdAt}</Card.Text>
                            <Card.Text>Updated: {userInfo.user.updatedAt}</Card.Text>
                            <Button variant="secondary" href="/edit-profile">Edit Profile</Button>
                        </Card.Body>
                    </Card>
                </>
            }
            <br />
            
            { userLoading && <Loader />}
        </>
    )
}
