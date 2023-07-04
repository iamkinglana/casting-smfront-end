import React, { useEffect, useState } from 'react';


function CastDetails({ match }) {
  const { castId } = match.params;
  const [castData, setCastData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/casts/${castId}`)
      .then((response) => response.json())
      .then((data) => setCastData(data))
      .catch((error) => console.log(error));
  }, [castId]);

  return (
    <div>
      <h1>Cast Details</h1>
      <h3>Cast ID: {castId}</h3>
      {castData && (
        <div>
          <h4>Content: {castData.content}</h4>
          <p>Author: {castData.author}</p>
          <p>Date and Time: {castData.timestamp}</p>
          <p>Likes: {castData.likes}</p>
          <p>Comments: {castData.comments}</p>

        </div>
      )}
    </div>
  );
}

export default CastDetails;
