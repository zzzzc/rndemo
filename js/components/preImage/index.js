/*
* @Author: zoucong
* @Date:   2016-12-15 15:43:42
* @Last Modified by:   zoucong
* @Last Modified time: 2016-12-16 16:01:58
*/

'use strict';


import React from 'react';
import { StyleSheet , View , Image , ProgressViewIOS ,Platform } from 'react-native';

const isIOS = (Platform.OS === 'ios');

let styles = StyleSheet.create({
  progressView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 2
  },
  holderImage: {
    position: 'absolute',
    zIndex: -1,
    left: 0,
    top: 0
  }
});

export default class PreImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      loaded: false
    };
  }

  _onProgress(e) {
    let {loaded,total} = (e.nativeEvent);
    this.setState({
      progress: loaded / total
    });
  }

  _onLoad() {
    this.setState({
      loaded: true
    });
  }

  render() {
    let {props,state:{loaded,progress}} = this;
    return (
      <View>
        {
          // android添加默认图片
          (isIOS || loaded) ?  null : <Image {...props} style={styles.holderImage} source={props.defaultSource}/>
        }
        <Image {...props} 
          onProgress={isIOS ? this._onProgress.bind(this) : undefined} 
          onLoad={this._onLoad.bind(this)} >
          {props.children}
        </Image>
        {
          // ios添加进度条
          isIOS ? (
            loaded   ? 
              null : 
              <ProgressViewIOS style={styles.progressView} progress={progress} progressTintColor="red"/>
          ): 
          null 
        }
      </View>
    );
  }
}


