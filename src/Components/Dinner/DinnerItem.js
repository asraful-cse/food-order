import React from 'react';

const DinnerItem = (props) => {
    const { id, img, name, price } = props.lunchItem;

    return (

        <div class="col px-5">
            <div class="card" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={img} class="card-img-top img-fluid p-2 mt-4" style={{ height: '150px', width: '150px' }} alt="..." />
                <div class="card-body p-5">
                    <p class="card-title">{name}</p>
                    <h5 class="card-text">Price : $ {price}</h5>
                </div>
            </div>
        </div>
    );
};

export default DinnerItem;