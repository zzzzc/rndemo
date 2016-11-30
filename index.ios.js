/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity,
  NativeModules
} from 'react-native';

import NewHouse from './js/views/newHouse/';
import NewHouseDetail from './js/views/newHouseDetail/';

let IWReactNativeBridges = NativeModules.IWReactNativeBridges;

let backHomeView = function () {
  // 参数与OC定义的方法所接受参数对应
  IWReactNativeBridges.BackHomeView({}, (data)=>{
    console.log(data);// 'success'
  });
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  }
});

let NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    return (
      <TouchableOpacity onPress={()=>index > 0 ? navigator.pop() : backHomeView()}>
        <Text>返回</Text>
      </TouchableOpacity>
    );
  },
  RightButton (route, navigator, index, navState) {
    return null;
  },
  Title (route, navigator, index, navState){
    return <Text>{route.title}</Text>
  }
};

export default class RNRootView extends Component {
  _renderScene(state,navigator){
    switch (state.state){
      case 'NewHouse':
        return <NewHouse {...{state,navigator}}/>;
      case 'NewHouseDetail':
        return <NewHouseDetail {...{state,navigator}}/>
      default:
        return <View/>;
    }
  }
  render() {
    let {props:{route}} = this;
    return(
      <View style={styles.container}>
        <Navigator 
          initialRoute={route} 
          renderScene={this._renderScene}
          navigationBar={
            <Navigator.NavigationBar
              routeMapper={NavigationBarRouteMapper}
            />
          }
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('RNRootView', () => RNRootView);
