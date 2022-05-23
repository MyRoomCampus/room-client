import React from 'react';
import { Col, Row } from '@douyinfe/semi-ui';
import './index.css';

export default function HouseAssess() {
  return (
    <div className="houseAssess">
      <div className="houseAssess-top">
        <div></div>
        <div>入选北京热搜小区榜第3名</div>
        <span>
          <a href="https://www.google.com"> {'>'}</a>
        </span>
      </div>
      <div className="houseAssess-bottom">
        <Row>
          <Col xs={{ offset: 1, span: 23 }} className="line-1">
            <span>远洋山水</span>
            <div>
              <span>测评得分</span>
              <span>9.5</span>
              <span>
                <a href="https://www.google.com"> {'>'}</a>
              </span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={{ offset: 1, span: 23 }} className="line-2">
            <span className="title">小区均价</span>
            <span className="value">129658元/平</span>
            <div></div>
            <span>环比上涨1.49%</span>
          </Col>
        </Row>
        <Row>
          <Col xs={{ offset: 1, span: 23 }} className="line-3">
            <span className="title">教育资源</span>
            <span className="value">人大附小银燕校区</span>
          </Col>
          <Col xs={{ offset: 1, span: 23 }} className="line-3">
            <span className="title">在售房源</span>
            <span className="value">24套</span>
          </Col>
        </Row>
        <hr className="hr-style" />
        <Row className="margin-bottom-10">
          <Col xs={{ offset: 1, span: 10 }}>
            <span className="big-font-size">小区点评（20）</span>
          </Col>
          <Col xs={{ offset: 7, span: 5 }}>
            <a href="https://www.google.com" className="link-style">
              查看全部 {'>'}
            </a>
          </Col>
          <Col xs={{ span: 1 }}></Col>
        </Row>
        <Row className="margin-bottom-10">
          <Col xs={{ offset: 1, span: 22 }}>
            <span className="content-style">
              超过20位小区业主和附近居民进行了评分
            </span>
          </Col>
          <Col xs={{ span: 1 }}></Col>
        </Row>
        <Row>
          <Col xs={{ offset: 1, span: 4 }}>
            <div className="avatar"></div>
          </Col>
          <Col xs={{ span: 18 }}>
            <div className="yezhu-top margin-bottom-10 margin-top-15">
              <span className="margin-right-10 person-name">贾平</span>
              <span className="margin-right-10 tag">小区业主</span>
              <span className="margin-right-10 star">精华</span>
            </div>
            <div className="yezhu-bottom">
              <span className="margin-right-10 content-style">10-07</span>
              <span className="margin-right-10 content-style">11:37</span>
              <span className="margin-right-10 content-style">浏览91</span>
            </div>
          </Col>
          <Col xs={{ span: 1 }}></Col>
        </Row>
        <Row>
          <Col xs={{ offset: 1, span: 22 }}>
            <span>
              楼下本来有一个超市卖早餐和杂货，最近对门又开了间罗森，更加便利。早餐有包子油条...
            </span>
          </Col>
          <Col xs={{ span: 1 }}></Col>
        </Row>
        <hr className="hr-style" />
        <Row>
          <Col xs={{ offset: 1, span: 10 }}>
            <span className="big-font-size">大家都在问（20）</span>
          </Col>
          <Col xs={{ offset: 7, span: 5 }}>
            <a href="https://www.google.com" className="link-style">
              查看全部 {'>'}
            </a>
          </Col>
          <Col xs={{ span: 1 }}></Col>
        </Row>
        <Row className="margin-top-15">
          <Col xs={{ offset: 1, span: 2 }}>
              <div className="icon">问</div>
          </Col>
          <Col xs={{ span: 10 }}>
            <span>小区物业一年给多少钱都管...</span>
          </Col>
          <Col xs={{ offset: 5, span: 5 }}>
            <span className="title">31个回答</span>
          </Col>
          <Col xs={{ span: 1 }}></Col>
        </Row>
      </div>
    </div>
  );
}
