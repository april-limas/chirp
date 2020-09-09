import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { actions } from '../../redux/actions/users';

export const MessageItem = ({item}) => {
  const [ user, setUser ] = useState("")

  const dispatch = useDispatch()

  const handleUserLink = (event) => {
    event.preventDefault()
    setUser(event.target)
    dispatch(actions.getUserInfo(user))
    console.log(user)
  }

    return (
      <>
        <br />
        <li><Link to="/user" /*onClick={handleUserLink}*/>{item.username}</Link> posted on {item.createdAt.toString()}</li>
        <li><Link to="/">{item.text}</Link></li>
        <br />
        <br />
      </>
    )
  }

  
