/*
* @Author: zoucong
* @Date:   2016-12-05 10:21:11
* @Last Modified by:   zoucong
* @Last Modified time: 2016-12-05 13:37:24
*/

'use strict';


import React from 'react';
import {StyleSheet,View,Text,Image} from 'react-native'
import Gallery from 'react-native-gallery';
import commonStyles from '../../styles/common.js';


let styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor:'rgba(0,0,0,0.8)'
  }
});

export default class ImageSlider extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    let {props:{images}} = this;
    return (
      <View style={[commonStyles.sceneContainer,styles.wrapper]}>
        <Gallery 
          images={images}
        />
      </View>
    );
  }
}
