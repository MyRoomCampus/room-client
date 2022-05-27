import React from 'react';
import { Col, Row } from '@douyinfe/semi-ui';
import HomeCard from '../../HouseCards/HouseCard';
import '../index.css';
import './style.css';

export default function HouseNeighborSource() {
  return (
    <div className="part houseNeighborSource padding-bottom-15">
      <Row className="padding-top-20">
        <Col xs={{ offset: 1, span: 23 }}>
          <span className="part-title">周边房源</span>
        </Col>
      </Row>
      <Row className="padding-top-20">
        <Col xs={{ offset: 1, span: 22 }}>
          <HomeCard></HomeCard>
        </Col>
      </Row>
      <Row className="padding-top-5">
        <Col xs={{ offset: 1, span: 22 }}>
          <HomeCard></HomeCard>
        </Col>
      </Row>
      <Row className="padding-top-5">
        <Col xs={{ offset: 1, span: 22 }}>
          <HomeCard></HomeCard>
        </Col>
      </Row>
      <Row>
        <Col xs={{ offset: 1, span: 22 }}>
          <div className="more-source">
            <a href="https://www.google.com" className="link-style">
              查看在售228套房源 {'>'}
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
}
