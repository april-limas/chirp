import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../redux/actions/messages';
//import { MessageItem } from '../message-item';

const MessageItem = ({item}) => {
  return (
    <>
    <li>{item.text}</li>
    </>
  )
}


export const MessageList = () => {
  const {username, messageList} = useSelector(state => ({
    username: state.auth.username,
    messageList: state.addMessage.messageList
  }))

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(actions.getMessageList(username))
    console.log(messageList)
  }, [])



  return (
    <>
    {messageList && 
      <>
     <ul>
      {messageList.messages.map(item=>(
        <MessageItem item= {item} key={item.id}/>
        ))}
    </ul> 
        </>
}
      </>
  )
  }


