import React, { useState } from 'react';
import { HiMenuAlt1 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

import Logo from './../Logo/Logo';
import Nav from './../Nav/Nav';


// ** handler for managing small device navigation  
const Header = () => {
    const [open, setOpen] = useState(false);
    const navHandler = ()=>{
        setOpen(!open)
    }

    return (
        <header 
        className='w-full h-auto bg-white-soft xxs:relative lg:static'>
            <main className='flex items-center justify-between'>
                <div className='lg:w-5/12 flex items-center justify-between'>
                    <Logo />
                    {
                       <Nav isOpen={open} />
                    }
                </div>
                <div
                onClick={navHandler} 
                className='cursor-pointer text-4xl font-black xxs:flex lg:hidden hover:bg-gray-200 hover:shadow-2xl inset-0 rounded-full  p-2 ease-in-out duration-150 delay-75'>
                    {
                        open? <IoClose /> : <HiMenuAlt1 /> 
                    }
                </div>
            </main>
        </header>
    );
};

export default Header;