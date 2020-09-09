import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { actions } from '../../redux/actions/users';
import { actions as messageActions } from '../../redux/actions/messages';


export const MessageItem = ({item}) => {

  const dispatch = useDispatch()

  const handleUserLink = (event) => {
    dispatch(actions.getUserLinkInfo(item.username))
  }

  const handleMessageLink = (event) => {
    dispatch(messageActions.getMessageLinkInfo(item.id))
    
  }

  
    return (
      <>
        <br />
        <li><Link to="/user" onClick={handleUserLink}>
          {item.username}</Link> posted on {item.createdAt.toString()}</li>
        <li><Link to="/message" onClick={handleMessageLink}>{item.text}</Link></li>
        <br />
        <br />
      </>
    )
  }

  
