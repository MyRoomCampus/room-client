import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getJsonById, getJsonByIdFake } from "../../api/request";
import { Button } from "@douyinfe/semi-ui";
import { render_json } from "../../api/utils";
import "./style.css";
function ActivityPage(props) {
  const { id } = useParams();
  const [jsonSchema, setJsonScheme] = useState([]);
  const getJsonSchema = (params) => {
    getJsonByIdFake(params)
      .then((response) => {
        console.log(response);
        setJsonScheme(response.data.data.data);
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
          >{`<`}</Button>
        </div>
        <div>{render_json(jsonSchema, id)}</div>
      </div>
    </>
  );
}

export default React.memo(ActivityPage);
