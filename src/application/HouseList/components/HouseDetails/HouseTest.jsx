import React from 'react';
import { Col, Row } from '@douyinfe/semi-ui';
import './index.css';

export default function HouseTest() {
  return (
    <div className="houseTest margin-top-10 padding-bottom-10">
      <Row className="house-test-top">
        <Col xs={{ offset: 1, span: 7 }}>
          <span className="special-font-1">踩盘</span>
          <span className="special-font-2">测评</span>
        </Col>
        <Col xs={{ offset: 1, span: 14 }}>
          <span className="float-right special-font-3">
            全信息 · 真踩盘 · 深解读
          </span>
        </Col>
      </Row>
      <Row className="house-test-bottom">
        <Col xs={{ span: 24 }}>
          <Row className="padding-top-20">
            <Col xs={{ offset: 1, span: 6 }}>
              <span className="grade">9.6分</span>
              <span className="desc">优秀</span>
            </Col>
            <Col xs={{ span: 8 }}>
              <span style={{ fontSize: 15 }}>“本楼盘价值分析”</span>
            </Col>
            <Col xs={{ offset: 1, span: 7 }}>
              <span>
                <a
                  href="https://www.google.com"
                  className="link-style float-right"
                >
                  1.6万人已读 {'>'}
                </a>
              </span>
            </Col>
          </Row>
          <Row className="margin-top-10 padding-bottom-15">
            <Col xs={{ offset: 1, span: 22 }}>
              <div className="test-carousel"></div>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* <Row>
        <Col xs={{ offset: 1, span: 5 }}>
          <div className="picture"></div>
        </Col>
        <Col xs={{ span: 17 }}>
          <div className="desc">
            <div>北二环护城河畔，高品质商品房住宅。</div>
            <div>
              <span>幸福敲门</span>
              <span>. . .</span>
            </div>
          </div>
        </Col>
      </Row> */}
    </div>
  );
}
