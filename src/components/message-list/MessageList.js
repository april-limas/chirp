import React, { useEffect } from "react";
//import { useSelector, useDispatch } from 'react-redux';
//import { actions } from '../../redux/actions/messages';
//import {v4} from "uuid";


//how does this interact with messageList?
//Is the below code more accurate for messagelist?
export const MessageList = () => {
  // const {username, tweetList} = useSelector(state => ({
  //   username: state.auth.username,
  //   tweetList: state.messages.tweetList
  // })

  // const dispatch=useDispatch

  // useEffect(()=>{
  //   dispatch(actions.getMessageList(username))
  // })


  
  return (
    <>
    
     {/* <ol>
      {tweetList.map(item=>(
        <MessageItem key={id}/>
      ))}
    </ol>  */}
    <h1>MessageItem</h1>
      </>
  )
  }

export default MessageList;  
