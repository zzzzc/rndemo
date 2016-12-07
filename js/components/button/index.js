/*
* @Author: zoucong
* @Date:   2016-11-29 10:41:56
* @Last Modified by:   zoucong
* @Last Modified time: 2016-12-07 11:41:35
*/

'use strict';

import React, { Component } from 'react';
import {TouchableOpacity,Text} from 'react-native';

export default class Button extends Component {
  static propTypes = {
    name: React.PropTypes.string,
    style:React.PropTypes.object,
    textStyle:React.PropTypes.object,
    onPress:React.PropTypes.func
  };

  render() {
    let {props:{children,onPress,style={},textStyle={}}} = this;
    return (
      <TouchableOpacity style={[styles.layout,style]} onPress={onPress}>
        <Text style={[styles.text,textStyle]}>
          {children}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  layout: {
    marginHorizontal: 10,
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#333',
    borderStyle: 'solid'
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
});
