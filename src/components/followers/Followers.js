import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { actions } from '../../redux/actions/users';


//just a list of followers or also following? Unfollow and follow buttons?
//pull from list of users or just link to each profile?
//some dummy code added until I figure out exactly where things are coming from
//so follower.id and followed.id?

export const Followers = () => {
  const { data } = useSelector(state => ({
    data: state.users.usersList.users
}
));

        console.log(data)
        const dispatch = useDispatch()

        useEffect(()=> {
          dispatch(actions.getFollowers())
        },[]) 

        
      
        return (
        <>
            <h2>Followers</h2>

            <ul>
                {data && data.map(item => (
                <li>{item.displayName}</li>
                ))}
            </ul>
            
      
           
          </>
        )
      }