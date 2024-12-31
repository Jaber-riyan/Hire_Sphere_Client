import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import { Helmet } from 'react-helmet';
import Footer from '../Shared/Footer/Footer';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Helmet><title>Home | HireSphere</title></Helmet>
            <header className='sticky top-0 z-10 border-2 rounded-lg backdrop-blur-sm bg-transparent'>
                <Navbar></Navbar>
            </header>
            <div className=''>
                <Outlet></Outlet>
            </div>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Home;