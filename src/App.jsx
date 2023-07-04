import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Casts from './components/Casts';
import NewCastForm from './components/NewCastForm';
import Profile from './components/Profile';
import Footer from './components/Footer';
import Login from './components/Login';

const App = () => {
  return (
    <Router>
    
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
    </Router>
  );
};

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
