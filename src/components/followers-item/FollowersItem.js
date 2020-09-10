import React from "react";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actions } from '../../redux/actions/users';


export const FollowersItem = ({ user }) => {
  
  const dispatch = useDispatch()
  
  const handleUserLink = (event) => {
    dispatch(actions.getUserInfo(user.username))
  }

  return (
    <>
      <br />
      <li>Display Name:<Link to="/user" onClick={handleUserLink}> {user.displayName}</Link> </li>
      <li>User Name: {user.username}</li>
      <br />
      <br />
    </>
  );
};
