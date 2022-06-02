import React from 'react';
import { Col, Row, Skeleton } from '@douyinfe/semi-ui';
import Card from '../../../components/Card';
import '../index.css';
import './style.css';

export default function HouseSource(props) {
  const { loading } = props;
  return (
    <div
      className="part houseSource padding-bottom-10"
      style={{ overflow: 'hidden' }}
    >
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
              <a href="##" className="link-style">
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
            <Card
              id={659969}
              option={Math.floor(Math.random() * 100 + 1)}
              page={Math.floor(Math.random() * 20 + 1)}
            ></Card>
          )}
        </Col>
      </Row>
    </div>
  );
}
