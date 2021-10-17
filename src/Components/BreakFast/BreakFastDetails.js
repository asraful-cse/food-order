import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BreakFastDetails = () => {
    const { breakfastId } = useParams();
    // console.log(useParams());
    const [detailsBreakFast, setDetailsBreakFast] = useState({});

    useEffect(() => {
        // const url = `https://jsonplaceholder.typicode.com/users/${breakfastId}`;
        const url = `./breakfast.json/${breakfastId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setDetailsBreakFast(data))
    }, []);
    return (
        <div>
            <h1>ID: {breakfastId}</h1>
            <img src={detailsBreakFast?.img} alt="" />
            <h3> Name: $ {detailsBreakFast?.name}</h3>
            <h4>Price : {detailsBreakFast?.price} </h4>
        </div>
    );
};

export default BreakFastDetails;