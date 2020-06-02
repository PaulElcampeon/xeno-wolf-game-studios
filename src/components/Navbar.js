import React from 'react';
import { NavLink } from  'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav-bar">
            <div className="company-name">
                <p>Xeno Wolf Game Studios</p>
            </div>
            <ul className="nav-links">
                <li><NavLink to="/">HOME</NavLink></li>
                <li><NavLink to="/projects">PROJECTS</NavLink></li>
                <li><NavLink to="/admin">ADMIN</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar;