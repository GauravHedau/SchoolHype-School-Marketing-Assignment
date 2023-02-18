import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <a className="navbar-brand" href="/">MARKALL</a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <a className="nav-link" href="/services">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/pricing">Pricing</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about-us">About Us</a>
          </li>
        </ul>
        <button className="btn btn-info my-2 my-lg-0 getbtn">Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;
