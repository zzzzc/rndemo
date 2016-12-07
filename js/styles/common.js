/*
* @Author: zoucong
* @Date:   2016-12-02 11:09:43
* @Last Modified by:   zoucong
* @Last Modified time: 2016-12-07 16:21:29
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
  }
});