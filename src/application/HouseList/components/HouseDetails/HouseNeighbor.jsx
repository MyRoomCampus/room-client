import React from 'react';
import { Col, Row, Nav } from '@douyinfe/semi-ui';
import { BusIcon } from './Icon';
import './index.css';

export default function HouseNeighbor() {
  return (
    <div className="part houseNeighbor padding-bottom-15">
      <Row className="padding-top-20" type="flex" align="middle">
        <Col xs={{ offset: 1, span: 7 }}>
          <span className="part-title">周边配套</span>
        </Col>
        <Col style={{ marginLeft: 'auto' }}>
          <a href="https://www.google.com" className="link-style">
            查看全部 {'>'}
          </a>
        </Col>
        <Col xs={{ span: 1 }}></Col>
      </Row>
      <Row className="padding-top-20">
        <Col xs={{ offset: 1, span: 22 }}>
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
      <Row>
        <Col xs={{ offset: 1, span: 1 }}>
          <BusIcon></BusIcon>
        </Col>
        <Col xs={{ span: 15 }} className="padding-left-5">
          昌平（地铁昌平线）
        </Col>
        <Col xs={{ span: 3 }} className="highlight-attr-name">
          直线
        </Col>
        <Col xs={{ span: 3 }} className="highlight-attr-name">
          0.1km
        </Col>
      </Row>
      <Row className="padding-top-10">
        <Col xs={{ offset: 1, span: 1 }}>
          <BusIcon></BusIcon>
        </Col>
        <Col xs={{ span: 15 }} className="padding-left-5">
          昌平西关环岛（493路;872 ...）
        </Col>
        <Col xs={{ span: 3 }} className="highlight-attr-name">
          直线
        </Col>
        <Col xs={{ span: 3 }} className="highlight-attr-name">
          0.2km
        </Col>
      </Row>
      <Row className="padding-top-10">
        <Col xs={{ offset: 1, span: 1 }}>
          <BusIcon></BusIcon>
        </Col>
        <Col xs={{ span: 15 }} className="padding-left-5">
          昌平西关环岛（493路;872路）
        </Col>
        <Col xs={{ span: 3 }} className="highlight-attr-name">
          直线
        </Col>
        <Col xs={{ span: 3 }} className="highlight-attr-name">
          0.5km
        </Col>
      </Row>
    </div>
  );
}
