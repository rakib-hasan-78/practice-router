// import React from 'react';

import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import Card from './../Component/Card/Card';


const Users = () => {
    const loader = useLoaderData();
    const [data, setData] = useState([]);
    const [searchText, setSearchText] = useState('');


    useEffect(()=>{
        setData(loader);
    },[loader]);
    console.log(data)

    const filterData = data.filter(value=>value.name.common.toLowerCase().includes(searchText.toLowerCase()));


    // handler for cleaning text field==>
    const clearHandler = ()=>{
        setSearchText('')
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
                        filterData.map(loader=>(
                            <Card key={loader.cca3} loader={loader} />
                        ))
                    }
                </div>
           </main>
        </section>
    );
};

export default Users;