import React from 'react';

const Navbar = () => {
    return (
        <nav className="nav-bar">
            <div className="company-name">
                <p>Xeno Wolf Game Studios</p>
            </div>
            <ul className="nav-links">
                <li><a href="#">HOME</a></li>
                <li><a href="#">PROJECTS</a></li>
                <li><a href="#">ADMIN</a></li>
            </ul>
        </nav>
    )

}


export default Navbar;