import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Detail = () => {
    const data = useLoaderData();
    console.log(data)
    const{ cca3, name:{common}} = data;
    return (
        <div>
            <h3>country name: <small>{common}</small></h3>
            <p>hidden code : {cca3}</p>    
        </div>
    );
};

export default Detail;