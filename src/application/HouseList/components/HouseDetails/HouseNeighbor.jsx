import React from 'react';
import { Col, Row, Nav } from '@douyinfe/semi-ui';
import './index.css';

export default function HouseNeighbor() {
  return (
    <div className="part houseNeighbor">
      <Row>
        <Col xs={{ offset: 1, span: 5 }}>
          <span className="big-font-size">周边配套</span>
        </Col>
        <Col xs={{ offset: 13, span: 5 }}>
          <a href="https://www.google.com" className="link-style">
            查看全部 {'>'}
          </a>
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 24 }}>
          <div className="map"></div>
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 24 }}>
          <MapNavigation></MapNavigation>
        </Col>
      </Row>
    </div>
  );
}

function MapNavigation() {
  return (
    <div style={{ width: '100%' }}>
      <Nav
        mode={'horizontal'}
        items={[
          { itemKey: 'transport', text: '交通' },
          { itemKey: 'education', text: '教育' },
          { itemKey: 'medical', text: '医疗' },
          { itemKey: 'life', text: '生活' },
          { itemKey: 'entertainment', text: '休闲' },
        ]}
        onSelect={(key) => console.log(key)}
        style={{ border: 'none' }}
      />
      <Row className="margin-bottom-10">
        <Col xs={{ offset: 1, span: 1 }}></Col>
        <Col xs={{ span: 15 }}>昌平（地铁昌平线）</Col>
        <Col xs={{ span: 3 }}>直线</Col>
        <Col xs={{ span: 3 }}>0.1km</Col>
        <Col xs={{ span: 1 }}></Col>
      </Row>
      <Row className="margin-bottom-10">
        <Col xs={{ offset: 1, span: 1 }}></Col>
        <Col xs={{ span: 15 }}>昌平西关环岛（493路;872路;843...）</Col>
        <Col xs={{ span: 3 }}>直线</Col>
        <Col xs={{ span: 3 }}>0.2km</Col>
        <Col xs={{ span: 1 }}></Col>
      </Row>
      <Row className="margin-bottom-10">
        <Col xs={{ offset: 1, span: 1 }}></Col>
        <Col xs={{ span: 15 }}>昌平西关环岛（493路;872路）</Col>
        <Col xs={{ span: 3 }}>直线</Col>
        <Col xs={{ span: 3 }}>0.5km</Col>
        <Col xs={{ span: 1 }}></Col>
      </Row>
    </div>
  );
}
