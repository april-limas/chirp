import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"

export const Home = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col>1 of 2</Col>
                    <Col>
                        <Button style={{position: 'absolute', top: '50px'}} href="/sign-up">Sign Up</Button>
                        <Button href="/log-in" >Log In</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}