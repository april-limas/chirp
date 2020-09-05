import React from 'react';
import { link } from 'react-router-dom';


export const MessageItem = ({item}) => {
    return (
      <>
        <br />
        <li>{item.username} posted on {item.createdAt.toString()}</li>
        <li>{item.text}</li>
        <br />
        <br />
      </>
    )
  }

  
