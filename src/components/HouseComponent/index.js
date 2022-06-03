import React from "react";
import { px2vw, px2vh } from "../../api/utils";
import Card from "../Card";
import { Link } from "react-router-dom";
function HouseComponent(props) {
  const { style, pid } = props;
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
      <div style={{ ...obj }}>
        <Link
          key={props.id}
          style={{ textDecoration: "none", color: "black" }}
          to={`/houseDetails/${pid}`}
        >
          <Card
            id={pid}
            option={Math.floor(Math.random() * 100 + 1)}
            page={Math.floor(Math.random() * 20 + 1)}
          ></Card>
        </Link>
      </div>
    </>
  );
}

export default HouseComponent;
