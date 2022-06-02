import React from 'react';
import { Col, Row } from '@douyinfe/semi-ui';
import { ChampionIcon, LineChartIcon, BoyAvatar } from '../Icon';
import '../index.css';
import './style.css';

export default function HouseAssess() {
  return (
    <div className="houseAssess padding-bottom-5">
      <Row className="house-assess-top">
        <Col xs={{ span: 24 }} className="flex-align-center padding-0-15">
          <ChampionIcon></ChampionIcon>
          <span className="padding-left-5 special-font-4">
            入选北京热搜小区榜第3名
          </span>
          <span className="special-box margin-left-auto">
            <a href="#top" className="link-style">
              {'>>'}
            </a>
          </span>
        </Col>
      </Row>
      <Row className="house-assess-bottom padding-bottom-15 padding-0-15">
        <Col xs={{ span: 24 }}>
          <Row className="padding-top-20">
            <Col xs={{ span: 24 }} className="flex-between">
              <span className="part-title">远洋山水</span>
              <span>
                <a href="#top" className="link-style">
                  <span>测评得分</span>
                  <span className="padding-left-5 black-font">9.5</span> {'>'}
                </a>
              </span>
            </Col>
          </Row>
          <Row className="padding-top-20">
            <Col xs={{ span: 13 }}>
              <span className="attr-name">小区均价</span>
              <span className="attr-value">129658元/平</span>
            </Col>
            <Col xs={{ span: 11 }} className="flex-align-center">
              <LineChartIcon></LineChartIcon>
              <span className="attr-value padding-left-5">环比上涨1.49%</span>
            </Col>
          </Row>
          <Row className="padding-top-10">
            <Col xs={{ span: 24 }}>
              <span className="attr-name">教育资源</span>
              <span className="attr-value">人大附小银燕校区</span>
            </Col>
          </Row>
          <Row className="padding-top-10">
            <Col xs={{ span: 24 }}>
              <span className="attr-name">在售房源</span>
              <span className="attr-value">24套</span>
            </Col>
          </Row>
          <Row className="padding-top-10">
            <Col xs={{ span: 24 }}>
              <hr />
            </Col>
          </Row>
          <Row className="padding-top-10">
            <Col xs={{ span: 24 }} className="flex-between">
              <span className="part-title">小区点评（20）</span>
              <span>
                <a
                  href="#top"
                  className="link-style float-right"
                >
                  查看全部 {'>'}
                </a>
              </span>
            </Col>
          </Row>
          <Row className="padding-top-10">
            <Col xs={{ span: 24 }}>
              <span className="highlight-attr-name">
                超过20位小区业主和附近居民进行了评分
              </span>
            </Col>
          </Row>
          <Row className="padding-top-20 flex-align-center">
            <Col>
              <BoyAvatar></BoyAvatar>
            </Col>
            <Col className="margin-left-15">
              <div className="flex-align-center">
                <span className="person-name">贾平</span>
                <span className="no-border-tag lessen-font">小区业主</span>
                <span className="essence-tag lessen-font">精华</span>
              </div>
              <div className="flex-align-center padding-top-5">
                <span>10-07</span>
                <span className="padding-left-5">11:37</span>
                <span className="padding-left-5">浏览91</span>
              </div>
            </Col>
          </Row>
          <Row className="padding-top-5">
            <Col xs={{ span: 24 }}>
              <span className="comment overflow-ignore-2">
                楼下本来有一个超市卖早餐和杂货，最近对门又开了间罗森，更加便利。早餐有包子油条哈哈哈哈哈哈哈哈哈哈哈哈哈哈
              </span>
            </Col>
          </Row>
          <Row className="padding-top-10">
            <Col xs={{ span: 24 }}>
              <hr />
            </Col>
          </Row>
          <Row className="padding-top-10">
            <Col xs={{ span: 24 }} className="flex-between">
              <span className="part-title">大家都在问（20）</span>
              <span>
                <a href="#top" className="link-style">
                  查看全部 {'>'}
                </a>
              </span>
            </Col>
          </Row>
          <Row className="padding-top-20 padding-bottom-10">
            <Col xs={{ span: 24 }} className="flex-align-center">
              <span className="question-icon">问</span>
              <span className="question overflow-ignore-1">
                小区物业一年给多少钱都管哈哈哈哈哈哈哈哈
              </span>
              <a href="#top" className="link-style answer">
                <span>31个回答</span>
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
