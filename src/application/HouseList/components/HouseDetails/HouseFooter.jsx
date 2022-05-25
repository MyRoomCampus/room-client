import React from 'react';
import { Col, Row } from '@douyinfe/semi-ui';
import { GirlAvatar, IDCardIcon } from './Icon';
import './index.css';

export default function HouseFooter() {
  return (
    <div className="houseFooter">
      <Row className="padding-top-10 padding-bottom-10 footer-before">
        <Col xs={{ offset: 1, span: 22 }}>
          <span className="highlight-attr-name" style={{ fontSize: 14 }}>
            免费声明：房源所示图片及其他信息仅供参考，购房时请以房本信息为准。
          </span>
        </Col>
      </Row>
      <Row className="padding-top-10 padding-bottom-10 flex-align-center footer">
        <Col xs={{ offset: 1, span: 4 }}>
          <GirlAvatar></GirlAvatar>
        </Col>
        <Col xs={{ span: 8 }} className="padding-left-5">
          <div className="flex-align-center">
            <span className="person-name">李梦</span>
            <IDCardIcon></IDCardIcon>
          </div>
          <div className="padding-top-10">
            <span className="highlight-attr-name">我爱我爱我家....</span>
          </div>
        </Col>
        <Col xs={{ span: 5 }}>
          <div className="online-contact">
            <a
              href="https://www.google.com"
              className="link-style white-small-font"
            >
              在线联系
            </a>
          </div>
        </Col>
        <Col xs={{ span: 5 }} className="padding-left-5">
          <div className="phone-call">
            <a
              href="https://www.google.com"
              className="link-style white-small-font"
            >
              电话咨询
            </a>
          </div>
        </Col>
      </Row>
    </div>
  );
}
