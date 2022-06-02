import React from 'react';
import { Col, Row, Skeleton } from '@douyinfe/semi-ui';
import Card from '../../../components/Card';
import '../index.css';
import './style.css';

export default function HouseNeighborSource(props) {
  const { loading } = props;
  return (
    <div
      className="part houseNeighborSource padding-bottom-15"
      style={{ overflow: 'hidden' }}
    >
      <Row className="padding-top-10">
        <Col xs={{ span: 24 }}>
          {loading ? (
            <Skeleton.Button></Skeleton.Button>
          ) : (
            <span className="part-title">周边房源</span>
          )}
        </Col>
      </Row>
      <Row className="padding-top-20">
        <Col xs={{ span: 24 }}>
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
      <Row className="padding-top-5">
        <Col xs={{ span: 24 }}>
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
      <Row className="padding-top-5">
        <Col xs={{ span: 24 }}>
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
      <Row>
        <Col xs={{ span: 24 }}>
          {loading ? (
            <Skeleton.Button
              style={{ width: '100%', height: '40px', marginTop: '10px' }}
            ></Skeleton.Button>
          ) : (
            <div className="more-source">
              <a href="##" className="link-style">
                查看在售228套房源 {'>'}
              </a>
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
}
