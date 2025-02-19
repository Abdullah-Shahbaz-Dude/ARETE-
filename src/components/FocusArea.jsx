import React from "react";
import "../components/CSS/FocusArea.css";

const FocusArea = () => {
  return (
    <>
      <div className="focusArea-container">
        <div className="focusArea-text">
          <h1>Areas We Focus On</h1>
          <div className="focusArea-content">
            <div className="right-focusArea">
              <h1>ARETE for Organizations</h1>
              <ul>
                <li>Human-centered AI and Data transformation</li>
                <li>Harnessing neurodiversity for competitive advantages</li>
                <li>Empowering teams through psychological-based learning</li>
              </ul>
            </div>
            <div className="left-focusArea">
              <h1>ARETE for Individuals</h1>
              <ul>
                <li>Professional coaching and mentoring</li>
                <li>ADHD coaching and mentoring</li>
                <li>Psychological therapy and psychoeducation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FocusArea;
