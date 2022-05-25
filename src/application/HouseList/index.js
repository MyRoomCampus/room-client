import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import headImg from "./assets/head.png";
import "./style.css";
//手动mock
const houseListMock = [
  {
    image: headImg,
    title: "中海云熙",
    area: "124-160",
    location: "大兴 大兴区",
    tags: ["值得购买", "住宅", "购物方便", "公交直达"],
    price: "19000",
  },
  {
    image: headImg,
    title: "中海云熙",
    area: "124-160",
    location: "大兴 大兴区",
    tags: ["值得购买", "住宅", "购物方便", "公交直达"],
    price: "19000",
  },
  {
    image: headImg,
    title: "中海云熙",
    area: "124-160",
    location: "大兴 大兴区",
    tags: ["值得购买", "住宅", "购物方便", "公交直达"],
    price: "19000",
  },
  {
    image: headImg,
    title: "中海云熙",
    area: "124-160",
    location: "大兴 大兴区",
    tags: ["值得购买", "住宅", "购物方便", "公交直达"],
    price: "19000",
  },
  {
    image: headImg,
    title: "中海云熙",
    area: "124-160",
    location: "大兴 大兴区",
    tags: ["值得购买", "住宅", "购物方便", "公交直达"],
    price: "19000",
  },
  {
    image: headImg,
    title: "中海云熙",
    area: "124-160",
    location: "大兴 大兴区",
    tags: ["值得购买", "住宅", "购物方便", "公交直达"],
    price: "19000",
  },
  {
    image: headImg,
    title: "中海云熙",
    area: "124-160",
    location: "大兴 大兴区",
    tags: ["值得购买", "住宅", "购物方便", "公交直达"],
    price: "19000",
  },
  {
    image: headImg,
    title: "中海云熙",
    area: "124-160",
    location: "大兴 大兴区",
    tags: ["值得购买", "住宅", "购物方便", "公交直达"],
    price: "19000",
  },
  {
    image: headImg,
    title: "中海云熙",
    area: "124-160",
    location: "大兴 大兴区",
    tags: ["值得购买", "住宅", "购物方便", "公交直达"],
    price: "19000",
  },
];
function HouseList(props) {
  const [houseList, setHouseList] = useState(houseListMock);
  useEffect(() => {
    // 请求，改变list
  });
  return (
    <>
      <div className="house-list">
        {houseList.map((v, index) => (
          <Card cardData={v} key={index}></Card>
        ))}
      </div>
    </>
  );
}

export default React.memo(HouseList);
