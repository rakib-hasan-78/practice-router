import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Detail = () => {
    const data = useLoaderData();
    const navigate = useNavigate();
    console.log(data)
    const returnHandler = ()=> navigate(-1)
    const{ cca3, name:{common}} = data;

    return (
        <div>
            <h3>country name: <small>{common}</small></h3>
            <p>hidden code : {cca3}</p>
            <button onClick={returnHandler} className='p-2 bg-amber-500 uppercase my-2 rounded-xl cursor-pointer'>return</button>
        </div>
    );
};

export default Detail;