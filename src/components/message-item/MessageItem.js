import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { LikeButton } from '../like-button';
import { useSelector, useDispatch } from "react-redux";
import { actions } from '../../redux/actions/users';
import { actions as messageActions } from '../../redux/actions/messages';
import {DeleteMessage } from '../delete-message';


export const MessageItem = ({item}) => {

  const [messageId, setMessageId] = useState({
    messageId: item.id
  })
  const dispatch = useDispatch()

  const handleUserLink = (event) => {
    dispatch(actions.getUserInfo(item.username))
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
        <LikeButton messageId={messageId} message={{message:item}}/>
        <DeleteMessage message={{message:item}}/>
        <br />
        <br />
      </>
    )
  }

  
