import React from 'react';
import { Col, Row } from '@douyinfe/semi-ui';
import './index.css';

export default function HouseTest() {
  return (
    <div className="houseTest">
      <div className="houseTest-top">
        <span>踩盘</span>
        <span>测评</span>
        <span>全信息 · 真踩盘 · 深解读</span>
      </div>
      <div className="houseTest-bottom">
        <Row gutter={[0, 0]} className="line">
          <Col xs={{ offset: 1, span: 5 }}>
            <div className="credit">
              <span>9.6分</span>
              <span>优秀</span>
            </div>
          </Col>
          <Col xs={{ offset: 1, span: 11 }}>
            <span>“本楼盘价值分析”</span>
          </Col>
          <Col xs={{ offset: 1, span: 5 }}>
            <span>
              <a href="https://www.google.com">1.6万人已读 {'>'}</a>
            </span>
          </Col>
        </Row>
        <Row gutter={[0, 0]}>
          <Col xs={{ offset: 1, span: 5 }}>
            <div className="picture"></div>
          </Col>
          <Col xs={{ span: 17 }}>
            <div className="desc">
              <div>北二环护城河畔，高品质商品房住宅。</div>
              <div><span>幸福敲门</span><span>. . .</span></div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
