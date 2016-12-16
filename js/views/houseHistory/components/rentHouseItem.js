/*
* @Author: zoucong
* @Date:   2016-12-16 10:22:55
* @Last Modified by:   zoucong
* @Last Modified time: 2016-12-16 17:54:38
*/

'use strict';

import React from 'react';
import { View , Text } from 'react-native';
import HouseItem from './houseItem.js';
import styles  from './houseItemStyles.js';
import commonStyles from '../../../styles/common.js';

export default class saleHouseItem extends React.Component {
  constructor(props){
    super(props);
    // TODO: 已成交
    this.sellOut = false;
  }

  render() {
    let {data} = this.props;
    let priceColor = this.sellOut ? {} : commonStyles.colorPrime;
    return (
      // TODO: data.imageUrl
      <HouseItem imageUrl={'https://files.iwjw.com/newhousepc/2016/10/9/a09ea557f4fc4a7e9b028c041e23ef42.s.iwjw'} icons={HouseItem.getIcons(this.sellOut,data)}>
        <Text numberOfLines={1} style={styles.houseTitle}>{data.name}</Text>
        <Text numberOfLines={1} style={styles.subTitle}>
          {data.bedroomSum}室
          {data.livingRoomSum}厅
          {data.wcSum}卫 · 
          123m²
          {data.decorateType ? ' · ' + data.decorateType : null}
        </Text>
        <Text numberOfLines={1} style={[styles.baseInfo]}>
          <Text style={[priceColor,commonStyles.font16,commonStyles.fontBold]}>{data.rentPrice}</Text>
          <Text style={[priceColor,commonStyles.font12]}> 元/月</Text>
        </Text>
        <Text style={styles.subInfo}>距离13号线金沙江路788米</Text>
      </HouseItem>
    );
  }
}