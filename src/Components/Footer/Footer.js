import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Footer.css';
const Footer = () => {
    return (
        <div className=" bg-dark mt-5">
            <div class="d-flex bd-highlight container p-2">
                <div class="p-2 flex-grow-1 bd-highlight  " >
                    <img src={logo} alt="" style={{ width: '120px' }} />
                </div>
                <div class="p-2  bd-highlight text-light mx-5 ">
                    <Link to="/home" className="link_style">About Online food</Link>
                    <br />
                    <Link to="/home" className="link_style">Read our blog</Link>
                    <br />
                    <Link to="/home" className="link_style">Sign up to delivery</Link>
                    <br />
                    <Link to="/home" className="link_style">Add your restaurant</Link>
                </div>
                <div class="p-2  bd-highlight mx-5">
                    <Link to="/home" className="link_style">Get help </Link>
                    <br />
                    <Link to="/home" className="link_style">Read FAQs</Link>
                    <br />
                    <Link to="/home" className="link_style">View all cities</Link>
                    <br />
                    <Link to="/home" className="link_style">Restaurants near me</Link>
                </div>
            </div>
            <div class="d-flex bd-highlight container text-light ">
                <div class="p-2 flex-grow-1 bd-highlight copy_right "><small><a href="https://web.food-experts.com/" target="_blank">Copyright @ 2021 Online food</a></small> </div>
                <div class="p-2 bd-highlight anc_style"><a href="https://web.food-experts.com/" target="_blank">Privacy Policy</a></div>
                <div class="p-2 bd-highlight anc_style"><a href="https://web.food-experts.com/" target="_blank">Terms of Use</a></div>
                <div class="p-2 bd-highlight anc_style"><a href="https://web.food-experts.com/" target="_blank">Pricing</a></div>
            </div>
        </div>
    );
};

export default Footer;