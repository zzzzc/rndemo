/*
* @Author: zoucong
* @Date:   2016-12-02 10:50:04
* @Last Modified by:   zoucong
* @Last Modified time: 2016-12-02 11:39:40
*/

'use strict';

import React from 'react';
import {View,Navigator,Text} from 'react-native';
import commonStyles from '../../styles/common.js';
import Tweet from '../tweet';

let homeRoutes = (state) => {
  switch (state){
    case 'tweet':
      return Tweet;
    default:
      return View;
  }
};

export default class Home extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  static navigationBarRouteMapper = {
    LeftButton(route, navigator, index, navState) {
      return index > 0 ?
        (
          <TouchableOpacity onPress={navigator.pop()}>
            <Text>返回</Text>
          </TouchableOpacity>
        ) :
        null;
    },

    RightButton (route, navigator, index, navState) {
      return null;
    },

    Title (route, navigator, index, navState){
      return <Text>{route.title}</Text>
    }
  };

  _renderScene(route,navigator){
    let {state,params} = route;
    let StateView = homeRoutes(state);
    return <StateView {...{params,navigator}}/>
  }

  render() {
    let {props:{route={state:'tweet',title:'冒泡广场'}}} = this;
    return(
      <View style={commonStyles.homeContainer}>
        <Navigator 
          initialRoute={route} 
          renderScene={this._renderScene}
          navigationBar={
            <Navigator.NavigationBar
              routeMapper={Home.navigationBarRouteMapper}
            />
          }
        />
      </View>
    );
  }
}
