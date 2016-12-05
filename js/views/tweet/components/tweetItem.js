/*
* @Author: zoucong
* @Date:   2016-12-02 12:52:16
* @Last Modified by:   zoucong
* @Last Modified time: 2016-12-05 11:21:23
*/

'use strict';

import React from 'react';
import {StyleSheet,View,Text,Image,TouchableOpacity} from 'react-native';
import commonStyles from '../../../styles/common.js';
import _ from 'underscore';

let styles = StyleSheet.create({
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

export default class tweetItem extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  static transContent(content){
    return content
      .replace(/<([a-zA-Z]+).*?>(.*?)<\/\1>/g,'$2')
      .replace(/<\/?(a|img).*?>/g,'')
      .replace(/<br>/g,'\n');
  };

  static getContentImages(content){
    let imgs = content.match(/https:\/\/dn-coding-net-production-pp\.qbox.*?\.jpg/g);
    return imgs ? _.unique(imgs) : [];
  };

  constructor(props){
    let tweet = props.data;
    let content = tweet.content;
    tweet.contentText = tweetItem.transContent(content);
    tweet.contentImages = tweetItem.getContentImages(content);
    super(props);
  }

  render() {
    let {data:tweet,onPressImage} = this.props;
    let {owner,contentImages,contentText} = tweet;
    return (
      <View style={styles.tweetItem}>
        <View style={commonStyles.flexRow}>
          <Image 
            source={{uri:owner.avatar}}
            style={styles.avatar}
          />
          <View style={commonStyles.flexCol}>
            <Text>{owner.name}</Text>
            <Text>{tweet.created_at}</Text>
          </View>
        </View>
        <View>
          <Text>{contentText}</Text>
        </View>
        <View style={[commonStyles.flexRow,styles.tweetPictureWrapper]}>
          {
            contentImages.map((d,i) => (
              <TouchableOpacity style={styles.tweetPicture} key={i} onPress={()=>onPressImage(contentImages)}>
                <Image style={styles.tweetPicture} source={{uri:d}}/>
              </TouchableOpacity>
            ))
          }
        </View>
      </View>
    );
  }
}
