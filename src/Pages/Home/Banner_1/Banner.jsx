import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="B1_container">
      <div className="B1_left">
       <div className="leftimg"></div>
      </div>
      <div className="B1_right">
        <div className="B1_right_inner">
          <p className="B1_right_title">
            Empower your defense against <br /> digital threats. <br />{" "}
            Cybersoochna:
          </p>
          <p className="B1_right_subtitile">
            Securely reports cybercrime incidents. <br /> Provides expert investigation
            and case management. <br /> Offers resources to stay informed and
            protected.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
