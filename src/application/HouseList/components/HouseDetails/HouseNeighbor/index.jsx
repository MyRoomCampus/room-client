import React from 'react';
import { Col, Row, Tabs, TabPane, Skeleton } from '@douyinfe/semi-ui';
import { BusIcon } from '../Icon';
import '../index.css';
import './style.css';

export default function HouseNeighbor(props) {
  const { loading } = props;
  return (
    <div className="part houseNeighbor padding-bottom-15">
      <Row className="padding-top-10" type="flex" align="middle">
        <Col xs={{ span: 8 }}>
          {loading ? (
            <Skeleton.Button></Skeleton.Button>
          ) : (
            <span className="part-title">周边配套</span>
          )}
        </Col>
        <Col style={{ marginLeft: 'auto' }}>
          {loading ? (
            <Skeleton.Button></Skeleton.Button>
          ) : (
            <a href="https://www.google.com" className="link-style">
              查看全部 {'>'}
            </a>
          )}
        </Col>
      </Row>
      <Row className="padding-top-20">
        <Col xs={{ span: 24 }}>
          {loading ? (
            <Skeleton.Button
              style={{ width: '100%', height: '200px' }}
            ></Skeleton.Button>
          ) : (
            <div className="map"></div>
          )}
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 24 }}>
          {loading ? (
            <Skeleton.Button
              style={{ width: '100%', height: '140px', marginTop: '10px' }}
            ></Skeleton.Button>
          ) : (
            <MapNavigation></MapNavigation>
          )}
        </Col>
      </Row>
    </div>
  );
}

function MapNavigation() {
  return (
    <div style={{ width: '100%' }}>
      <Tabs>
        <TabPane itemKey="transport" tab="交通">
          <MapNavContent></MapNavContent>
        </TabPane>
        <TabPane itemKey="education" tab="教育">
          <MapNavContent></MapNavContent>
        </TabPane>
        <TabPane itemKey="medical" tab="医疗">
          <MapNavContent></MapNavContent>
        </TabPane>
        <TabPane itemKey="life" tab="生活">
          <MapNavContent></MapNavContent>
        </TabPane>
        <TabPane itemKey="entertainment" tab="休闲">
          <MapNavContent></MapNavContent>
        </TabPane>
      </Tabs>
    </div>
  );
}

function MapNavContent() {
  return (
    <div className="padding-top-10">
      <Row>
        <Col xs={{ span: 2 }}>
          <BusIcon></BusIcon>
        </Col>
        <Col xs={{ span: 16 }} className="padding-left-5">
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
        <Col xs={{ span: 2 }}>
          <BusIcon></BusIcon>
        </Col>
        <Col xs={{ span: 16 }} className="padding-left-5">
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
        <Col xs={{ span: 2 }}>
          <BusIcon></BusIcon>
        </Col>
        <Col xs={{ span: 16 }} className="padding-left-5">
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
