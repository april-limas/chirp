import React from "react"
import { useSelector } from "react-redux"
import { Card } from "react-bootstrap"


export const UserInfoLink = () => {
    const { user } = useSelector(state => state.users.userInfo)


    return (
        <>
            <br/>
            <h2 style={{textAlign: 'center'}}>Chirper Info</h2>
            <br/>
            { user && 
                <>
                <Card className="profileCard">
                        <Card.Img variant="top" src="https://nas-national-prod.s3.amazonaws.com/styles/hero_mobile/s3/h_a1_7443_5_painted-bunting_julie_torkomian_adult-male.jpg?itok=dMVj7z0b" />
                        <Card.Body>
                            <Card.Title>Chirper: {user.displayName}</Card.Title>
                            <Card.Text>Username: @{user.username}</Card.Text>
                            <Card.Text>{ user.about && `About: ${user.about}`}</Card.Text>
                            <Card.Text>Created: {user.createdAt}</Card.Text>
                            <Card.Text>Updated: {user.updatedAt}</Card.Text>
                        </Card.Body>
                    </Card>
                </>
            }
        </>
    )
}
