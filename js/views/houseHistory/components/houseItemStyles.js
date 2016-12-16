/*
* @Author: zoucong
* @Date:   2016-12-16 10:58:16
* @Last Modified by:   zoucong
* @Last Modified time: 2016-12-16 17:50:53
*/

'use strict';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container:{
    padding:12,
    borderTopColor:'#E6E6E6',
    borderTopWidth:1,
    borderStyle:'solid'
  },
  imageSize:{
    width:132,
    height:88
  },
  centerIcon:{
    alignSelf:'center',
    position:'relative',
  },
  newHouseBanner:{
    backgroundColor:'rgba(126,85,200,.80)',
    height:23,
    color:'#ffffff',
    fontSize:12,
    paddingTop:3,
    paddingLeft:6,
    maxWidth:100
  },
  newHouseBannerAngular:{
    height:23
  },
  leftTopIcon:{
    position:'absolute',
    left:0,
    top:4
  },
  houseInfo:{
    marginLeft:8
  },
  // 第1行
  houseTitle:{
    fontWeight:'bold',
    fontSize:15,
    lineHeight:21,
    marginBottom:2
  },
  // 第2行
  subTitle:{
    fontWeight:'bold',
    fontSize:13,
    lineHeight:18,
    marginBottom:2
  },
  // 第3行
  baseInfo:{
    //paddingTop:2,
    height:22,
    marginBottom:4
  },
  // 第4行，文字
  subInfo:{
    color:'#757575',
    fontSize:11,
    lineHeight:16
  },
  tagItem:{
    fontSize:12,
    backgroundColor:'#F4F0E7',
    color:'#847B64',
    paddingHorizontal:8,
    paddingVertical:2,
    marginRight:4
  }
});
