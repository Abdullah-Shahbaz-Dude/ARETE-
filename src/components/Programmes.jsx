import React from "react";
import "./CSS/programmes.css";
import programme_1 from "../assets/images/shutterstock_2455025455.jpg";
import programme_2 from "../assets/images/shutterstock_2504894091.jpg";
import programme_3 from "../assets/images/shutterstock_2061488969.jpg";

const Programmes = () => {
  return (
    <div className="programmes">
      <div className="programe">
        <img src={programme_1} alt="programme 1" />
        <div className="caption">
          <p>Psychological Insight to Overcome Resistance</p>
          <button className="btn">Read More</button>
        </div>
      </div>
      <div className="programe">
        <img src={programme_2} alt="programme 1" />
        <div className="caption programme-3">
          <p>Tailored, Practical Solutions</p>
          <button className="btn">Read More</button>
        </div>
      </div>
      <div className="programe">
        <img src={programme_3} alt="programme 1" />
        <div className="caption programme-3">
          <p>Empowering Leaders and Teams</p>
          <button className="btn">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Programmes;
