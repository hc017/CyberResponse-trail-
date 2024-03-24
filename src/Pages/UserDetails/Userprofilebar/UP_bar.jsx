import React from "react";
import "./UP_bar.css";
import { Link } from "react-router-dom";

const UP_bar = () => {
  return (
    <div className="UP_container">
      <div className="ud_text">
        <p className="ud_text_in">User Details</p>
      </div>
      <div className="ud_mail">
        <p className="ud_mail_text">abc@gmail.com</p>
      </div>
      <div className="log_btn">
        <Link className="log_3">
          <p className="log_2">Logout</p>
        </Link>
      </div>
    </div>
  );
};

export default UP_bar;
