import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo transperent.png";

import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import Slidebar from "../components/Slidebar";
import Dropdown from "./Dropdown";
import "../components/CSS/Navbar.css";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`container ${sticky ? "dark-nav" : ""}`}>
        <div className="nav-header">
          <img src={logo} alt="ARETE" className="nav-logo" />
        </div>

        <ul className="nav-links">
          <li onMouseEnter={() => setDropDown(false)}>
            <Link to="/">Home</Link>
          </li>
          <li onMouseEnter={() => setDropDown(false)}>
            <Link to="/what-we-do">What we do?</Link>
          </li>
          <li onMouseEnter={() => setDropDown(false)}>
            <Link to="/why">Why</Link>
          </li>
          <li>
            <button
              className="dropdown-btn"
              onMouseEnter={() => setDropDown(true)}
            >
              Solutions
            </button>
            {dropDown && <Dropdown closeDropDown={() => setDropDown(false)} />}
          </li>
          <li onMouseEnter={() => setDropDown(false)}>
            <Link className="contact-btn" to="/contact">
              Contact
            </Link>
          </li>
        </ul>

        {/* Corrected Button */}
        <button className="nav-btn" onClick={() => setIsSidebarOpen(true)}>
          <FaBars />
        </button>

        {/* Pass `isSidebarOpen` Prop to Sidebar */}
        <Slidebar
          isSidebarOpen={isSidebarOpen}
          closeSidebar={() => setIsSidebarOpen(false)}
        />
      </nav>
    </>
  );
};

export default Navbar;
