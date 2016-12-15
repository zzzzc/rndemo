/*
* @Author: zoucong
* @Date:   2016-12-15 10:56:58
* @Last Modified by:   zoucong
* @Last Modified time: 2016-12-15 18:05:26
*/

'use strict';


import React from 'react';
import { StyleSheet,View,Text,Image } from 'react-native';
import commonStyles from '../../../styles/common.js';
import PreImage from '../../../components/preImage/';

const styles = StyleSheet.create({
  container:{
    padding:12
  },
  imageSize:{
    width:132,
    height:88
  },
  houseInfo:{
    marginLeft:8
  }
});

export default class HouseItem extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    let {props:{data}} = this;
    return (
      <View style={[commonStyles.flexRow,styles.container]}>
        <View style={[styles.imageSize]}>
          <PreImage 
            style={[styles.imageSize]} 
            source={{uri:'https://files.iwjw.com/newhousepc/2016/11/2/c16dafce1de94b4b8d04eaea213bf505.s.iwjw'}}
            defaultSource={require('../../../../resource/images/list/img_no_4to3_small.png')}
          />
        </View>
        <View style={[commonStyles.flexFirst,commonStyles.flexCol,styles.houseInfo]}>
          <Text>{data.name}</Text>
          <Text>{data.districtName}</Text>
          <Text>{data.defaultPrice}{data.priceFlag}</Text>
          <Text></Text>
        </View>
      </View>
    );
  }
}
