import React from 'react';
import { Col, Row, Skeleton } from '@douyinfe/semi-ui';
import { GirlAvatar, IDCardIcon } from '../Icon';
import '../index.css';
import './style.css';

export default function HouseFooter(props) {
  const { loading } = props;
  return (
    <div className="houseFooter padding-0-15">
      <Row className="padding-top-10 padding-bottom-15 footer-before">
        <Col xs={{ span: 24 }}>
          {loading ? (
            <Skeleton.Button style={{ width: '100%' }}></Skeleton.Button>
          ) : (
            <span className="highlight-attr-name" style={{ fontSize: 14 }}>
              免费声明：房源所示图片及其他信息仅供参考，购房时请以房本信息为准。
            </span>
          )}
        </Col>
      </Row>
      <Row className="footer-container">
        <Col xs={24} lg={{ span: 12, offset: 6 }}>
          <Row className="padding-bottom-10 flex-align-center padding-0-15 footer">
            <Col>
              {loading ? (
                <Skeleton.Avatar
                  style={{ width: '60px', height: '60px' }}
                ></Skeleton.Avatar>
              ) : (
                <GirlAvatar></GirlAvatar>
              )}
            </Col>

            <Col className="margin-left-15">
              {loading ? (
                <Skeleton.Button
                  style={{ height: '25px', marginBottom: '5px' }}
                ></Skeleton.Button>
              ) : (
                <div className="flex-align-center">
                  <span className="person-name">李梦</span>
                  <IDCardIcon></IDCardIcon>
                </div>
              )}

              {loading ? (
                <Skeleton.Button style={{ height: '25px' }}></Skeleton.Button>
              ) : (
                <div className="padding-top-10">
                  <span className="highlight-attr-name">我爱我爱我家....</span>
                </div>
              )}
            </Col>

            <Col className="margin-left-auto">
              {loading ? (
                <Skeleton.Button style={{ height: '55px' }}></Skeleton.Button>
              ) : (
                <>
                  <div className="online-contact">
                    <a
                      href="https://www.google.com"
                      className="link-style white-small-font"
                    >
                      在线联系
                    </a>
                  </div>
                  <div className="phone-call margin-left-5">
                    <a
                      href="https://www.google.com"
                      className="link-style white-small-font"
                    >
                      电话咨询
                    </a>
                  </div>
                </>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
