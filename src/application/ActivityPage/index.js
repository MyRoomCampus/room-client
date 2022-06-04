import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getJsonById } from "../../api/request";
import { Button } from "@douyinfe/semi-ui";
import { render_json } from "../../api/utils";
import cookie from "react-cookies";
import "./style.css";
import "../../assets/global-style.css";
import { SignalRClient } from "../../api/signalrClient";
function ActivityPage(props) {
  const { id } = useParams();
  const [jsonSchema, setJsonScheme] = useState([]);
  const getJsonSchema = (params) => {
    getJsonById(params)
      .then((response) => {
        if (response.data.data.data !== "[]") {
          setJsonScheme(JSON.parse(response.data.data.data).data);
        }
      })
      .catch((e) => {
        setJsonScheme([]);
      });
  };
  useEffect(() => {
    getJsonSchema(id);
  }, [id]);
  const navigate = useNavigate();
  let userData = cookie.load("userData");

  if (!userData) {
    navigate("/login");
  }

  const accessToken =  localStorage.getItem('ROOM_JWT_TOKEN_KEY')

  const client = new SignalRClient(accessToken);

  const connect = async() => {
    await client.startUp()
    // 发送 houseId 即可建立通讯
    await client.sendVisit(id)
  }

  useEffect(() => {
    void connect()
  })

  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <>
      <div className="activity-page">
        <div className="back-nav">
          <Button
            onClick={handleNavigate}
            style={{ height: "50px" }}
            theme="solid"
            type="tertiary"
          >
            <span className="iconfont">&#xe8a4;</span>
          </Button>
        </div>
        <div>{render_json(jsonSchema, id)}</div>
      </div>
    </>
  );
}

export default React.memo(ActivityPage);
