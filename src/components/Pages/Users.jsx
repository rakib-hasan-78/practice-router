// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Card from './../Component/Card/Card';

const Users = () => {
    const data = useLoaderData();
    return (
        <section className="w-full h-auto">
           <main>
                <div className="w-full h-auto grid grid-cols-4  place-items-center gap-x-5 gap-y-3 ">
                    {
                        data.map(loader=> (<Card key={loader.cca3} loader={loader} />) )
                    }
                </div>
           </main>
        </section>
    );
};

export default Users;