import React from 'react';
import Casts from './Casts';

<<<<<<< HEAD
const Home = () => {
    return (
        <div>
        
        <p>Current trends...</p>
        <Casts />
        </div>
    );
};
=======
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
>>>>>>> e17e529 (Commit)

export default Home;
