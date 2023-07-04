import React from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
=======

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
>>>>>>> e17e529 (Commit)
import Home from './components/Home';
import Casts from './components/Casts';
import NewCastForm from './components/NewCastForm';
<<<<<<< HEAD
import Profile from './components/Profile';
import Footer from './components/Footer';
import Login from './components/Login';
=======
import Login from './components/Login.jsx';

>>>>>>> e17e529 (Commit)

const App = () => {
  return (

    <Router>
<<<<<<< HEAD
    
      <div id="root">
        <Nav />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/casts" element={<Casts />} />
            <Route path="/newcastform" element={<NewCastForm />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
        <Login />
        <Footer />
      </div>
=======

      <nav>
      <Login />
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

>>>>>>> e17e529 (Commit)
    </Router>

  );
<<<<<<< HEAD
};
=======
}
// import Login from './components/Login.jsx';

// const App = () => {
//   return (
//     <div>
//       <h1></h1>
//       <Login />
//     </div>
//   );
// };
>>>>>>> e17e529 (Commit)

export default App;









// import React from 'react';
// import Login from './components/Login.jsx';

// const App = () => {
//   return (
//     <div>
//       <h1></h1>
//       <Login />
//     </div>
//   );
// };

// export default App;
