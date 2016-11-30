/*
* @Author: zoucong
* @Date:   2016-11-29 15:53:01
* @Last Modified by:   zoucong
* @Last Modified time: 2016-11-29 16:24:39
*/

'use strict';

import React, { Component } from 'react';
import {Text, View} from 'react-native';
import Button from '../../components/button';

export default class NewHouse extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  render() {
    let {props:{navigator}} = this;
    return (
      <View style={{ marginTop: 64 }}>
        <Button onPress={()=>(navigator.push({state:'NewHouseDetail',title:"新房详情页"}))}>新房详情页</Button>
      </View>
    );
  }
}
