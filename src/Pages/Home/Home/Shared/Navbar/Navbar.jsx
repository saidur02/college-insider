import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <div className="navbar  bg-black text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>
                        <li><a>Portfolio</a> </li>
                        <li><a>About</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">CollegeInsider</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <Link to='/'><li><a>Home</a></li></Link>
                    <Link to='/colleges'><li><a>Colleges</a></li></Link>
                    <Link to='/admission'><li><a>Admission</a></li></Link>
                    <Link to='/myCollege'><li><a>My College</a></li></Link>
                    <Link to='/login'><li><a>Login</a></li></Link>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;