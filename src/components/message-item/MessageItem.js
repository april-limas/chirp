import React, {useState} from 'react';
import { Link } from 'react-router-dom';


export const MessageItem = ({item}) => {

  const [messageId, setMessageId] = useState({
    messageId: item.id
  })
  
    return (
      <>
        <br />
        <li>{item.username} posted on {item.createdAt.toString()}</li>
        <li><Link>{item.text}</Link></li>
        <br />
        <br />
      </>
    )
  }

  
