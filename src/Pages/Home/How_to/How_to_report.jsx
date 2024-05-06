import React, { useState, useEffect } from "react";
import "../JoinUs/JoinUs.css";
import { useInView } from "react-intersection-observer";
import report from "./Report_home.png";
import choice from "./choice.png";
import check from "./check.png";
import suspect from "./suspect.png";
import "./How_to_report.css";
import reportVideo from "./report.mp4"; // Import the video file
import bgImage from "./bbg.jpg";

const How_to_report = () => {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);

  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.5,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.5,
  });
  const { ref: ref3, inView: inView3 } = useInView({
    threshold: 0.5,
  });
  const { ref: ref4, inView: inView4 } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView1) {
      setIsVisible1(true);
    }
  }, [inView1]);

  useEffect(() => {
    if (inView2) {
      setIsVisible2(true);
    }
  }, [inView2]);

  useEffect(() => {
    if (inView3) {
      setIsVisible3(true);
    }
  }, [inView3]);

  useEffect(() => {
    if (inView4) {
      setIsVisible4(true);
    }
  }, [inView4]);

  return (
    <div style={{ backgroundImage: `url(${bgImage})`}}>
      <div className="patterns">
        <svg width="100%" height="100%">
          <text x="50%" y="60%" textAnchor="middle">
            How to Report?
          </text>
        </svg>
      </div>
      <div className="video-placeholder">
        <video autoPlay loop muted playsInline>
          <source src={reportVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="JoinUsContainer">
        <div className="CombineText">
          <div className="TextContentTwoJoin">
            <div className="ImgJoin">
              <img src={report} alt="About" />
            </div>
          </div>
          <div className="AboutTextContentJoi" ref={ref1}>
            <div className={`AboutUsText ${isVisible1 ? "isVisible" : ""}`}>
              <h1 className="TextDecoration">1. Start by clicking "Report Incident"</h1>
            </div>
          </div>
        </div>

        <div className="JoinUsContainer">
          <div className="CombineText">
            <div className="TextContentJoin" ref={ref2}>
              <div className={`JoinUsText ${isVisible2 ? "isVisible" : ""}`}>
                <h1 className="TextDecoration">2. Choose the very right options</h1>
              </div>
            </div>
            <div className="TextContentTwoJoin">
              <div className="ImgJoin">
                <img src={choice} alt="Join" />
              </div>
            </div>
          </div>
        </div>

        <div className="CombineText">
          <div className="TextContentTwoJoin">
            <div className="ImgJoin">
              <img src={check} alt="About" />
            </div>
          </div>
          <div className="AboutTextContentJoi" ref={ref3}>
            <div className={`AboutUsText ${isVisible3 ? "isVisible" : ""}`}>
              <h1 className="TextDecoration">3. Fill in the correct information.</h1>
            </div>
          </div>
        </div>

        <div className="JoinUsContainer">
          <div className="CombineText">
            <div className="TextContentJoin" ref={ref4}>
              <div className={`JoinUsText ${isVisible4 ? "isVisible" : ""}`}>
                <h1 className="TextDecoration">4. Submit the incident to be solved!</h1>
              </div>
            </div>
            <div className="TextContentTwoJoin">
              <div className="ImgJoin">
                <img src={suspect} alt="Join" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default How_to_report;
