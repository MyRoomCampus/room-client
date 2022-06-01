import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import { Link, useNavigate } from "react-router-dom";
import cookie from "react-cookies";
import { Notification, Pagination } from "@douyinfe/semi-ui";

import "./style.css";
import { getBatchHouseList } from "../../api/request";
//手动mock
function HouseList(props) {
  const [houseList, setHouseList] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  function onPageChange(currentPage) {
    setPage(currentPage);
  }
  let userData = cookie.load("userData");

  if (!userData) {
    // Notification.warning({
    //   title: "请前往登陆",
    //   duration: 3,
    //   theme: "light",
    //   position: "top",
    // });
    navigate("/login");
  }
  useEffect(() => {
    let userData = cookie.load("userData");

    if (!userData) {
      // Notification.warning({
      //   title: "请前往登陆",
      //   duration: 3,
      //   theme: "light",
      //   position: "top",
      // });
      navigate("/login");
    }
    getHouseList({ page: page, perpage: 20 });
  }, [page]);
  const getHouseList = async (params) => {
    let response = await getBatchHouseList(params);
    setHouseList(response.data.data);
  };

  return (
    <>
      <div className="house-list">
        {houseList.map((v, index) => (
          <Link
            key={index}
            style={{ textDecoration: "none", color: "black" }}
            to={`/activity/${v.id}`}
          >
            <Card id={v.id} option={index} page={page} key={index}></Card>
          </Link>
        ))}
      </div>
      <Pagination
        total={200}
        currentPage={page}
        onPageChange={onPageChange}
      ></Pagination>
      <div className="blank"></div>
    </>
  );
}

export default React.memo(HouseList);
