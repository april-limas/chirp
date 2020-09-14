import React from "react"
import { Link } from "react-router-dom"


export const PageNotFound = () => {

    return (
        <>
            <br />
            <h1 className="center" style={{color: 'white', fontFamily: 'helvetica', fontSize: '200px'}}>404</h1>
            <br />
            <p className="center" style={{color: 'white', fontFamily: 'helvetica', fontSize: '30px'}}>Sorry, we couldn't find that page...</p>
            <br />
            <p className="center" style={{color: 'white', fontFamily: 'helvetica', fontSize: '30px'}}>But Chirp is here to help - maybe one of these will point you in the right direction?</p>
            <ul style={{textAlign: 'center', listStyleType: 'none'}}>
                <li><Link to="/profiles/:username" className="link" style={{fontSize: '20px', position: 'relative', bottom: '0px'}}>Newsfeed</Link></li>
                <li><Link to="/trending" className="link" style={{fontSize: '20px', position: 'relative', bottom: '-20px'}}>Trending Chirps</Link></li>
                <li><Link to="/profile" className="link" style={{fontSize: '20px', position: 'relative', bottom: '-40px'}}>Profile Page</Link></li>
                <li><Link to="/followers" className="link" style={{fontSize: '20px', position: 'relative', bottom: '-60px'}}>Followers</Link></li>
                <li><Link to="/search" className="link" style={{fontSize: '20px', position: 'relative', bottom: '-80px'}}>Look Up A User</Link></li>
            </ul>
        </>
    )
}


