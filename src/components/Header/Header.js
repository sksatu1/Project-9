import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "blueviolet",
        textDecoration: "none"
    }
    return (

        <div className="header-container">

            <h1 className="title">Programming School </h1>

            <nav className="nav-container">
                <NavLink className='nav-style' activeStyle={activeStyle} to='/home'>Home</NavLink>
                <NavLink className='nav-style' activeStyle={activeStyle} to='/services'>Services</NavLink>
                <NavLink className='nav-style' activeStyle={activeStyle} to='/about'>About</NavLink>
                <NavLink className='nav-style' activeStyle={activeStyle} to='/login'>Sign in</NavLink>
            </nav>

        </div>

    );
};

export default Header;