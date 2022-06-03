import React from "react";
import { px2vw, px2vh } from "../../api/utils";

function TextComponent(props) {
  const { style, data } = props;
  let obj = {};
  for (let key in style) {
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
    <>
      <div style={{ ...obj }}>{data}</div>
    </>
  );
}

export default TextComponent;
