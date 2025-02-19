import React from "react";
import("../components/CSS/Banner.css");

const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="content">
          <div className="banner-left">
            <h1>What We Do </h1>
          </div>
          <div className="banner-right">
            <p>
              At Arete, we support individuals and organisations unlock their
              highest potential through psychology-driven interventions that
              support innovation, digital transformation, and personal
              development. Whether you’re navigating change, overcoming
              challenges, or striving for excellence, we provide the insight,
              tools, and guidance to help you grow, adapt, and achieve.
              Excellence isn’t just a goal it’s the foundation of everything we
              do.
            </p>

            <button className="banner-btn btn">About us</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
