import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


//just a list of followers or also following? Unfollow and follow buttons?
//pull from list of users or just link to each profile?
//some dummy code added until I figure out exactly where things are coming from


export const FollowersList = () => {

        
        const followers = useSelector(selectAllFollowers)

        const renderedFollowers = followers.map((followers) => (
          <li key={followers.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))
      
        return (
          <section>
            <h2>Followers</h2>
      
            <ul>{renderedFollowers}</ul>
          </section>
        )
      }