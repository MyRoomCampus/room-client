import React from 'react';
import { Col, Row, Skeleton } from '@douyinfe/semi-ui';
import { formatPrice, getHouseType } from '../../../api/utils'
import {
  FeedbackIcon,
  PublishInstitutionIcon,
  QualificationIcon,
} from '../Icon';
import '../index.css';
import './style.css';

/**
 *
 * @param {object} props
 * @param {HouseInfo=} props.data
 * @param {boolean} props.loading
 * @returns
 */

export default function HouseData(props) {
  const { loading, data } = props;
  const curYear = new Date().getFullYear();
  const houseAge = +curYear - +data?.builtYear;

  return (
    <div className="part houseData">
      <Row className="flex-nowrap">
        {houseAge <= 5 ? (
          <Col>
            {loading ? (
              <Skeleton.Button></Skeleton.Button>
            ) : (
              <span className="font-size-10 tag-span">楼龄新</span>
            )}
          </Col>
        ) : (
          <Col>
            {loading ? (
              <Skeleton.Button></Skeleton.Button>
            ) : (
              <span className="font-size-10 tag-span">楼龄旧</span>
            )}
          </Col>
        )}
        <Col xs={{ span: 8 }} style={{ marginLeft: 'auto' }}>
          {loading ? (
            <Skeleton.Button></Skeleton.Button>
          ) : (
            <a href="#top" className="link-style feedback">
              <div className="feedback-icon">
                <FeedbackIcon></FeedbackIcon>
              </div>
              <div className="feedback-icon">反馈</div>
            </a>
          )}
        </Col>
      </Row>
      <Row className="padding-top-5 flex-nowrap">
        <Col>
          {loading ? (
            <Skeleton.Button></Skeleton.Button>
          ) : (
            <span className="house-title">
                {data?.listingName}
            </span>
          )}
        </Col>
        <Col>
          {loading ? (
            <Skeleton.Button></Skeleton.Button>
          ) : (
            <span className="house-title margin-left-15">
                {data?.rightProperty}
            </span>
          )}
        </Col>
      </Row>
      <Row className="padding-top-10 flex-nowrap">
        <Col className="publish-institution-icon">
          {loading ? (
            <Skeleton.Button></Skeleton.Button>
          ) : (
            <>
              <PublishInstitutionIcon></PublishInstitutionIcon>
              <span className="padding-left-5">房源发布机构</span>
            </>
          )}
        </Col>
        <Col className="qualification-icon margin-left-15">
          {loading ? (
            <Skeleton.Button></Skeleton.Button>
          ) : (
            <>
              <QualificationIcon></QualificationIcon>
              <span className="padding-left-5">相关资质</span>
            </>
          )}
        </Col>
      </Row>
      <Row className="padding-top-20">
        <Col xs={{ span: 8 }}>
          {loading ? (
            <Skeleton.Button></Skeleton.Button>
          ) : (
            <div className="border-right">
              <p className="highlight-attr-value">
                {formatPrice(data?.pricing).slice(1)}
              </p>
              <p className="highlight-attr-name padding-top-5">售价</p>
            </div>
          )}
        </Col>
        <Col xs={{ span: 8 }}>
          {loading ? (
            <Skeleton.Button></Skeleton.Button>
          ) : (
            <div className="border-right">
              <p className="highlight-attr-value">
                  {data?.floorPlanRoom}室{data?.floorPlanHall}厅
              </p>
              <p className="highlight-attr-name padding-top-5">房型</p>
            </div>
          )}
        </Col>
        <Col xs={{ span: 8 }}>
          {loading ? (
            <Skeleton.Button></Skeleton.Button>
          ) : (
            <div>
              <p className="highlight-attr-value">
                  {data?.squaremeter / 100}平
              </p>
              <p className="highlight-attr-name padding-top-5">建筑面积</p>
            </div>
          )}
        </Col>
      </Row>
      <div>
        {loading ? (
          <Skeleton.Paragraph className="margin-top-10"></Skeleton.Paragraph>
        ) : (
          <>
            <Row className="padding-top-20">
              <Col xs={{ span: 12 }}>
                {loading ? (
                  <Skeleton.Button></Skeleton.Button>
                ) : (
                  <>
                    <span className="attr-name">单价</span>
                    <span className="attr-value">
                      {parseInt(data?.pricing / data?.squaremeter)}元/平
                    </span>
                  </>
                )}
              </Col>
              <Col xs={{ span: 12 }}>
                {loading ? (
                  <Skeleton.Button></Skeleton.Button>
                ) : (
                  <>
                    <span className="attr-name">挂牌</span>
                    <span className="attr-value">
                          {data?.firstUploadAt.slice(0, 10)}
                    </span>
                  </>
                )}
              </Col>
            </Row>
            <Row className="padding-top-10">
              <Col xs={{ span: 12 }}>
                {loading ? (
                  <Skeleton.Button></Skeleton.Button>
                ) : (
                  <>
                    <span className="attr-name">装修</span>
                    <span className="attr-value">
                      {data?.decorationType === 1 ? '简装' : '豪装'}
                    </span>
                  </>
                )}
              </Col>
              <Col xs={{ span: 12 }}>
                <span className="attr-name">电梯</span>
                <span className="attr-value">
                  {data?.elevator === 1
                    ? '有'
                    : data?.elevator === 0
                    ? '没有'
                    : '未知'}
                </span>
              </Col>
            </Row>
            <Row className="padding-top-10">
              <Col xs={{ span: 12 }}>
                <span className="attr-name">类型</span>
                <span className="attr-value">
                    {getHouseType(data?.propertyManagementType)}
                </span>
              </Col>
              <Col xs={{ span: 12 }}>
                <span className="attr-name">年代</span>
                  <span className="attr-value">{data?.builtYear}年</span>
              </Col>
            </Row>
            <Row className="padding-top-10">
              <Col xs={{ span: 13 }}>
                <span className="attr-name">小区</span>
                <span className="attr-value">{data?.neighborhoodName}</span>
              </Col>
              <Col xs={{ span: 11 }}>
                <span>
                  <a
                    href="#top"
                    className="link-style float-right"
                  >
                    查看 {'>'}
                  </a>
                </span>
              </Col>
            </Row>
            <Row className="padding-top-10">
              <Col xs={{ span: 12 }}>
                <span className="attr-name">预算</span>
                <span className="attr-value">咨询首付情况</span>
              </Col>
              <Col xs={{ span: 12 }}>
                <span>
                  <a
                    href="#top"
                    className="link-style float-right"
                  >
                    咨询经纪人 {'>'}
                  </a>
                </span>
              </Col>
            </Row>
            <Row className="padding-top-10">
              <Col xs={{ span: 13 }}>
                <span className="attr-name">楼层</span>
                <span className="attr-value">
                  {/* TODO: getFloorLevel */}
                    {data?.floorLevel === 1
                    ? '高'
                      : data?.floorLevel === 2
                    ? '中'
                    : '低'}
                    楼层/共{data?.totalFloor}层
                </span>
              </Col>
              <Col xs={{ span: 11 }}>
                <span>
                  <a
                    href="#top"
                    className="link-style float-right"
                  >
                    咨询楼层 {'>'}
                  </a>
                </span>
              </Col>
            </Row>
            {/* <Row className="padding-top-10">
              <Col xs={{ span: 24 }}>
                <span className="attr-name">房屋核验码</span>
                <span className="attr-value">190423595530</span>
              </Col>
            </Row> */}
          </>
        )}
      </div>
      <Row className="padding-top-20 padding-bottom-15">
        <Col xs={{ span: 24 }}>
          <div className="subscribe">
            <div className="subscribe-left">订阅房源动态，掌握一手信息</div>
            <div className="subscribe-right">
              <a href="#top" className="link-style">
                去订阅
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
