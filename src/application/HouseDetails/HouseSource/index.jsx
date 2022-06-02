import React from 'react';
import { Col, Row } from '@douyinfe/semi-ui';
import '../index.css';
import './style.css';
import Card from '../../../components/Card';

export default function HouseSource() {
  return (
    <div className="part houseSource padding-bottom-10">
      <Row className="padding-top-10">
        <Col xs={{ span: 24 }} className="flex-between">
          <span className="part-title">同小区房源（30）</span>
          <span>
            <a href="#top" className="link-style">
              查看全部 {'>'}
            </a>
          </span>
        </Col>
      </Row>
      <Row className="padding-top-20">
        <Col xs={{ span: 24 }}>
          <Card
            id={234423}
            option={Math.floor(Math.random() * 100 + 1)}
            page={Math.floor(Math.random() * 20 + 1)}
          ></Card>
        </Col>
        <Col xs={{ span: 24 }}>
          <Card
            id={659969}
            option={Math.floor(Math.random() * 100 + 1)}
            page={Math.floor(Math.random() * 20 + 1)}
          ></Card>
        </Col>
      </Row>
    </div>
  );
}
