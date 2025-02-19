import React from "react";
import img_team from "../assets/images/shutterstock_2061488969.jpg";
import "./CSS/team.css";
const Team = () => {
  return (
    <div className="team">
      <div className="team-left">
        <img className="team_img" src={img_team} alt="team" />
      </div>
      <div className="team-right">
        <h3>Empowering Teams Through Psychology-Based Learning </h3>
        <p>
          At Arete, we believe that successful teams are built on a foundation
          of psychological safety, collaboration, and shared purpose. Our
          bespoke group training programs help organisations and teams meet
          objectives, overcome barriers, and thrive in an ever-changing
          workplace.
        </p>
      </div>
    </div>
  );
};

export default Team;
