/*
* @Author: zoucong
* @Date:   2016-12-16 10:21:00
* @Last Modified by:   zoucong
* @Last Modified time: 2016-12-16 17:17:21
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
  
  _renderTags(data){
    let tags = data.maidian;
    if (Array.isArray(tags)){
      return (
        <View style={[commonStyles.flexRow]}>
          {
            tags.map((d,i)=>
              <Text style={styles.tagItem} key={i}>{d}</Text>
            )
          }
        </View>
      );
    }
  }

  _getPriceUnit(flag){
    switch (flag){
      case 1:
        return '元/平';
      case 2:
        return '万/平';
      case 3:
        return '万起';
    }
  }

  render() {
    let {data} = this.props;
    let priceColor = this.sellOut ? {} : commonStyles.colorPrime;
    return (
      // TODO: data.imageUrl
      <HouseItem imageUrl={'https://files.iwjw.com/newhousepc/2016/10/9/a09ea557f4fc4a7e9b028c041e23ef42.s.iwjw'} icons={HouseItem.getIcons(this.sellOut,data)}>
        <Text numberOfLines={1} style={styles.houseTitle}>{data.name}</Text>
        <Text numberOfLines={1} style={styles.subTitle}>{data.districtName} - {data.townName}</Text>
        <Text numberOfLines={1} style={[styles.baseInfo]}>
          <Text style={[priceColor,commonStyles.font16,commonStyles.fontBold]}>{data.defaultPrice}</Text>
          <Text style={[priceColor,commonStyles.font12]}> {this._getPriceUnit(data.priceFlag)}</Text>
          <Text style={commonStyles.font12}>  1/2/3/4室</Text>
        </Text>
        <Text style={styles.subInfo}>{this._renderTags(data)}</Text>
      </HouseItem>
    );
  }
}