import React from 'react';
import { useLocation, useNavigate, useRouteError } from 'react-router-dom';
import errorImg from '../../../assets/404-error.gif';

const ErrorBoundary = () => {
    const location = useLocation();
    const errorRoute = useRouteError();
    const navi = useNavigate();

    const backHandler = (e)=>{
        e.preventDefault();
        navi(-1)
    }

    let messages = "Something went wrong!";

    if (errorRoute) {
        if (errorRoute.status === 404) {
            messages = `Your searched ${location.pathname} did not found!`;
        } else if (errorRoute.statusText) {
            messages = errorRoute.statusText;
        } else if (errorRoute.message) {
            messages =`'${location.pathname}' is an Invalid search`;
        }
    }

    return (
       <div 
          className="w-full h-auto flex items-center justify-center bg-cover bg-center bg-no-repeat min-h-screen 
  before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black/30 before:bg-opacity-40 before:z-0" 
  style={{ backgroundImage: `url(${errorImg})` }}
>
        <div className='bg-gradient-to-tl from-zinc-800/80 via-zinc-700/60 to-transparent backdrop-blur-md border border-white/20 rounded-lg shadow-lg p-8 w-9/12 flex flex-col items-center justify-center relative'>
            {
                errorRoute.status ? <span className='text-5xl text-blue-400'>fatal error : {errorRoute.status}</span> :
                <span className='text-5xl text-blue-400'>Something went wrong! error:404</span>
            }
            <br />
            <h1 className="text-yellow-500 text-3xl p-10 rounded-lg relative">{messages}</h1>
            <button className='text-blue-600 cursor-pointer' onClick={backHandler}>back</button>
        </div>
      </div>
    );
};

export default ErrorBoundary;
