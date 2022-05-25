import React from 'react';
import { Col, Row } from '@douyinfe/semi-ui';
import HomeCard from '../HouseCards/HouseCard';
import './index.css';

export default function HouseSource() {
  return (
    <div className="part houseSource padding-bottom-10">
      <Row className="padding-top-20">
        <Col xs={{ offset: 1, span: 22 }} className="flex-between">
          <span className="part-title">同小区房源（30）</span>
          <span>
            <a href="https://www.google.com" className="link-style">
              查看全部 {'>'}
            </a>
          </span>
        </Col>
      </Row>
      <Row className="padding-top-20">
        <Col xs={{ offset: 1, span: 11 }}>
          <HomeCard></HomeCard>
        </Col>
        <Col xs={{ span: 11 }}>
          <HomeCard></HomeCard>
        </Col>
      </Row>
    </div>
  );
}
