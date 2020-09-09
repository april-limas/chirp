import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {LikeButton} from '../like-button';


export const MessageItem = ({item}) => {

  const [messageId, setMessageId] = useState({
    messageId: item.id
  })
  
    return (
      <>
        <br />
        <li>{item.username} posted on {item.createdAt.toString()}</li>
        <li><Link to='/'>{item.text}</Link></li>
        <LikeButton messageId={messageId} message={{message: item}}/>
        <br />
        <br />
      </>
    )
  }

  
