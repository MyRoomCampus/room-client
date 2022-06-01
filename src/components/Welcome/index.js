import React from "react";
import img from "./images/welcome.PNG";
import "./style.css";
export default function Welcome(props) {
    return (
      <div>
        <img width="100%" height="100%" src={img} alt="" />
        <div className="title-container"> Welcome to MyRoom</div>
      </div>
    );
}
