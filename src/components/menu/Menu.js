import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { actions } from "../../redux/actions/auth"
import { Nav, NavDropdown, Navbar } from 'react-bootstrap'

export const Menu = () => {
  const isAuthenticated = useSelector((state) => !!state.auth.isAuthenticated);
  const dispatch = useDispatch()
  const logout = () => dispatch(actions.logout())
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">Chirp</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
            {isAuthenticated ? (
              <>
        <Nav className="mr-auto">
          <Nav.Link href="/profiles/:username">Newsfeed</Nav.Link>
          <Nav.Link href="/trending">Trending</Nav.Link>
          <NavDropdown title="Profile" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/profile">About</NavDropdown.Item>
            <NavDropdown.Item href="/edit-profile">Edit Profile</NavDropdown.Item>
            <NavDropdown.Item href="/followers">Followers</NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>
          <Nav.Link href="/search">Search User</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#/" onClick={logout}>
            LogOut
          </Nav.Link>
        </Nav>
              </>
            ) : null }
      </Navbar.Collapse>
    </Navbar>
  )
}


{/* <div id="menu">
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
    </div> */}