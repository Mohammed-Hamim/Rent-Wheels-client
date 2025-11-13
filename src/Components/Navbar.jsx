import React, { use, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import Loading from './Loading';
import { IoCloseSharp } from 'react-icons/io5';
import Swal from 'sweetalert2';
import { MdEmail } from 'react-icons/md';
import { FaUserAlt } from 'react-icons/fa';
import { IoIosLogOut } from 'react-icons/io';


const Navbar = () => {
    const { user, loading, LogOut } = use(AuthContext)

    const [show, setShow] = useState(false)
    // console.log(show)
    const handleLogOut = () => {
        LogOut()
            .then(res => {
                // console.log(res)
                setShow(false)

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your have logged out successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(err => {
                console.log(err)
            })
    }

    if (loading) {
        return <Loading></Loading>
    }

    const links = <>
        <li ><NavLink to="/">Home</NavLink></li>
        <li ><NavLink to="/add_car">Add Car</NavLink></li>
        <li ><NavLink to='/my_listing'>My-Listings</NavLink></li>
        <li ><NavLink to='/browse_cars'>Browse Cars</NavLink></li>
        <li ><NavLink to='/my_bookings'>My Bookings</NavLink></li>
    </>

    return (
        <div className="navbar container   mx-auto ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu text-gray-200 bg-gray-800 menu-sm dropdown-content font-bold rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            links
                        }

                    </ul>
                </div>
                <a className="font-bold text-primary md:text-3xl text-xl">RENTWHEELS</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal font-bold text-gray-200 tracking-wider px-1">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end relative">


                {
                    user ? <div onClick={() => setShow(!show)} className='w-15  h-15 border-3 border-teal-600 rounded-full'>
                        <img className='w-14 h-14 rounded-full' src={user?.photoURL} alt={user?.displayName} />
                    </div> : <div className='space-x-4  '>
                        <Link to='/login' className='btn btn-outline border-teal-900 border-2 py-2.5 px-5 hover:text-teal-400 hidden md:inline'>Log in </Link>
                        <Link to='/register' className='btn  bg-teal-600 border-0 hover:text-teal-400'>Sing Up</Link>
                    </div>
                }


                <div className={`h-[200px] rounded-2xl p-4 top-[70px] min-w-[300px] z-100 absolute bg-gray-500 ${show ? "opacity-100" : "opacity-0"} duration-1000`}>
                    <div className='flex h-full flex-col justify-center gap-4 items-center relative'>
                        <span onClick={() => setShow(false)} className='absolute top-[-10px] right-0'><IoCloseSharp size={30} /></span>
                        <h3 className="text-white flex gap-2 items-center text-lg font-semibold mt-5 mb-1">
                            <FaUserAlt />
                            {user?.displayName}
                        </h3>
                        <p className="text-gray-950 flex gap:2 items-center  text-sm mb-4">
                            <MdEmail size={20} />:
                            <span className='ml-1'>{user?.email}</span>
                        </p>

                        <button onClick={handleLogOut}
                            className="w-full bg-teal-700 flex gap-2 items-center justify-center hover:bg-teal-600 text-white font-medium py-2 rounded-lg transition duration-200">
                            <span>Log Out</span>
                            <IoIosLogOut size={20} />
                        </button>
                    </div>

                </div>
            </div>

        </div >
    );
};

export default Navbar;