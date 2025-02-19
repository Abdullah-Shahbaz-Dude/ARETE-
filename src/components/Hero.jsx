import React from "react";
import Wrapper from "../assets/wrappers/Hero";
import "../components/CSS/Hero.css";

const Hero = ({ closeDropDown }) => {
  return (
    <>
      <div className="hero container" onMouseOver={closeDropDown(false)}>
        <div className="hero-text">
          <h1>Excellence in Mind, Transformation in Action</h1>
          <p>
            Psychology based Consultancy, Coaching & Mentoring for Organisations
            and Individuals
          </p>
          <button className="btn">Explore more</button>
        </div>
      </div>
    </>
  );
};

export default Hero;
