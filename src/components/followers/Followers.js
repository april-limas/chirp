import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { actions } from '../../redux/actions/users';


export const Followers = () => {
        const {usersList} = useSelector(state=>state.users.users)
        const dispatch = useDispatch()

        useEffect(()=> {
          dispatch(actions.getFollowers())
        },[]) 

        
      
        return (
        <>
            <h2>Followers</h2>
      
            <ul>
              JSON.stringify(usersList)
            </ul>
          </>
        )
      }