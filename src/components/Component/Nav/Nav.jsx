import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    const getActive =({isActive})=>{
        return `duration-100 ease-in transition-all text-base my-1 rounded-sm py-1.5 px-3 xxs:text-2xl lg:text-base shadow-lg xxs:w-full lg:w-auto ${isActive ? 'bg-yellow-500 text-yellow-100':'bg-zinc-700 text-zinc-50'}`
    }
    return (
        <nav className='xxs:w-full lg:w-fit xxs:min-h-screen lg:min-h-auto flex xxs:items-start lg:items-center xxs:flex-col lg:flex-row xxs:space-x-0 lg:space-x-4 xxs:space-y-5 lg:space-y-0 text-lg font-extrabold xxs:absolute xxs:bg-gray-400 top-18 right-0 lg:static'>
            <NavLink className={getActive} to={'/'}>Home</NavLink>
            <NavLink className={getActive} to={'/about'}>About</NavLink>
            <NavLink className={getActive} to={'/user'}>User</NavLink>
            <NavLink className={getActive} to={'/contact'}>Contact</NavLink>
        </nav>
    );
};

export default Nav;