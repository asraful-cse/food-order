import React, { useEffect, useState } from 'react';
import BreakFastItem from './BreakFastItem';

const BreakFast = () => {
    const [breakFastItems, setBreakFastItems] = useState([])

    useEffect(() => {
        // fetch('https://jsonplaceholder.typicode.com/users')
        fetch('./breakfast.json')
            .then(res => res.json())
            .then(data => setBreakFastItems(data))
    }, [])
    return (
        <div className="container">
            <h2>breakfast</h2>
            <div class="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-5 ">
                {
                    breakFastItems.map(breakFastItem => <BreakFastItem breakFastItem={breakFastItem}

                        key={breakFastItem.key}
                    >

                    </BreakFastItem>)
                }
            </div>
        </div>
    );

};

export default BreakFast;