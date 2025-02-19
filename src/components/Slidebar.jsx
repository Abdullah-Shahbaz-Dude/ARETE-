import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/Slidebar";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Slidebar = () => {
  return (
    <Wrapper>
      <div>
        <button className="close-btn">Close</button>
      </div>
      <ul className="sidebar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <Link>Solutions</Link>
        <li>
          <Link to="/why">Why</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      {/* soial icons */}
      <ul className="social-icons">
        <li>
          <a href="#" className="social-icons">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a href="#" className="social-icons">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="#" className="social-icons">
            <FaLinkedin />
          </a>
        </li>
      </ul>
    </Wrapper>
  );
};

export default Slidebar;
