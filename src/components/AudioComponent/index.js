import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { px2vw } from "../../api/utils";
import { px2vh } from "../../api/utils";

function AudioComponent(props) {
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
      <AudioPlayer autoPlay src={data} onPlay={(e) => console.log("onPlay")} />
    </div>
  );
}

export default AudioComponent;
