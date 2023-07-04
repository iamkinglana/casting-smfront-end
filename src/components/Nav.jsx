import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Nav = () => {
    return (
        <nav className="nav-container">
        <ul className="nav-list">
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/casts">Casts</Link>
            </li>
            <li>
            <Link to="/newcastform">NewCast</Link>
            </li>
            <li>
            <Link to="/profile">Profile</Link>
            </li>
        </ul>
        </nav>
    );
};

export default Nav;
