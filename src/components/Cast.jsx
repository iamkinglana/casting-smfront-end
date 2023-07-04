import React, { useState, useEffect } from 'react';


function Cast() {
    const [cast, setCast] = useState(null);

    useEffect(() => {
      fetchCast();
    }, []);

    const fetchCast = async () => {
      try {
        const response = await fetch('http://localhost:3000/casts');
        const data = await response.json();
        setCast(data);
      } catch (error) {
        console.log('Error fetching cast:', error);
      }
    };

    const handleLike = async () => {
      try {
        const response = await fetch(`http://localhost:3000/casts/${cast.id}/likes`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const updatedCast = { ...cast };
          updatedCast.likes++;
          setCast(updatedCast);
        } else {
          console.log('Failed to like cast:', response.statusText);
        }
      } catch (error) {
        console.log('Error liking cast:', error);
      }
    };

    if (!cast) {
      return <div>Loading cast...</div>;
    }

    return (
      <div>
        <h2>Cast</h2>
        <h3>{cast.author}</h3>
        <p>{cast.content}</p>
        <p>{cast.comments}</p>
        <p>{cast.likes}</p>
        <button onClick={handleLike}>Like</button>
      </div>
    );
  }

  export default Cast;
