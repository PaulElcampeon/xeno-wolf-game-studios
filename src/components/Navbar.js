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
                    <NavLink activeClassName="active" to="/home">HOME</NavLink>
                </div>
                <div>
                    <NavLink activeClassName="active" to="/games">GAMES</NavLink>
                </div>
                <div>
                    <NavLink activeClassName="active" to="/admin">ADMIN</NavLink>
                </div>
            </div>
        </div >
    )
}

export default Navbar;