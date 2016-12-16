/*
* @Author: zoucong
* @Date:   2016-12-15 10:55:57
* @Last Modified by:   zoucong
* @Last Modified time: 2016-12-16 17:55:49
*/

'use strict';


'use strict';

import React from 'react';
import {StyleSheet,View,ListView,Text,ActivityIndicator} from 'react-native';
import commonStyles from '../../styles/common.js';
import NewHouseItem from './components/newHouseItem.js';
import SaleHouseItem from './components/saleHouseItem.js';
import RentHouseItem from './components/rentHouseItem.js';

let styles = StyleSheet.create({
  footer:{
    //backgroundColor:'#eee'
  },
  footerText:{
    color:'#aaa',
    fontSize:14,
    paddingVertical:3
  },
  loadingText:{
    paddingLeft:5
  },
  footerSpinner:{
    width:12
  }
});

export default class HouseHistory extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props){
    super(props);
    // TODO rowHasChanged规则匹配
    this.houseSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});
    this.state = {
      houses : [],
      status: '',
      completed: false
    };
  }

  _isLoading(){
    return this.state.status === 'loading';
  }

  _renderRow(rowData, sectionID, rowID){
    switch (rowData.houseType){
      case 0:
        return <RentHouseItem data={rowData} />
      case 1:
        return <SaleHouseItem data={rowData} />
      case 2:
        return <NewHouseItem data={rowData} />
      default:
        return <View/>
    }
  }

  _renderFooter(){
    let {completed} = this.state;
    let childNode = null;
    
    if (completed){
      childNode = (
        <Text style={[styles.footerText]}>数据已全部加载</Text>
      );
    }else if(this._isLoading()){
      childNode = [
        <ActivityIndicator key="spinner" />,
        <Text key="text" style={[styles.footerText,styles.loadingText]}>加载中...</Text> 
      ];
    }
    return <View style={[commonStyles.flexRow,commonStyles.justifyCenter,styles.footer]}>{childNode}</View>
  }

  async _getHouses(){
    if (this._isLoading()){
      return;
    }
    this.setState({status: 'loading'});
    try{
      let {houses} = this.state; 
      let res = await fetch(`http://rap.iwjwtest.com/mockjsdata/1/ihouse/House/getHistoryList.rest`);
      let resJson = await res.json();
      let mergedHouse = houses.concat(resJson.list);
      this.setState({houses:mergedHouse,status: 'success'});
    }catch(e){
      this.setState({status: 'failure'});
    }
  }

  componentDidMount(){
    this._getHouses();
  }

  render() {
    let {houseSource,state:{houses,isLoading}} = this;
    return (
      // TODO 匹配不同客户端margin
      <View style={[commonStyles.flexFirst,{marginTop:24}]}>
        <ListView 
          dataSource={houseSource.cloneWithRows(houses)} 
          renderRow={this._renderRow.bind(this)} 
          enableEmptySections={true}
          // onEndReached={this._getHouses.bind(this)}
          renderFooter={this._renderFooter.bind(this)}
        >
        </ListView>
      </View>
    );
  }
}
