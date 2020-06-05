import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="nav">
            <div className="title">
                <p>Paul Oladele</p>
            </div>
            <div className="links">
                <div>
                    <NavLink to="/">HOME</NavLink>
                </div>
                <div>
                    <NavLink to="/projects">PROJECTS</NavLink>
                </div>
                <div>
                    <NavLink to="/games">GAMES</NavLink>
                </div>
                {/* <div>
                    <NavLink to="/contact">CONTACT</NavLink>
                </div> */}
                <div>
                    <NavLink to="/admin">ADMIN</NavLink>
                </div>
            </div>
        </div >
    )
}

export default Navbar;