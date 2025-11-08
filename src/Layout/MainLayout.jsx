import React from 'react';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <>
            <header>
                <nav className=''>I am navbar</nav>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
        </>
    );
};

export default MainLayout;