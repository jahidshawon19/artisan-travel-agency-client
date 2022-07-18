import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';
// import video from '../../video/Pexels Videos 1820193.mp4';

const Home = () => {
    return (
        <>
            <div className="hero">

                <video autoPlay loop muted plays-inline class="home-video">
                    <source src="#" type="video/mp4" />
                </video>

                <nav class="home-nav">
                    <h3 class="logo-text">คrtiŞคຖ trip</h3>
                    <ul>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Contact</a></li>
                        <li><a href="/">Sign In</a></li>
                    </ul>
                </nav>
                <div className="content">
                    <h1>Artisan Trip</h1>
                    <div class="category">
                         <NavLink to="/tours">Tour Packages</NavLink>
                         <a href="/">ThemePark Booking</a>
                         <a href="/">Hajj & Umrah</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;