import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({loader}) => {

    const navigate = useNavigate();
    const {name:{common},cca3, area} = loader;
  

    const detail =()=>{
            navigate(`/users/${cca3}`);
    }
    return (
        <div role="button" aria-label={`Go to details of ${common || 'Unknown Country'}`} onClick={detail} className='w-10/12 border p-2 my-2 cursor-pointer'>
            <h2>country: <small>{common}</small></h2>
            <h3>area: <small>{area}SqKm.</small></h3>       
        </div>
    );
};

export default Card;