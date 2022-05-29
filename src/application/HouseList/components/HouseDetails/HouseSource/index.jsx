import React from 'react';
import { Col, Row, Skeleton } from '@douyinfe/semi-ui';
import HomeCard from '../../HouseCards/HouseCard';
import '../index.css';
import './style.css';

export default function HouseSource(props) {
  const { loading } = props;
  return (
    <div className="part houseSource padding-bottom-10">
      <Row className="padding-top-10">
        <Col xs={{ span: 24 }} className="flex-between">
          {loading ? (
            <Skeleton.Button></Skeleton.Button>
          ) : (
            <span className="part-title">同小区房源（30）</span>
          )}

          {loading ? (
            <Skeleton.Button></Skeleton.Button>
          ) : (
            <span>
              <a href="https://www.google.com" className="link-style">
                查看全部 {'>'}
              </a>
            </span>
          )}
        </Col>
      </Row>
      <Row className="padding-top-20">
        <Col xs={{ span: 11 }}>
          {loading ? (
            <Skeleton.Button
              style={{ width: '100%', height: '120px' }}
            ></Skeleton.Button>
          ) : (
            <HomeCard></HomeCard>
          )}
        </Col>
        <Col xs={{ offset: 2, span: 11 }}>
          {loading ? (
            <Skeleton.Button
              style={{ width: '100%', height: '120px' }}
            ></Skeleton.Button>
          ) : (
            <HomeCard></HomeCard>
          )}
        </Col>
      </Row>
    </div>
  );
}
