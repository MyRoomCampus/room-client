import React from 'react';
import { Col, Row } from '@douyinfe/semi-ui';
import './index.css';

export default function HouseManager() {
  return (
    <div className="part houseManager">
      <Row className="line"><span className="title">推荐经纪人</span></Row>
      <Row gutter={[0, 0]}>
        <Col xs={{ offset: 1, span: 3 }}>
          <div className="avatar"></div>
        </Col>
        <Col xs={{ offset: 1, span: 11 }}>
          <div className="details">
            <div className="info">
              <span>李梦</span>
              <span>我爱我家</span>
            </div>
            <div className="credit">
              <span>3.7</span>
              <span>服务分</span>
              <span>2.3小区熟悉度</span>
            </div>
            <div className="service">
              <span>服务标杆</span>
              <span>闪电回复</span>
            </div>
          </div>
        </Col>
        <Col xs={{ offset: 1, span: 3 }}>
          <div className="icon"></div>
        </Col>
        <Col xs={{ offset: 1, span: 3 }}>
          <div className="icon"></div>
        </Col>
      </Row>
    </div>
  );
}
