import React from "react"
import { useSelector } from "react-redux"
import { Card } from "react-bootstrap"

export const MessageLinkInfo = () => {
    const { message } = useSelector(state => state.message.message)


    return (
        <>
            <br />
            <h2 style={{textAlign: 'center'}}>Chirp Info</h2>
            <br />
            <Card className="profileCard">
                <Card.Img variant="top" src="https://nas-national-prod.s3.amazonaws.com/styles/hero_mobile/s3/h_a1_7443_5_painted-bunting_julie_torkomian_adult-male.jpg?itok=dMVj7z0b" />
                <Card.Body>
                    <Card.Title>Chirper: {message.username}</Card.Title>
                    <Card.Text>Chirp: {message.text}</Card.Text>
                    <Card.Text>Posted: {message.createdAt}</Card.Text>
                    <Card.Text>Hoots: {message.likes.length}</Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}
