import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';


const MainLayout = () => {
    return (
        <>
            <header className=' relative  mx-auto bg-gray-950/80  '>
                <Navbar></Navbar>
            </header>
            <main className=' md:min-h-screen container mx-auto'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </>
    );
};

export default MainLayout;