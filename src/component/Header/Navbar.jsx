import React, { useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <section className="background-img" id="home">
      <nav className="navbar">
        <div className="logo">EVENT PLANNER</div>

        <div className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
          <i className="fa fa-bars"></i>
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="#home" onClick={() => handleNavigate("/")}>
              Home
            </a>
          </li>
          <li>
            <a href="#service" onClick={() => handleNavigate("/")}>
              Service
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => handleNavigate("/")}>
              About us
            </a>
          </li>
          <li>
            <a href="#categories" onClick={() => handleNavigate("/")}>
              Categories
            </a>
          </li>
          <li>
            <a href="#enquiry" onClick={() => handleNavigate("/enquiry")}>
              Enquiry
            </a>
          </li>
        </ul>
      </nav>

      <article className="content-container">
        <div className="text-content">
          <h4 className="sub-heading">LET'S PARTY THIS YEAR</h4>
          <h1 className="main-heading">Welcome To My Event Booking Page</h1>
          <p className="sub-description">
            Every event comes once in our life so they give us very precious
            memories to cherish for a life time.
          </p>
          <button
            className="cta-button"
            onClick={() => handleNavigate("/enquiry")}
          >
            Book Your Event
          </button>
        </div>
      </article>
    </section>
  );
}
