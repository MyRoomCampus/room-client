import React, { useState, useEffect } from 'react';
import { Col, Row, Button } from '@douyinfe/semi-ui';
import { getHouseInfo } from '../../api/request';
import HouseCarousel from './HouseCarousel';
import HouseData from './HouseData';
import HouseManager from './HouseManager';
import HouseTest from './HouseTest';
import HouseAssess from './HouseAssess';
import HouseNeighbor from './HouseNeighbor';
import HousePrice from './HousePrice';
import HouseSource from './HouseSource';
import HouseNeighborSource from './HouseNeighborSource';
import HouseFooter from './HouseFooter';
import { useNavigate, useParams } from 'react-router-dom';
import cookie from "react-cookies";
import "./index.css";
import "./style.css";
import "../../assets/global-style.css"

export default function HomeDetail(props) {
  let { pid } = props;
  let { id } = useParams();
  if (pid !== undefined) {
    id = pid;
  }
  const [houseDetails, setHouseDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const getHouseDetails = (id) => {
    getHouseInfo(id)
      .then((response) => {
        setHouseDetails(response.data.data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    getHouseDetails(id);
  }, [id]);
  // const path = useLocation().pathname.split("/")[1];
  const navigate = useNavigate();
  let userData = cookie.load("userData");

  if (!userData) {
    navigate("/login");
  }
  const handleNavigate = () => {
    // if (!haveProject) {
    //   navigate("/");
    // }
    // else {
    //   navigate(`/activity/${id}`);
    // }
    if (houseDetails.haveProjectPublished) {
      navigate(`/activity/${id}`);
    } else {
      navigate("/");
    }
  }

  return (
    <>
      {JSON.stringify(houseDetails) === "{}" ? null : (
        <div id="top">
          <div className='back-nav'>
            <Button onClick={handleNavigate} style={{ height: "50px" }} theme="solid" type='tertiary'><span className="iconfont">&#xe8a4;</span></Button>
          </div>
          <Row>
            <Col xs={24} lg={{ span: 12, offset: 6 }}>
              <HouseCarousel></HouseCarousel>
              <HouseData data={houseDetails} loading={loading}></HouseData>
              <HouseManager></HouseManager>
              <HouseTest></HouseTest>
              <HouseAssess></HouseAssess>
              <HouseNeighbor></HouseNeighbor>
              <HousePrice></HousePrice>
              <HouseSource></HouseSource>
              <HouseNeighborSource></HouseNeighborSource>
              <HouseFooter></HouseFooter>
            </Col>
          </Row></div>
      )
      }
    </>
  );
}
