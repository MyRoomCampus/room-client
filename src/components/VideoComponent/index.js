import React from "react";
import { Player } from "video-react";
import "video-react/dist/video-react.css";
import { px2vw, px2vh } from "../../api/utils";

function VideoComponent(props) {
  const { style, data } = props;
  let obj = {};
  for (let key in style) {
    // console.log(key);
    // console.log(style[key]);
    if (typeof style[key] === "string" && style[key].endsWith("px")) {
      if (style[key] === "height" || style[key] === "top") {
        obj[key] = px2vh(
          Number.parseInt(style[key].substring(0, style[key].length - 1))
        );
      } else {
        obj[key] = px2vw(
          Number.parseInt(style[key].substring(0, style[key].length - 1))
        );
      }
    } else if (typeof style[key] === "number" && Math.abs(style[key]) >= 1) {
      obj[key] = px2vw(style[key]);
    }
  }
  obj = { ...style, ...obj };
  return (
    <div style={{ ...obj }}>
      <Player>
        <source src={data} type="video/mp4" />
      </Player>
    </div>
  );
}

export default VideoComponent;
