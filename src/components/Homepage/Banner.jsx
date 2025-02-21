import React from "react";
import imgHomepageBanner from "../../assets/images/HomePage/homepagebanner.jpg";
import("../Homepage/CSS/Banner.css");

const Banner = ({ heading, paragraph, buttontxt }) => {
  return (
    <>
      <div className="banner">
        <div className="content">
          <div className="banner-left">
            <img src={imgHomepageBanner} alt="" />
          </div>
          <div className="banner-right">
            <h1>{heading}</h1>
            <p>{paragraph}</p>

            <button className="banner-btn btn">{buttontxt}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
