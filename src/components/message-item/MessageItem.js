import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { LikeButton } from "../like-button"
import { actions } from "../../redux/actions/users"
import { actions as messageActions } from "../../redux/actions/messages"
import { DeleteMessage } from "../delete-message"
import { Toast } from "react-bootstrap"
import "./MessageItem.css"

export const MessageItem = ({ item }) => {

  const [messageId, setMessageId] = useState({
    messageId: item.id
  })

  const dispatch = useDispatch()

  const handleUserLink = () => {
    dispatch(actions.getUserInfo(item.username))
  }

  const handleMessageLink = () => {
    dispatch(messageActions.getMessageLinkInfo(item.id))
  }
 

  return (
    <>
        <Toast className="messageItem">
          <Toast.Header closeButton={false}>
            <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
            <strong 
              className="mr-auto spacing"><Link
              to="/user"
              onClick={handleUserLink}>
              {item.username}
            </Link></strong>
            <small className="date">{item.createdAt}</small>
          </Toast.Header>
          <Toast.Body><Link
            className="spacing"
            to="/message"
            onClick={handleMessageLink}>
            {item.text}
          </Link>
            <br />
            <LikeButton messageId={messageId} message={{ message: item }} />
            <DeleteMessage message={{ message: item }} />
          </Toast.Body>
        </Toast>
    </>
  )
}


{/* <br />
<li><Link 
      to="/user" 
      onClick={handleUserLink}>
      {item.username}
    </Link> posted on {item.createdAt}
</li>
<p><Link 
      to="/message" 
      onClick={handleMessageLink}>
      {item.text}
    </Link>
</p>
<LikeButton messageId={messageId} message={{message:item}}/>
<DeleteMessage message={{message:item}}/>
<br />
<br /> */}
