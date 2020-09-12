import React from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { actions } from "../../redux/actions/users"


export const FollowersItem = ({ user }) => {
  const dispatch = useDispatch()
  
  const handleUserLink = () => {
    dispatch(actions.getUserInfo(user.username))
  }

  return (
    <>
      <br />
      <li><Link 
            to="/user" 
            onClick={handleUserLink}
          > 
          {user.displayName}
          </Link> 
      </li>
      <p>@{user.username}</p>
      <br />
    </>
  )
}
