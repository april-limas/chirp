<<<<<<< HEAD
import React, {useState} from 'react';
import { link } from 'react-router-dom';
import { LikeButton } from '../like-button/LikeButton';
=======
import React from 'react';
import { Link } from 'react-router-dom';
>>>>>>> 5eea0b95efc6b006f4f97db490a369a1cda5bd98


export const MessageItem = ({item}) => {

  const [messageId, setMessageId] = useState({
    messageId: item.id
  })
  
    return (
      <>
        <br />
        <li>{item.username} posted on {item.createdAt.toString()}</li>
<<<<<<< HEAD
        <li>{item.text}</li>
        <LikeButton messageId={messageId}/>
=======
        <li><Link>{item.text}</Link></li>
>>>>>>> 5eea0b95efc6b006f4f97db490a369a1cda5bd98
        <br />
        <br />
      </>
    )
  }

  
