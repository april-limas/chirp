import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { actions } from "../../redux/actions/users"
import { actions as messageActions } from "../../redux/actions/messages"
import { v4 as uuidv4 } from "uuid"
import { Loader } from "../loader"
import { Link } from "react-router-dom"
import { Media, Jumbotron } from "react-bootstrap"


export const Trending = () => {
    const { messageList } = useSelector(state => state.message)
    const loading = useSelector(state => state.message.messageLoading)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(messageActions.getMessageList())
    }, [])

    const getTrendingChirps = () => {
        let topTenChirps = messageList.sort((a, b) => b.likes.length - a.likes.length).slice(0, 20)
        return topTenChirps
    }


    return (
        <>
            <br />
            <br />
            <h2 style={{textAlign: 'center', color: '#a9a9a9'}}>Trending Chirps</h2>
            <br />
            <ol style={{textAlign: 'center'}}>
                {getTrendingChirps().map((chirp) => (
                     <Jumbotron style={{width: '35%', height: '20%', margin: '30px auto'}}>
                    <Media style={{margin: '20px auto', display: 'block'}}>
                        <img
                            style={{marginBottom: '15px'}}
                            width={150}
                            height={100}
                            className="mr-3"
                            src="https://nas-national-prod.s3.amazonaws.com/styles/hero_mobile/s3/h_a1_7443_5_painted-bunting_julie_torkomian_adult-male.jpg?itok=dMVj7z0b"
                            alt="Generic placeholder"
                        />
                        <Media.Body>
                            <h6><li key={uuidv4()} style={{display: 'block'}}>
                                Chirper: <Link to="/user"
                                    style={{color: '#7d0c92'}}
                                    onClick={() => dispatch(actions.getUserInfo(chirp.username))}>
                                    {chirp.username}</Link>
                                <br />
                                Chirp:<Link to="/message"
                                    style={{color: '#af41c4'}}
                                    onClick={() => dispatch(messageActions.getMessageLinkInfo(chirp.id))}>      {chirp.text}</Link>
                                <br />
                                Hoots: {chirp.likes.length}
                                <br />
                                <br />
                                <br />
                                </li>
                            </h6>
                        </Media.Body>
                    </Media>
                    </Jumbotron>
                ))}
            </ol>
        </>
    )
}
{/* <br />
<h2>Trending Chirps</h2>
<br />
<ol>
    {getTrendingChirps().map((chirp) => (
        <li key={uuidv4()}>
            Chirper: <Link to="/user" 
                onClick={() => dispatch(actions.getUserInfo(chirp.username))}>
                {chirp.username}</Link>
            <br/>
            Chirp:<Link to="/message" 
                onClick={() => dispatch(messageActions.getMessageLinkInfo(chirp.id))}>      {chirp.text}</Link>
            <br/>
            Hoots: {chirp.likes.length}
            <br/>
            <br/>
            <br/>
        </li>
    ))}
</ol>
{ loading && <Loader />} */}