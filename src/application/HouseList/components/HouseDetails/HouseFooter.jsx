import React from 'react';
import { Col, Row } from '@douyinfe/semi-ui';
import './index.css';

export default function HouseFooter() {
  return (
    <div className="houseFooter">
      <Row className="margin-bottom-10">
        <Col xs={{ offset: 1, span: 22 }}>
          <span className="attention">
            免费声明：房源所示图片及其他信息仅供参考，购房时请以房本信息为准。
          </span>
        </Col>
      </Row>
      <Row className="footer">
        <Col xs={{ offset: 1, span: 4 }}>
          <div className="avatar"></div>
        </Col>
        <Col xs={{ span: 7 }}>
          <div className="margin-top-15 margin-bottom-10"><span className="person-name">李梦</span></div>
          <div><span className="desc">我爱我家我爱我爱</span></div>
        </Col>
        <Col xs={{ offset: 1, span: 5 }}>
          <div className="online-contact"><a href="https://www.google.com">在线联系</a></div>
        </Col>
        <Col xs={{ span: 5 }}>
          <div className="phone-call"><a href="https://www.google.com">电话咨询</a></div>
        </Col>
      </Row>
    </div>
  );
}
