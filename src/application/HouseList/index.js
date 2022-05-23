import React from "react";
import HouseCards from "./components/HouseCards";
import "./style.css";

function HouseList(props) {
  return (
    <>
      <div>房屋列表k</div>
      <HouseCards></HouseCards>
    </>
  );
}

export default React.memo(HouseList);
