import React from "react"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { actions } from "../../redux/actions/auth"
import "./Menu.css"

export const Menu = () => {
  const isAuthenticated = useSelector((state) => !!state.auth.isAuthenticated);
  const dispatch = useDispatch()
  const logout = () => dispatch(actions.logout())
  return (
    <div id="menu">
      <h1>Chirp</h1>
      <div id="menu-links">
        {isAuthenticated ? (
          <>
            <Link to="/profiles/:username">Newsfeed</Link>
            <Link to="/trending">Trending</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/followers">Followers</Link>
            <Link to="/search">Search User</Link>
            <Link to="/" onClick={logout}>
              Logout
            </Link>
          </>
        ) : null }
      </div>
    </div>
  )
}
