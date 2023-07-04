import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/users/${userId}`)
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.log(error));
  }, [userId]);

  return (
    <div>
      <h1>User Profile</h1>
      <h3>User ID: {userId}</h3>
      {userData && (
        <div>
          <h4>Username: {userData.username}</h4>
          <p>Following: {userData.following}</p>
          <p>Followers: {userData.followers}</p>

          <h4>User's Casts:</h4>
          {userData.casts.map((cast) => (
            <div key={cast.id}>
              <h5>Cast ID: {cast.id}</h5>
              <p>Content: {cast.content}</p>
              <p>Author: {cast.author}</p>
              <p>Timestamp: {cast.timestamp}</p>
              <p>Likes: {cast.likes}</p>
              <p>Comments: {cast.comments}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UserProfile;
