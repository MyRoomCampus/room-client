import React from 'react';
import { Col, Row, Skeleton } from '@douyinfe/semi-ui';
import '../index.css';
import './style.css';

export default function HousePrice(props) {
  const { loading } = props;
  return (
    <div className="part housePrice padding-bottom-15">
      <Row className="padding-top-10">
        <Col xs={{ span: 24 }}>
          {loading ? (
            <Skeleton.Button></Skeleton.Button>
          ) : (
            <span className="part-title">价格走势</span>
          )}
        </Col>
      </Row>
      <Row className="padding-top-20">
        {loading ? (
          <Skeleton.Button
            style={{ width: '100%', height: '110px' }}
          ></Skeleton.Button>
        ) : (
          <Col xs={{ span: 24 }} className="price-sum flex-between">
            <div className="price-sum-left border-right">
              <span className="price-attr-name">12月小区均价</span>
              <span className="price-attr-value-1">95591</span>
              <span className="price-attr-value-2">元/平</span>
            </div>
            <div className="price-sum-right">
              <span className="price-attr-name">比上月</span>
              <span className="price-attr-value-1">0.43</span>
              <span className="price-attr-value-2">%</span>
              <span className="price-down-icon"></span>
            </div>
          </Col>
        )}
      </Row>
      <Row className="padding-top-10">
        <Col xs={{ span: 24 }}>
          {loading ? (
            <Skeleton.Button
              style={{ width: '100%', height: '180px', marginTop: '10px' }}
            ></Skeleton.Button>
          ) : (
            <div className="line-chart"></div>
          )}
        </Col>
      </Row>
    </div>
  );
}
