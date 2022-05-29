import React from 'react';
import { Col, Row, Skeleton } from '@douyinfe/semi-ui';
import HomeCard from '../../HouseCards/HouseCard';
import '../index.css';
import './style.css';

export default function HouseNeighborSource(props) {
  const { loading } = props;
  return (
    <div className="part houseNeighborSource padding-bottom-15">
      <Row className="padding-top-10">
        <Col xs={{ span: 24 }}>
          {loading ? (
            <Skeleton.Button></Skeleton.Button>
          ) : (
            <span className="part-title">周边房源</span>
          )}
        </Col>
      </Row>
      <Row className="padding-top-20">
        <Col xs={{ span: 24 }}>
          {loading ? (
            <Skeleton.Button
              style={{ width: '100%', height: '120px' }}
            ></Skeleton.Button>
          ) : (
            <HomeCard></HomeCard>
          )}
        </Col>
      </Row>
      <Row className="padding-top-5">
        <Col xs={{ span: 24 }}>
          {loading ? (
            <Skeleton.Button
              style={{ width: '100%', height: '120px' }}
            ></Skeleton.Button>
          ) : (
            <HomeCard></HomeCard>
          )}
        </Col>
      </Row>
      <Row className="padding-top-5">
        <Col xs={{ span: 24 }}>
          {loading ? (
            <Skeleton.Button
              style={{ width: '100%', height: '120px' }}
            ></Skeleton.Button>
          ) : (
            <HomeCard></HomeCard>
          )}
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 24 }}>
          {loading ? (
            <Skeleton.Button
              style={{ width: '100%', height: '40px', marginTop: '10px' }}
            ></Skeleton.Button>
          ) : (
            <div className="more-source">
              <a href="https://www.google.com" className="link-style">
                查看在售228套房源 {'>'}
              </a>
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
}
