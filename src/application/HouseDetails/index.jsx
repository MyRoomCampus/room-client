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
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import "./index.css";
import "./style.css";

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
        // console.log(response);
        setHouseDetails(response.data.data);
        setLoading(false);
        // console.log("---");
        // console.log(houseDetails);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    getHouseDetails(id);
  }, []);
  const path = useLocation().pathname.split("/")[1];
  const navigate = useNavigate();
  const handleNavigate = () => {
    if (path === "activity") {
      navigate("/");
    }
    else if (path === "houseDetails") {
      navigate(`/activity/${id}`);
    }
  }

  return (
    <>
      {JSON.stringify(houseDetails) === "{}" ? null : (
        <div>
          <div className='back-nav'>
            <Button onClick={handleNavigate} style={{ height: "50px" }} theme="solid">{`<`}</Button>
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
