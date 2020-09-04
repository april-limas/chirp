import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../redux/actions/messages';




export const MessageList = () => {
  const {username, messageList} = useSelector(state => ({
    username: state.auth.username,
    messageList: state.addMessage.messageList
  }))

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(actions.getMessageList(username))
  })



  return (
    <>
    
     {/* <ol>
      {messageList.map(item=>(
        <MessageItem key={item.id}/>
      ))}
    </ol>  */}
    <h1>MessageItem</h1>
      </>
  )
  }

export default MessageList;  
