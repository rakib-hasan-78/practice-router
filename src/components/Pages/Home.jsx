import React from 'react';
import Header from './../Component/Header.jsx/Header';
import { Outlet } from 'react-router-dom';
import Footer from './../Component/Footer/Footer';

const Home = () => {
    return (
        <div className='w-full max-h-screen flex flex-col items-center justify-between'>
         <Header />
            
            <Outlet className={`flex-grow`} />
         <Footer />               
        </div>
    );
};

export default Home;