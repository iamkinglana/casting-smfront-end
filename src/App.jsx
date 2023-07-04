import React from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import Cast from './components/Cast';
import NewCastForm from './components/NewCastForm';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="./UserProfile">User Profile</Link>
          </li>
          <ul>
            <Link to="/cast">Cast</Link>
          </ul>
          <li>
            <Link to="/cast/new">New Cast</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="./UserProfile" element={<UserProfile/>} />
        <Route path="/cast" element={<Cast />} />
        <Route path="/cast/new" element={<NewCastForm />} />
      </Routes>
    </Router>
  );
}
=======
import Login from './components/Login.jsx';

const App = () => {
  return (
    <div>
      <h1></h1>
      <Login />
    </div>
  );
};
>>>>>>> 096d59bc10c328b7da1932094976f651a975155b

export default App;
