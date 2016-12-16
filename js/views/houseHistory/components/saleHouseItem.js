/*
* @Author: zoucong
* @Date:   2016-12-16 10:20:18
* @Last Modified by:   zoucong
* @Last Modified time: 2016-12-16 17:56:38
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
    this.sellOut = true;
  }
  
  _renderTags(data){
    return (
      <View style={[commonStyles.flexRow]}>
        {
          this._getTags(data).map((d,i)=>
            <Text style={styles.tagItem} key={i}>{d}</Text>
          )
        }
      </View>
    );
  }
  _getTags(data){
    return [
      {tag:'学区',display:data.school},
      {tag:'地铁',display:data.subway},
      {tag:'满五唯一',display:data.aboveFiveYear && data.onlyOne},
      {tag:'业主发布',display:data.publishByUser}
    ]
      .filter(d=>d.display)
      .map(d=>d.tag);
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
          {data.floorType2 ? ' · ' + data.floorType2 : null}
        </Text>
        <Text numberOfLines={1} style={[styles.baseInfo]}>
          <Text style={[priceColor,commonStyles.font16,commonStyles.fontBold]}>{data.sellPrice}</Text>
          <Text style={[priceColor,commonStyles.font12]}> 万</Text>
          {
            data.unitPrice ? 
              <Text style={[commonStyles.font12,commonStyles.colorLight]}>  {data.unitPrice}</Text> :
              null
          }
        </Text>
        {
          this.sellOut ? 
            <Text style={styles.subInfo}>{data.sellOutTime ? data.sellOutTime + '成交' : null}</Text> :
            this._renderTags(data)
        }
      </HouseItem>
    );
  }
}
