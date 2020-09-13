import React from "react"
import { Card } from "react-bootstrap"

export const UserInfo = ({ user }) => {
    

    return (
        <>
            <Card style={{ width: '28rem', margin: '0 auto', position: 'absolute', bottom: '130px', left: '470px'  }}>
                <Card.Img variant="top" src="https://nas-national-prod.s3.amazonaws.com/styles/hero_mobile/s3/h_a1_7443_5_painted-bunting_julie_torkomian_adult-male.jpg?itok=dMVj7z0b" />
                <Card.Body>
                    <Card.Title>{user.displayName}</Card.Title>
                    <Card.Text>@{user.username}</Card.Text>
                    <Card.Text>{ user.about && `About: ${user.about}`}</Card.Text>
                    <Card.Text>Created: {user.createdAt}</Card.Text>
                    <Card.Text>Updated: {user.updatedAt}</Card.Text>
                </Card.Body>
            </Card>

        </>
    )


}
{/* <br/>
<p>Chirper: {user.displayName}</p>
<p>Username: @{user.username}</p>
<p>{ user.about && `About: ${user.about}`}</p>
<p>Account Created: {user.createdAt}</p>
<p>Account Last Updated: {user.updatedAt}</p> */}