import React, { useEffect } from 'react';
import { Col, Row } from '@douyinfe/semi-ui';
import { getHouseInfo } from '../../../../api/request';
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
import { useParams } from 'react-router-dom';
import snakeCase from 'lodash/snakeCase';

export default function HomeDetail() {
  const params = useParams();

  const { data: _data, loading } = useRequest(() => getHouseInfo(params.id), {
    refreshDeps: [params.id],
    loadingDelay: 100,
  });

  const data = _data?.data
    ? Object.fromEntries(
        Object.entries(_data?.data).map(([k, v]) => [snakeCase(k), v])
      )
    : null;

  useEffect(() => {
    setTimeout(() => {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }, 100);
  }, [params.id]);

  return (
    <Row>
      <Col xs={24} lg={{ span: 12, offset: 6 }}>
        <HouseCarousel loading={loading}></HouseCarousel>
        <HouseData data={data} loading={loading}></HouseData>
        <HouseManager loading={loading}></HouseManager>
        <HouseTest loading={loading}></HouseTest>
        <HouseAssess loading={loading}></HouseAssess>
        <HouseNeighbor loading={loading}></HouseNeighbor>
        <HousePrice loading={loading}></HousePrice>
        <HouseSource loading={loading}></HouseSource>
        <HouseNeighborSource loading={loading}></HouseNeighborSource>
        <HouseFooter loading={loading}></HouseFooter>
      </Col>
    </Row>
  );
}
