import React, { useEffect, useState } from 'react';
import DinnerItem from './DinnerItem';

const Dinner = () => {
    const [dinnerItems, setDinnerItems] = useState([])

    useEffect(() => {
        fetch('./dinner.json')
            .then(res => res.json())
            .then(data => setDinnerItems(data))
    }, [])

    return (
        <div className="container">
            <h2>Dinner</h2>
            <div class="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-5 ">
                {
                    dinnerItems.map(dinnerItem => <DinnerItem lunchItem={dinnerItem}

                        key={dinnerItem.key}
                    >

                    </DinnerItem>)
                }
            </div>
        </div>
   );
};

export default Dinner;