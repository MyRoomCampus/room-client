import React from 'react';
import { Col, Row } from '@douyinfe/semi-ui';
import HomeCard from '../HouseCards/HouseCard';
import './index.css';

export default function HouseNeighborSource() {
  return (
    <div className="part houseNeighborSource">
      <Row className="margin-bottom-10">
        <Col xs={{ offset: 1, span: 23 }}>
          <span className="big-font-size">周边房源</span>
        </Col>
      </Row>
      <Row>
        <Col xs={{ offset: 1, span: 22 }}>
          <HomeCard></HomeCard>
        </Col>
      </Row>
      <Row>
        <Col xs={{ offset: 1, span: 22 }}>
          <HomeCard></HomeCard>
        </Col>
      </Row>
      <Row>
        <Col xs={{ offset: 1, span: 22 }}>
          <HomeCard></HomeCard>
        </Col>
      </Row>
      <Row>
        <Col xs={{ offset: 1, span: 22 }}>
          <div className="more">
            <a href="https://www.google.com">查看在售228套房源 {'>'}</a>
          </div>
        </Col>
      </Row>
    </div>
  );
}
