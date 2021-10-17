import React, { useEffect, useState } from 'react';
import LunchItem from './LunchItem';

const Lunch = () => {
    const [lunchItems, setLunchItems] = useState([])

    useEffect(() => {
        fetch('./lunch.json')
            .then(res => res.json())
            .then(data => setLunchItems(data))
    }, [])

    return (
        <div className="container">
            <h2>Lunch</h2>
            <div class="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-5 ">
                {
                    lunchItems.map(lunchItem => <LunchItem lunchItem={lunchItem}

                        key={lunchItem.key}
                    >

                    </LunchItem>)
                }
            </div>
        </div>
   );
};

export default Lunch;