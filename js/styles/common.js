/*
* @Author: zoucong
* @Date:   2016-12-02 11:09:43
* @Last Modified by:   zoucong
* @Last Modified time: 2016-12-16 11:42:55
*/

'use strict';

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#eee'
  },
  sceneContainer: {
    flex: 1,
    marginTop: 64
  },
  flexRow: {
    flexDirection: 'row'
  },
  flexCol: {
    flexDirection: 'column'
  },
  // justifyContent
  justifyCenter: {
    justifyContent: 'center'
  },
  justifyStart: {
    justifyContent: 'flex-start'
  },
  justifyEnd: {
    justifyContent: 'flex-end'
  },
  // alignItems
  itemsCenter: {
    alignItems: 'center'
  },
  itemsStart: {
    alignItems: 'flex-start'
  },
  itemsEnd: {
    alignItems: 'flex-end'
  },
  // flex
  flexFirst: {
    flex: 1
  },
  flexNormal: {
    flex: 0
  },
  // alignSelf
  selfCenter: {
    alignSelf: 'center'
  },
  selfStart: {
    alignSelf: 'flex-start'
  },
  selfEnd: {
    alignSelf: 'flex-end'
  },
  //font
  fontBold:{
    fontWeight: 'bold'
  },
  font12:{
    fontSize: 12
  },
  font13:{
    fontSize: 13
  },
  font14:{
    fontSize: 14
  },
  font15:{
    fontSize: 15
  },
  font16:{
    fontSize: 16
  },
  font17:{
    fontSize: 17
  },
  // colors
  colorPrime:{
    color:'#E84A01'
  },
  colorLight:{
    color:'#757575'
  }
});