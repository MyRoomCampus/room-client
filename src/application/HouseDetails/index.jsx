import React, { useEffect } from 'react';
import { Col, Row, BackTop } from '@douyinfe/semi-ui';
import { IconArrowLeft, IconArrowUp } from '@douyinfe/semi-icons';
import { getHouseInfo } from '../../api/request';
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
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import './index.css';
import './style.css';
import '../../assets/global-style.css';

if (window.matchMedia) {
  const mql = window.matchMedia('(prefers-color-scheme: dark)');

  function matchMode(e) {
    const body = document.body;
    if (e.matches) {
      if (!body.hasAttribute('theme-mode')) {
        body.setAttribute('theme-mode', 'dark');
      }
    } else {
      if (body.hasAttribute('theme-mode')) {
        body.removeAttribute('theme-mode');
      }
    }
  }

  mql.addListener(matchMode);
  matchMode(mql);
}

const arrowCommonStyle = {
  backgroundColor: '#fff',
  width: 30,
  height: 30,
  borderRadius: 15,
  lineHeight: '30px',
  boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)',
};

export default function HomeDetail(props) {
  let { pid } = props;
  let { id: _id } = useParams();
  const id = pid ?? _id;

  const { data: _data, loading } = useRequest(() => getHouseInfo(id), {
    refreshDeps: [id],
    loadingDelay: 100,
  });

  const data = _data?.data?.data;

  useEffect(() => {
    setTimeout(() => {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }, 100);
  }, [id]);

  const path = useLocation().pathname.split('/')[1];
  const navigate = useNavigate();
  const handleNavigate = () => {
    if (path === 'activity') {
      navigate('/');
    } else if (path === 'houseDetails') {
      navigate(`/activity/${id}`);
    }
  };

  return (
    <Row className="home-detail-container">
      <Col xs={24} lg={{ span: 12, offset: 6 }}>
        <HouseCarousel loading={loading}></HouseCarousel>
        <div style={{ padding: '0 8px' }}>
          <HouseData data={data} loading={loading}></HouseData>
          <HouseManager loading={loading}></HouseManager>
          <HouseTest loading={loading}></HouseTest>
          <HouseAssess loading={loading}></HouseAssess>
          <HouseNeighbor loading={loading}></HouseNeighbor>
          <HousePrice loading={loading}></HousePrice>
          <HouseSource loading={loading}></HouseSource>
          <HouseNeighborSource loading={loading}></HouseNeighborSource>
        </div>
        <HouseFooter loading={loading}></HouseFooter>
      </Col>
      <BackTop
        style={{
          top: 15,
          left: 10,
          right: 'auto',
          bottom: 'auto',
          ...arrowCommonStyle,
        }}
        onClick={handleNavigate}
        visibilityHeight={-1}
      >
        <IconArrowLeft />
      </BackTop>
      <BackTop
        style={{
          right: 15,
          bottom: 120,
          ...arrowCommonStyle,
        }}
      >
        <IconArrowUp />
      </BackTop>
    </Row>
  );
}
