import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { actions } from '../../redux/actions/users';

export const MessageItem = ({item}) => {

  const dispatch = useDispatch()

  const handleUserLink = (event) => {
    dispatch(actions.getUserLinkInfo(item.username))
  }

  
    return (
      <>
        <br />
        <li><Link to="/user" onClick={handleUserLink}>
          {item.username}</Link> posted on {item.createdAt.toString()}</li>
        <li><Link to="/">{item.text}</Link></li>
        <br />
        <br />
      </>
    )
  }

  
