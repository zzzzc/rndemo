/*
* @Author: zoucong
* @Date:   2016-11-29 10:41:56
* @Last Modified by:   zoucong
* @Last Modified time: 2016-11-29 16:25:52
*/

'use strict';

import React, { Component } from 'react';
import {
  TouchableHighlight,
  Text,
  View
} from 'react-native';

import styles from './styles.js'; 

/**
 * @class Button
 * @attribute {Function} onPress     [description]
 * @attribute {Object}   layoutStyle [description]
 * @attribute {Object}   viewStyle   [description]
 * @attribute {Object}   textStyle   [description]
 * 
 */
export default class Button extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  render() {
    let {props:{children,onPress,layoutStyle={},viewStyle={},textStyle={}}} = this;
    return (
      <TouchableHighlight style={[styles.layout,layoutStyle]} onPress={onPress}>
        <View style={[styles.view,viewStyle]}>
          <Text style={[styles.text,textStyle]}>
            {children}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}
