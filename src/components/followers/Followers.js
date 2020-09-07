import React from 'react';

//just a list of followers or also following? Unfollow and follow button?

export const FollowersList = () => {

        
        const followers = useSelector(selectAllFollowers)

        const renderedUsers = users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))
      
        return (
          <section>
            <h2>Followers</h2>
      
            <ul>{renderedUsers}</ul>
          </section>
        )
      }