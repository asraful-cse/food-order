import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const BreakFastItem = (props) => {
    const { id, img, name, price } = props.breakFastItem;
    const history = useHistory();
    // const url = `/friend/${id}`;
    const url = `/brekfastitems/${id}`;

    const handleFriendClick = () => {
        history.push(`/brekfastitems/${id}`);
    }
    return (

        <div class="col px-5">
              
                   
            <div class="card" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={img} class="card-img-top img-fluid p-2 mt-4" style={{ height: '150px', width: '150px' }} alt="..." />
                <div class="card-body p-5">
                    <p class="card-title">{name}</p>
                    <h5 class="card-text">Price : $ {price}</h5>
                </div>
              
                <Link to={url}>btn
            </Link>
            <br />
            <button onClick={handleFriendClick}>Visit me 2</button>
            </div>
            
        </div>
    );
};

export default BreakFastItem;