import React from 'react';
import { Col, Row } from '@douyinfe/semi-ui';
import '../index.css';
import './style.css';
import Card from '../../../components/Card';

export default function HouseNeighborSource() {
  return (
    <div className="part houseNeighborSource padding-bottom-15">
      <Row className="padding-top-10">
        <Col xs={{ span: 24 }}>
          <span className="part-title">周边房源</span>
        </Col>
      </Row>
      <Row className="padding-top-20">
        <Col xs={{ span: 24 }}>
          <Card
            id={223946}
            option={Math.floor(Math.random() * 100 + 1)}
            page={Math.floor(Math.random() * 20 + 1)}
          ></Card>
        </Col>
      </Row>
      <Row className="padding-top-5">
        <Col xs={{ span: 24 }}>
          <Card
            id={227294}
            option={Math.floor(Math.random() * 100 + 1)}
            page={Math.floor(Math.random() * 20 + 1)}
          ></Card>
        </Col>
      </Row>
      <Row className="padding-top-5">
        <Col xs={{ span: 24 }}>
          <Card
            id={234423}
            option={Math.floor(Math.random() * 100 + 1)}
            page={Math.floor(Math.random() * 20 + 1)}
          ></Card>
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 24 }}>
          <div className="more-source">
            <a href="#top" className="link-style">
              查看在售228套房源 {'>'}
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
}
