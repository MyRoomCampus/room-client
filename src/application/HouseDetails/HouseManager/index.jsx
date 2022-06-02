import React from 'react';
import { Col, Row, Skeleton } from '@douyinfe/semi-ui';
import { GirlAvatar, MessageIcon, PhoneIcon } from '../Icon';
import '../index.css';
import './style.css';

export default function HouseManager(props) {
  const { loading } = props;
  return (
    <div className="part houseManager padding-bottom-15">
      <Row className="padding-top-10">
        <Col xs={{ span: 22 }}>
          {loading ? (
            <Skeleton.Button></Skeleton.Button>
          ) : (
            <span className="part-title">推荐经纪人</span>
          )}
        </Col>
      </Row>
      <Row className="padding-top-20 flex-align-center">
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
              style={{ width: '132px', height: '20px' }}
            ></Skeleton.Button>
          ) : (
            <div className="flex-align-center">
              <span className="person-name">李梦</span>
              <span className="person-tag margin-left-5">我爱我家</span>
            </div>
          )}
          {loading ? (
            <Skeleton.Button
              style={{ width: '132px', height: '45px', marginTop: '10px' }}
            ></Skeleton.Button>
          ) : (
            <>
              <div className="flex-align-center padding-top-10">
                <span className="highlight-font">3.7</span>
                <span className="margin-left-5">服务分</span>
              </div>
              <div className="flex-align-center padding-top-5">
                <span className="lessen-font">2.3</span>
                <span className="margin-left-5 lessen-font">小区熟悉度</span>
              </div>
            </>
          )}
          {loading ? (
            <Skeleton.Button
              style={{ width: '132px', height: '20px', marginTop: '10px' }}
            ></Skeleton.Button>
          ) : (
            <div className="flex-align-center padding-top-10 margin-left--5">
              <span className="no-border-tag lessen-font">服务标杆</span>
              <span className="no-border-tag lessen-font margin-left-5">
                闪电回复
              </span>
            </div>
          )}
        </Col>
        <Col className="flex-align-center" style={{ marginLeft: 'auto' }}>
          {loading ? (
            <Skeleton.Button
              style={{ width: '100px', height: '50px' }}
            ></Skeleton.Button>
          ) : (
            <>
              <a href="##" className="msg-icon">
                <MessageIcon></MessageIcon>
              </a>
              <a href="##" className="msg-icon margin-left-15">
                <PhoneIcon></PhoneIcon>
              </a>
            </>
          )}
        </Col>
      </Row>
    </div>
  );
}
