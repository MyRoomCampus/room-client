interface HouseInfo {
    /** 房源 id */
    "id": number,
    /** 房源 title */
    "listing_name": string,
    /** 房源上架时间 */
    "first_upload_at": string,
    /** 报价，单位分 */
    "pricing": number,
    /** 建筑面积，单位平方米（需要除以 100） */
    "squaremeter": number,
    /** 首付，单位分 */
    "downpayment"?: number,
    /** 楼层 */
    "floor"?: number,
    /** 总楼层数 */
    "total_floor"?: number,
    "dict_house_id": number,
    "room_structure"?: number,
    "ladder_ration"?: number,
    "heating_type"?: number,
    "house_duration"?: number,
    /** 共有，非共有 */
    "property_right"?: number,
    "mortgage"?: number,
    "usage_area"?: number,
    /** 楼层位置：1 高 2 中 3 低 */
    "floor_level"?: number,
    /** 朝向分类：1 南北 */
    "facing_type"?: number,
    /** 装修程度，1 简装 2 豪装 */
    "decoration_type"?: number,
    /** 楼型 */
    "building_type"?: number,
    /** 建造年代 */
    "built_year"?: string,
    "city_name": string,
    "city_code": string,
    "neighborhood_name": string,
    /** 小区 id，neighborhood 主键 */
    "neighborhood_source_code": string,
    /** 卧室个数 */
    "floor_plan_room"?: number,
    /** 厅个数 */
    "floor_plan_hall"?: number,
    /** 厕所个数 */
    "floor_plan_bath"?: number,
    /** 厨房个数 */
    "floor_plan_kitchen"?: number,
    /** 房源类型，1 新房 2 二手房 3 租房 */
    "house_type"?: number,
    /** 户型类型 */
    "layout_type": number,
    /** 房源更新时间 */
    "last_publish_time": string,
    /** 交易权属: 1.商品房，2. 公房，3.央产房，4.军产房，5.校产房， 6.私产，7. 经济适用房， 8.永久产权，9.空置房，10.使用权房，99.其他 */
    "ownership"?: number,
    /** 产权年限，多种以/分隔，如70年/40年/50年 */
    "right_property"?: string,
    /** 房屋类型: 1.普通住宅，2.别墅，3.写字楼， 4.商铺，5.商住两用，6.公寓，7.工业厂房，8.车库，9.经济适用房，99. 其他 */
    "property_management_type"?: number,
    /** 是否有电梯，0 没有；1 有；null 未知 */
    "elevator"?: number,
    /** 房源状态 0 正常；1 下架 */
    "house_status": number,
    "online_house_status"?: number,
    /** 创建时间 */
    "created_at": string,
    /** 更新时间 */
    "updated_at": string,
    /** 1：诸葛；2：安居客 */
    "data_source_id": number,
    /** 抓取房源 id */
    "offline_code": string,
    /** 离线房源编号 */
    "source_code"?: string,
    "start_version": number,
    "last_version": number,
    "crawl_id": number,
    "task_id"?: number,
    "house_card": string,
    "online_neighborhood_id": number,
    "online_city_id": number,
    "online_district_id": number,
    "online_area_id": number,
    /** 唯一住房: 1.是，0.否 */
    "property_only"?: number,
    /** 房本年限: 0.不满二，1.满二，2.满五，99.其他 */
    "property_certificate_period"?: number,
}
