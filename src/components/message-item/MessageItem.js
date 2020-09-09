import React from 'react';
import { Link } from 'react-router-dom';


export const MessageItem = ({item}) => {
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

  
