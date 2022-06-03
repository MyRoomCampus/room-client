import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getJsonById } from "../../api/request";
import { Button } from "@douyinfe/semi-ui";
import { render_json } from "../../api/utils";
import "./style.css";
import "../../assets/global-style.css";
function ActivityPage(props) {
  const { id } = useParams();
  const [jsonSchema, setJsonScheme] = useState([]);
  const getJsonSchema = (params) => {
    getJsonById(params)
      .then((response) => {
        console.log(response);
        setJsonScheme(JSON.parse(response.data.data.data).data);
      })
      .catch((e) => {
        console.log(e);
        setJsonScheme([]);
      });
  };
  useEffect(() => {
    getJsonSchema(id);
  }, [id]);
  const navigate = useNavigate();

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
            type="danger"
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
