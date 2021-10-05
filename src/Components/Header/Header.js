import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="text-2xl font-bold	 bg-black bg-opacity-75 text-white">
                <h1>IT Specialist Training Centre</h1>
            </div>
            <div className="text-2xl mb-4   h-20 bg-black bg-opacity-75 text-white flex flex-wrap content-center justify-between  space-x-8">
                <div>
                    <NavLink className="hover:bg-gray-500 m-8" to="/home">Home</NavLink>
                    <NavLink className="hover:bg-gray-500 mr-8" to="/services">Services</NavLink>
                    <NavLink className="hover:bg-gray-500 mr-8" to="/about">About Us</NavLink>
                    <NavLink className="hover:bg-gray-500 mr-8" to="/feedback">Feedback</NavLink>
                </div>
                <div>
                    <button className="mr-8 hover:bg-gray-500">Sign Up</button>
                    <button className="mr-8 hover:bg-gray-500">Log In</button>
                </div>
            </div>
        </div>
    );
};

export default Header;