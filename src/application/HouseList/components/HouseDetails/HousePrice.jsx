import React from 'react';
import { Col, Row } from '@douyinfe/semi-ui';
import './index.css';

export default function HousePrice() {
  return (
    <div className="part housePrice">
      <Row className="margin-bottom-10">
        <Col xs={{ offset: 1, span: 23 }}>
          <span className="big-font-size">价格走势</span>
        </Col>
      </Row>
      <Row className="margin-bottom-10">
        <Col xs={{ offset: 1, span: 10 }}>
          <div className="margin-bottom-10 title">12月小区均价</div>
          <div className="value">95591元/平</div>
        </Col>
        <Col xs={{ span: 1 }}>
          <div className="line-vertical"></div>
        </Col>
        <Col xs={{ offset: 1, span: 10 }}>
          <div className="margin-bottom-10 title">比上月</div>
          <div className="value">
            0.43%<div className="icon"></div>
          </div>
        </Col>
      </Row>
      <hr className="hr-style" />
      <Row>
        <Col xs={{ offset: 1, span: 22 }}>
          <div className="figure"></div>
        </Col>
      </Row>
    </div>
  );
}
