import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';


const MainLayout = () => {
    return (
        <>
            <header className='container relative z-10  mx-auto '>
                <Navbar></Navbar>
            </header>
            <main className=' min-h-screen '>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </>
    );
};

export default MainLayout;