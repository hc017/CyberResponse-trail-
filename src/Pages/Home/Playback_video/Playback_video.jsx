import React from "react";
import "./Playback_video.css";

const Playback_video = () => {
  return (
    <div>
      <div className="PV_container">
        <video className="PV_video" controls src="https://www.youtube.com/watch?v=inWWhr5tnEA"></video>
      </div>
    </div>
  );
};

export default Playback_video;
