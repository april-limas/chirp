import React, {useState} from 'react';
import { link } from 'react-router-dom';
import { LikeButton } from '../like-button/LikeButton';


export const MessageItem = ({item}) => {

  const [messageId, setMessageId] = useState({
    messageId: item.id
  })
  
    return (
      <>
        <br />
        <li>{item.username} posted on {item.createdAt.toString()}</li>
        <li>{item.text}</li>
        <LikeButton messageId={messageId}/>
        <br />
        <br />
      </>
    )
  }

  
