/*
* @Author: zoucong
* @Date:   2016-12-02 11:19:48
* @Last Modified by:   zoucong
* @Last Modified time: 2016-12-05 13:38:41
*/

'use strict';

import React from 'react';
import {StyleSheet,View,ListView,Text,ActivityIndicator} from 'react-native';
import _ from 'underscore';
import utils from '../../common/utils.js';
import commonStyles from '../../styles/common.js';
import TweetItem from './components/tweetItem.js';

let styles = StyleSheet.create({
  loadingText: {
    color: '#bbb'
  },
  loading: {
    justifyContent: 'center'
  }
});

export default class index extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props){
    super(props);
    
    this.tweetSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id});
    this.state = {
      tweets : [],
      isLoading: false
    };
  }

  viewImages(images){
    let {props:{navigator}} = this;
    navigator.push({state:'imageSlider',title:'预览',props:{images}});
  }

  _renderRow(rowData, sectionID, rowID){
    return <TweetItem data={rowData} onPressImage={this.viewImages.bind(this)} />;
  }

  async _getTweets(){
    if (this.state.isLoading){
      return;
    }
    this.setState({isLoading: true});
    try{
      let {tweets} = this.state; 
      let last_id = tweets.length ? _.last(tweets).id : undefined;
      let params = utils.params({last_id,size:20});
      let res = await fetch(`https://coding.net/api/social/tweet/public_tweets?${params}`);
      let resJson = await res.json();
      if (resJson.code === 0){
        let merged = tweets.concat(resJson.data);
        this.setState({tweets:merged});
      }
    }catch(e){
      console.error(e);
    }
    this.setState({isLoading: false});
  }

  componentDidMount(){
    this._getTweets();
  }

  render() {
    let {tweetSource,state:{tweets,isLoading}} = this;
    return (
      <View style={commonStyles.sceneContainer}>
        <ListView 
          dataSource={tweetSource.cloneWithRows(tweets)} 
          renderRow={this._renderRow.bind(this)} 
          enableEmptySections={true}
          onEndReached={this._getTweets.bind(this)}
          renderFooter={() =>
            (isLoading ? 
              (
                <View style={[commonStyles.flexRow,styles.loading]}>
                  <ActivityIndicator />
                  <Text style={styles.loadingText}>加载中...</Text> 
                </View>
              ) :
              null)
          }
        >
        </ListView>
      </View>
    );
  }
}
