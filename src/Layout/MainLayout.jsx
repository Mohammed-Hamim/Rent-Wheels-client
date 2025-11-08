import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';

const MainLayout = () => {
    return (
        <>
            <header className='container mx-auto border-2'>
                <Navbar></Navbar>
            </header>
            <main className='container mx-auto border-2'>
                <Outlet></Outlet>
            </main>
        </>
    );
};

export default MainLayout;