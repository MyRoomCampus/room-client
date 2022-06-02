import React from 'react';
import { Col, Row, Skeleton } from '@douyinfe/semi-ui';
import '../index.css';
import './style.css';

export default function HouseTest(props) {
  const { loading } = props;
  return (
    <div className="houseTest margin-top-10 padding-bottom-10">
      {loading ? (
        <Skeleton.Button
          style={{ width: '100%', height: '60px' }}
        ></Skeleton.Button>
      ) : (
        <Row className="house-test-top flex-nowrap">
          <Col xs={{ span: 9 }}>
            <span className="special-font-1 margin-left-15">踩盘</span>
            <span className="special-font-2">测评</span>
          </Col>
          <Col xs={{ span: 15 }}>
            <span className="float-right special-font-3 margin-right-15">
              全信息 · 真踩盘 · 深解读
            </span>
          </Col>
        </Row>
      )}
      <Row className="house-test-bottom padding-0-15">
        <Col xs={{ span: 24 }}>
          <Row className="padding-top-20 flex-nowrap">
            {loading ? (
              <Skeleton.Button
                style={{ width: '200px', height: '30px' }}
              ></Skeleton.Button>
            ) : (
              <>
                {' '}
                <Col>
                  <span className="grade">9.6分</span>
                  <span className="desc">优秀</span>
                </Col>
                <Col className="margin-left-15">
                  <span style={{ fontSize: 15 }}>“本楼盘价值分析”</span>
                </Col>
              </>
            )}
            <Col style={{ marginLeft: 'auto' }}>
              {loading ? (
                <Skeleton.Button></Skeleton.Button>
              ) : (
                <span>
                  <a href="##" className="link-style float-right">
                    1.6万人已读 {'>'}
                  </a>
                </span>
              )}
            </Col>
          </Row>
          <Row
            className="margin-top-10 padding-bottom-15 padding-top-20 flex-nowrap"
            type="flex"
          >
            <Col>
              {loading ? (
                <Skeleton.Image
                  style={{ width: '80px', height: '80px' }}
                ></Skeleton.Image>
              ) : (
                <span className="landscape"></span>
              )}
            </Col>
            <Col
              style={{ flexGrow: 1 }}
              className="padding-top-5 margin-left-15 landscape-desc-tag"
            >
              {loading ? (
                <Skeleton.Button style={{ width: '100%' }}></Skeleton.Button>
              ) : (
                <span className="attr-value">
                  北二环护城河畔，高品质商品房住宅。
                </span>
              )}
              <div className="landscape-tag">
                {loading ? (
                  <Skeleton.Button style={{ width: '100%' }}></Skeleton.Button>
                ) : (
                  <>
                    <span className="highlight-attr-name">幸福敲门</span>
                    <span className="see-more">...</span>
                  </>
                )}
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
