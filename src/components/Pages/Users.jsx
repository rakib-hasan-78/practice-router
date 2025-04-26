// import React from 'react';

import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import Card from './../Component/Card/Card';


const Users = () => {
    const loader = useLoaderData();
    const [data, setData] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const contentPerPage = 20;


    useEffect(()=>{
        setData(loader);
    },[loader]);
    

    const filterData = data.filter(value=>value.name.common.toLowerCase().includes(searchText.toLowerCase()));


    // handler for cleaning text field==>
    const clearHandler = ()=>{
        setSearchText('')
    }
    // ** pagination logic;
    
    const totalPages = Math.ceil(filterData.length / contentPerPage);
    const currentIndex = (currentPage-1) * contentPerPage;
    const currentItems = filterData.slice(currentIndex, currentIndex + contentPerPage);

    const gotPagination = pagiValue =>{
        if (pagiValue>=1 && pagiValue<=totalPages) {
            setCurrentPage(pagiValue)
        }
    } 

    return (
        <section className="w-full h-auto">
           <main>
                <div 
                className="w-full h-auto py-5 flex flex-col items-center justify-center mt-10 border bg-radial-[at_25%_25%] from-zinc-600 to-zinc-700 to-75% my-5 rounded-lg">
                    <div className="w-8/12 h-auto py-3 flex flex-col items-center justify-center text-zinc-50 space-y-8">
                        <h2 className="font-sans font-black text-5xl">search country by name</h2>
                        <div className="w-7/12  relative flex items-center flex-row justify-start">
                            <input
                            value={searchText}
                            onChange={(e)=> setSearchText(e.target.value)}
                            className="py-3.5 w-full outline-none text-xl font-sans font-extralight bg-radial-[at_25%_25%] from-zinc-900 to-zinc-800 to-75% px-5 border border-zinc-200 bg-blend-color-burn  rounded-xl"
                             type="text" name="" id="" />
                             {
                                searchText && (
                                    <button className="absolute right-0 w-12 h-12 m-4 rounded-full cursor-pointer flex items-center justify-center text-xl transition-all delay-75 duration-150">
                                        <MdClose onClick={clearHandler} />
                                    </button>

                                )
                             }
                        </div>
                    </div>
                </div>
                <div className="w-full h-auto">
                    
                </div>
                <div className="w-full h-auto grid grid-cols-4  place-items-center gap-x-5 gap-y-3 ">
                    {
                        currentItems.map(loader=>(
                            <Card key={loader.cca3} loader={loader} />
                        ))
                    }
                </div>
                <div className="w-2/12 h-auto flex flex-row items-center justify-center mx-auto my-5 space-x-3">
                    <div className="flex items-center font-sans uppercase font-light">
                        <button
                        disabled={currentPage===1}
                        onClick={()=>gotPagination(currentPage-1)}
                         className="text-3xl cursor-pointer text-yellow-500 disabled:cursor-default disabled:opacity-50" type="button">
                            <IoIosArrowRoundBack />
                        </button>
                        <span className="text-sm">prev</span>
                    </div>
                    {
                        Array.from({length: totalPages},(_ ,idx )=>{
                           return <button 
                            key={idx +1}
                            className={`px-3 py-1 rounded-full ${currentPage === idx+1 ? 'bg-radial-[at_25%_25%] from-zinc-600 to-zinc-700 to-75% text-zinc-50':''}`}
                            onClick={()=>gotPagination(idx + 1)}
                            >
                            {idx +1}
                            </button>
                        })
                    }
                    <div className="flex items-center font-sans uppercase font-light">
                        <span className="text-sm">next</span>
                        <button 
                        disabled={currentPage===totalPages}
                        onClick={()=>gotPagination(currentPage + 1)}
                        className="text-3xl cursor-pointer disabled:cursor-default disabled:opacity-50 text-yellow-500" type="button">
                            <IoIosArrowRoundForward />
                        </button>
                    </div>
                </div>
           </main>
        </section>
    );
};

export default Users;
