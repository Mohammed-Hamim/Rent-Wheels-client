import React from 'react';
import { Link, NavLink } from 'react-router';


const Navbar = () => {


    const links = <>
        <li ><NavLink to="/">Home</NavLink></li>
        <li ><NavLink to="/add_car">Add Car</NavLink></li>
        <li ><NavLink to='/my_listing'>My-Listings</NavLink></li>
        <li ><NavLink to='/browse_cars'>Browse Cars</NavLink></li>
    </>

    return (
        <div className="navbar  container mx-auto    bg-transparent">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content font-bold rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            links
                        }

                    </ul>
                </div>
                <a className="font-bold text-primary md:text-3xl text-xl">RENTWHEELS</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal font-bold text-white tracking-wider px-1">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end space-x-4">


                <Link to='/login' className='btn btn-outline border-teal-900 border-2 hover:text-teal-400'>Log in </Link>
                <Link to='/register' className='btn bg-teal-600 border-0 hover:text-teal-400'>Sing Up</Link>
            </div>
        </div >
    );
};

export default Navbar;