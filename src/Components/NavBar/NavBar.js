import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import logo from '../../images/logo2.png';
const NavBar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <div class="container-fluid  container">
                    <img className="img-fluid  " style={{ width: '120px' }} src={logo} alt="" />
                    <div class="collapse navbar-collapse text-uppercase fw-bold  " style={{ display: 'flex', alignItems: 'end', justifyContent: 'end' }} id="navbarSupportedContent" >
                        <NavLink activeStyle={{ color: "crimson" }} className="p-2 text-decoration-none" to="/login">LOGIN</NavLink>
                    </div>
                </div>
            </nav>
            <div className="main  d-flex justify-content-center algn-items-center">
                <div className="header_style">
                    <h1 >Best food waiting for your belly</h1>
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center fw-bold">
                <NavLink activeStyle={{ color: "crimson" }} className="p-2 text-decoration-none" to="/breakfast">BREAKFAST</NavLink>
                <NavLink activeStyle={{ color: "crimson" }} className="p-2 text-decoration-none" to="/lunch">LUNCH</NavLink>
                <NavLink activeStyle={{ color: "crimson" }} className="p-2 text-decoration-none" to="/dinner">DINNER</NavLink>
            </div>
        </>
    );
};

export default NavBar;