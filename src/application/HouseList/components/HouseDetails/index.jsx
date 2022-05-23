import React from 'react';
import HouseCarousel from './HouseCarousel';
import HouseData from './HouseData';
import HouseManager from './HouseManager';
import HouseTest from './HouseTest';
import HouseAssess from './HouseAssess';
import HouseNeighbor from './HouseNeighbor.jsx';
import HousePrice from './HousePrice';
import HouseSource from './HouseSource';
import HouseNeighborSource from './HouseNeighborSource';
import HouseFooter from './HouseFooter';
import { Col, Row } from '@douyinfe/semi-ui';

export default function HomeDetail() {
  return (
    <Row>
      <Col xs={24} lg={{ span: 12, offset: 6 }}>
        <HouseCarousel></HouseCarousel>
        <HouseData></HouseData>
        <HouseManager></HouseManager>
        <HouseTest></HouseTest>
        <HouseAssess></HouseAssess>
        <HouseNeighbor></HouseNeighbor>
        <HousePrice></HousePrice>
        <HouseSource></HouseSource>
        <HouseNeighborSource></HouseNeighborSource>
        <HouseFooter></HouseFooter>
      </Col>
    </Row>
  );
}
