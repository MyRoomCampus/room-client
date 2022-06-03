import React, { useEffect, useState } from "react";
import "./style.css";
import { getCount } from "../../api/utils";
import { getHouseInfo } from "../../api/request";
import Tag from "./Tag";
import { useLocation } from "react-router-dom";

function Card(props) {
  const { id, option, page } = props;
  const [cardData, setCardData] = useState({});
  let path = useLocation().pathname.split("/")[1];
  // const getCardInfo = (id) => {
  //   getHouseInfo(id)
  //     .then((response) => {
  //       let p = {
  //         ...response.data.data,
  //         image: require(`./assets/${((option * page) % 20) + 1}.jpg`),
  //         tags: ["值得购买", "住宅", "购物方便", "公交直达"],
  //       };
  //       setCardData(p);
  //       console.log("---");
  //       console.log(cardData);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };
  useEffect(() => {
    const getCardInfoT = (id) => {
      getHouseInfo(id)
        .then((response) => {
          let p = {
            ...response.data.data,
            image: require(`./assets/${((option * page) % 20) + 1}.jpg`),
            tags: ["值得购买", "住宅", "购物方便", "公交直达"],
          };
          setCardData(p);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    getCardInfoT(id);
  }, [id, option, page]);
  return (
    <>
      {JSON.stringify(cardData) === "{}" ? null : (
        <div className="card-container">
          {cardData.haveProjectPublished === true && path === "houselist" ? (
            <Tag></Tag>
          ) : null}
          <img src={cardData.image} alt="加载失败" />
          <div className="content-container">
            <div className="title">{cardData.listingName}</div>

            <div className="area">
              {cardData.cityName} | {cardData.neighborhoodName} |{" "}
              {cardData.squaremeter / 100}m²
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
            <div className="price">
              {getCount(cardData.pricing / 100)}
              <span className="unit-price">
                {(cardData.pricing / cardData.squaremeter).toFixed(2)}元/平
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default React.memo(Card);
