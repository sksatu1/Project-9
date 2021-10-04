import Button from '@restart/ui/esm/Button';
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
                <NavLink className='nav-style' activeStyle={activeStyle} to='/about'>About</NavLink>
                <NavLink className='nav-style' activeStyle={activeStyle} to='/services'>Services</NavLink>
                <NavLink className='nav-style' activeStyle={activeStyle} to='/contact'>Contact us</NavLink>
            </nav>

            {/*  <div className="course-heading">
                <div className="heading-details">
                    <div className="heading-img"><img src="https://www.mycplus.com/mycplus/wp-content/uploads/2009/02/programming-languages.jpg" alt="" /></div>
                    <h1>Welcome To Our Courses
                        <br />
                        <br />
                        <small style={{ color: "blueviolet" }}> Click to services to find more courses</small>
                    </h1>
                </div>
            </div> */}

        </div>

    );
};

export default Header;