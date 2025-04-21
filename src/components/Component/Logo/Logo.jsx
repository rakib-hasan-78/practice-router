import React from 'react';
import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <div className='xxs:w-7/12 lg:w-2/12'>
            <Link to={'/'}>
                <img src={logo} className='xxs:max-h-36 lg:max-h-24'  />
            </Link>
        </div>
    );
};

export default Logo;