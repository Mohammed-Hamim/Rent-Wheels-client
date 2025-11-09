import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';

const MainLayout = () => {
    return (
        <>
            <header className='container relative z-10  mx-auto '>
                <Navbar></Navbar>
            </header>
            <main className=' min-h-screen '>
                <Outlet></Outlet>
            </main>
        </>
    );
};

export default MainLayout;