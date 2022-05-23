import React from 'react';
import { Col, Row } from '@douyinfe/semi-ui';
import HomeCard from '../HouseCards/HouseCard';
import './index.css';

export default function HouseSource() {
  return (
    <div className="part houseSource">
      <Row className="margin-bottom-10">
        <Col xs={{ offset: 1, span: 9 }}>
          <span className="big-font-size">同小区房源（30）</span>
        </Col>
        <Col xs={{ offset: 8, span: 5 }}>
          <a href="https://www.google.com" className="link-style">
            查看全部 {'>'}
          </a>
        </Col>
      </Row>
      <Row>
        <Col xs={{ offset: 1, span: 11 }}>
          <HomeCard></HomeCard>
        </Col>
        <Col xs={{ offset: 1, span: 11 }}>
          <HomeCard></HomeCard>
        </Col>
      </Row>
    </div>
  );
}
