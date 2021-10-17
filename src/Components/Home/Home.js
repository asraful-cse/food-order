import React from 'react';
import BreakFast from '../BreakFast/BreakFast';
// import Dinner from '../Dinner/Dinner';
// import Lunch from '../Lunch/Lunch';
import photo1 from '../../images/Image/adult-blur-blurred-background-687824.png'
import photo2 from '../../images/Image/chef-cook-food-33614.png'
import photo3 from '../../images/Image/architecture-building-city-2047397.png'

const Home = () => {
    return (
        < div className="container">
            <div className="container">
                <h3>This is home</h3>
                <BreakFast></BreakFast>
                {/* <Lunch></Lunch> */}
                {/* <Dinner></Dinner> */}
            </div>
            <br /><br />
            <h1> Why you choose us?</h1>
            <p>Barton waiter twenty always repair in within we do. An delighted offending <br />
                curiosity my is dash woods at Boy prosperous increasing surrounding  </p>
                <br />
            <div class=" row row-cols-1 row-cols-md-3 g-4 ">
                <div class="col rounded-3" >
                    <div class="card h-100 ">
                        <img src={photo1} class="card-img-top img-fluid" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title"><i class="fas fa-tachometer-alt"></i>  Fast Delivery</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div class="col rounded-3">
                    <div class="card h-100">
                        <img src={photo2} class="card-img-top img-fluid" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title"><i class="fas fa-bell"></i> A Good Auto Responsive</h5>
                            <p class="card-text">This is a short card.</p>
                        </div>
                    </div>
                </div>
                <div class="col rounded-1">
                    <div class="card h-100">
                        <img src={photo3} class="card-img-top img-fluid" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title"><i class="fas fa-truck"></i>  Home Delivery</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;