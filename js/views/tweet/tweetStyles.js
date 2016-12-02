/*
* @Author: zoucong
* @Date:   2016-12-02 14:55:28
* @Last Modified by:   zoucong
* @Last Modified time: 2016-12-02 18:10:14
*/

'use strict';

import {StyleSheet} from 'react-native';

export let tweetStyles = StyleSheet.create({
  loadingText: {
    color: '#bbb'
  },
  loading:{
    justifyContent:'center'
  }
});

export let tweetItemStyles = StyleSheet.create({
  tweetItem: {
    backgroundColor:'#fff',
    marginVertical:5,
    paddingVertical:5,
    paddingHorizontal:10
  },
  avatar: {
    width:36,
    height:36,
    borderRadius:18
  },
  tweetPictureWrapper:{
    flexWrap: 'wrap'
  },
  tweetPicture:{
    width:100,
    height:100,
    margin:5
  }
});