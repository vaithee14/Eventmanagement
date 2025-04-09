import React, { useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const NavigateCategory = useNavigate();

  const Categories = () => {
    NavigateCategory("/");
  };
  const about = () => {
    NavigateCategory("/");
  };
  return (
    <section className="background-img">
      <nav className="navbar">
        <div className="logo">PLANER EVENTS</div>

        <div className="hamburger-menu" onClick={toggleMenu}>
          <i className="fa fa-bars"></i>
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#service">Service</a>
          </li>
          <li>
            <a href="#about" onClick={about}>
              About
            </a>
          </li>
          <li>
            <a href="#categories" onClick={Categories}>
              Categories
            </a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <article className="content-container">
        <div className="text-content">
          <h4 className="sub-heading">LET'S PARTY THIS YEAR</h4>
          <h1 className="main-heading">Welcome To My Event Booking Page</h1>
          <p className="sub-description">
            Vivamus magna justo, lacinia eget consectetur sed, convallis at
            tellus. Quisque velit nisi, pretium ut lacinia in, elementum id
            enim.
          </p>
        </div>
      </article>
    </section>
  );
}
