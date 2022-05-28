import React from 'react';
import { Col, Row } from '@douyinfe/semi-ui';
import { getHouseInfo } from '../../../../fakeData';
import { useRequest } from 'ahooks';
import HouseCarousel from './HouseCarousel';
import HouseData from './HouseData';
import HouseManager from './HouseManager';
import HouseTest from './HouseTest';
import HouseAssess from './HouseAssess';
import HouseNeighbor from './HouseNeighbor';
import HousePrice from './HousePrice';
import HouseSource from './HouseSource';
import HouseNeighborSource from './HouseNeighborSource';
import HouseFooter from './HouseFooter';

export default function HomeDetail() {
  const { data, loading } = useRequest(getHouseInfo);

  return (
    <Row>
      <Col xs={24} lg={{ span: 12, offset: 6 }}>
        <HouseCarousel></HouseCarousel>
        <HouseData data={data} loading={loading}></HouseData>
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
