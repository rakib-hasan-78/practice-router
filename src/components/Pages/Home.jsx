import React from 'react';
import Header from './../Component/Header.jsx/Header';
import { Outlet, useLocation, useNavigation } from 'react-router-dom';
import Footer from './../Component/Footer/Footer';

const Home = () => {
    const navigation = useNavigation();
    const location = useLocation();
    console.log(location)
    return (
        <div className='w-full max-h-screen flex flex-col items-center justify-between'>
         <Header />
            {
                navigation.state === 'loading' ? 'LOADING..........' 
                :
                    <Outlet className={`flex-grow`} />
            }
         <Footer />               
        </div>
    );
};

export default Home;