import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-dark navbar-expand-md fixed-top">
         <div className="container">
      <a href="#home-section" className="navbar-brand">คrtiŞคຖ trip</a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#home-section">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#explore-head-section">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#create-head-section">Contact</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#share-head-section">MyProfile</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
        </>
    );
};

export default Navbar;