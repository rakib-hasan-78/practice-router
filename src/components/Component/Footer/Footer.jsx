import React from 'react';

const Footer = () => {
    
    return (
        <footer className='w-full h-auto py-10 bg-slate-900 flex flex-col content-center items-center'>
            <span className='text-slate-50 font-light text-sm'>&copy; {new Date().getFullYear()} all the rights reserved.</span>
        </footer>
    );
};

export default Footer;