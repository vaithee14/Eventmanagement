import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section className="background-img">
      <nav className="navbar">
        <div className="logo ">EVENT MANAGEMENT</div>

        <div
          className={`hamburger-menu ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <i className="fa fa-bars"></i>
        </div>
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <article className="content-container">
        <div className="text-content">
          <h1 className="event-name">EVENT MANAGEMENT</h1>
          <p className="event-description">WELCOME TO MY EVENT PAGE</p>
        </div>
      </article>
     
    </section>
  );
}
