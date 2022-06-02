import React from 'react';
import { Col, Row } from '@douyinfe/semi-ui';
import { GirlAvatar, IDCardIcon } from '../Icon';
import '../index.css';
import './style.css';

export default function HouseFooter() {
  return (
    <div className="houseFooter padding-0-15">
      <Row className="padding-top-10 padding-bottom-15 footer-before">
        <Col xs={{ span: 24 }}>
          <span className="highlight-attr-name" style={{ fontSize: 14 }}>
            免费声明：房源所示图片及其他信息仅供参考，购房时请以房本信息为准。
          </span>
        </Col>
      </Row>
      <Row className="footer-container">
        <Col xs={24} lg={{ span: 12, offset: 6 }}>
          <Row className="padding-bottom-10 flex-align-center padding-0-15 footer">
            <Col>
              <GirlAvatar></GirlAvatar>
            </Col>
            <Col className="margin-left-15">
              <div className="flex-align-center">
                <span className="person-name">李梦</span>
                <IDCardIcon></IDCardIcon>
              </div>
              <div className="padding-top-10">
                <span className="highlight-attr-name">我爱我爱我家....</span>
              </div>
            </Col>
            <Col className="margin-left-auto">
              <div className="online-contact">
                <a
                  href="#top"
                  className="link-style white-small-font"
                >
                  在线联系
                </a>
              </div>
              <div className="phone-call margin-left-5">
                <a
                  href="#top"
                  className="link-style white-small-font"
                >
                  电话咨询
                </a>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
