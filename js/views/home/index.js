/*
* @Author: zoucong
* @Date:   2016-12-15 10:55:44
* @Last Modified by:   zoucong
* @Last Modified time: 2016-12-15 14:55:38
*/

'use strict';
import React from 'react';
import { View } from 'react-native';
import HouseHistory from '../houseHistory/';

let homeRoutes = (state) => {
  switch (state) {
    case 'houseHistory':
      return HouseHistory;
    default:
      return View;
  }
};

export default class Home extends React.Component {
  render() {
    let {props:{route}} = this;
    // TODO 跳转时传入route,删掉下面
    route = {
      state: "houseHistory",
      params: {}
    };
    
    let Page = homeRoutes(route.state);
    return <Page {...route.params}/>
  }
}
