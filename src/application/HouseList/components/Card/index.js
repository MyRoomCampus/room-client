import React, { useEffect } from "react";
import "./index.scss";

function Card(props) {
  const { cardData } = props;
  return (
    <>
      <div className="card-container">
        <img src={cardData.image} alt="加载失败" />
        <div className="content-container">
          <div className="title">{cardData.title}</div>
          <div className="area">
            {cardData.location}|{cardData.area}
          </div>
          <div className="tags">
            {cardData.tags.map((v, index) => {
              return (
                <div className="tags-item" key={index}>
                  {v}
                </div>
              );
            })}
          </div>
          <div className="price">{cardData.price}元/平起</div>
        </div>
      </div>
    </>
  );
}

export default React.memo(Card);
