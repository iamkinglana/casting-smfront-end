import React, { useEffect, useState } from 'react';
import Cast from './Cast';
import NewCastForm from './NewCastForm';

function Home() {
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/casts/')
      .then((response) => response.json())
      .then((data) => setCasts(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <NewCastForm />
      {casts.map((cast) => (
        <Cast key={cast} cast={cast} />
      ))}
      {/* <Cast/> */}

    </div>
  );
}

export default Home;
