import React from 'react';
import not_found from '../../images/404';
const NotFound = () => {
    return (
        <div>
                <img className="img-fluid" src={not_found} alt="" />
        </div>
    );
};

export default NotFound;