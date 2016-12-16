/*
* @Author: zoucong
* @Date:   2016-12-15 10:56:58
* @Last Modified by:   zoucong
* @Last Modified time: 2016-12-16 17:54:10
*/

'use strict';


import React from 'react';
import { View,Text,Image } from 'react-native';
import commonStyles from '../../../styles/common.js';
import PreImage from '../../../components/preImage/';
import styles  from './houseItemStyles.js';


function  getSellOutIcon (isNewHouse) {
  let icon = isNewHouse ? 
    require('../../../../resource/images/list/tag_soldout_xinfang.png') :
    require('../../../../resource/images/list/tag_soldout_small.png');
  return <Image style={styles.centerIcon} source={icon}/>;
}

function getVideoIcons(videoType){
  if (videoType === 0){
     return <Image key={'videoIcon'} source={require('../../../../resource/images/list/list_play_ic.png')}/>;
  }else if (videoType === 1){
     return <Image key={'videoIcon'} source={require('../../../../resource/images/list/panaroma_play_small.png')}/>;
  }
}

function getBanner(data) {
  if (data.publishByUser){
    return <Image key={'publishByUser'} style={styles.leftTopIcon} source={require('../../../../resource/images/list/tag_house_owner_for_list_conver.png')}/>;
  // TODO: 确认推荐顶置逻辑
  }else if(data.onlyOne){
    return <Image key={'onlyOne'} style={styles.leftTopIcon} source={require('../../../../resource/images/list/onlyone_for_list_toprecommend.png')}/>;
  }
}

function getNewhouseBanner(concessions) {
  return (
    <View key="banner" style={[commonStyles.flexRow,styles.leftTopIcon]}>
      <Text numberOfLines={1} style={styles.newHouseBanner}>{concessions}</Text>
      <Image style={styles.newHouseBannerAngular} source={require('../../../../resource/images/list/newhouse_coupon_bg.png')}/>
    </View>
  );
}


export default class HouseItem extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
    imageUrl:React.PropTypes.string
  };

  static getIcons(sellOut,data){
    let isNewHouse = (data.houseType === 2);
    if (sellOut){
      return getSellOutIcon(isNewHouse);
    }

    let icons = [];
    // TODO: hasVideo
    if (1 && !isNewHouse){
      icons.push(getVideoIcons(data.videoType));
    }

    //左上角图标
    if (isNewHouse) {
      let concessions = data.concessions;
      concessions && icons.push(getNewhouseBanner(concessions));
    } else {
      let banner = getBanner(data);
      banner && icons.push(banner);
    }

    return icons;
  }

  constructor(props) {
    super(props);
  }

  render() {
    let {props:{children,imageUrl='',icons=null}} = this;
    return (
      <View style={[commonStyles.flexRow,styles.container]}>
        <View style={[styles.imageSize]}>
          <PreImage 
            style={[styles.imageSize,commonStyles.justifyCenter,commonStyles.itemsCenter]} 
            source={{uri:imageUrl}}
            defaultSource={require('../../../../resource/images/list/img_no_4to3_small.png')}
          >
            {icons}
          </PreImage>
          
        </View>
        <View style={[commonStyles.flexFirst,commonStyles.flexCol,styles.houseInfo]}>
          {children}
        </View>
      </View>
    );
  }
}
