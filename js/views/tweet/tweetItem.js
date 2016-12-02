/*
* @Author: zoucong
* @Date:   2016-12-02 12:52:16
* @Last Modified by:   zoucong
* @Last Modified time: 2016-12-02 17:56:14
*/

'use strict';

import React from 'react';
import {View,Text,Image} from 'react-native';
import {tweetItemStyles as styles} from './tweetStyles.js';
import commonStyles from '../../styles/common.js';
import _ from 'underscore';

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
    let tweet = this.props.data;
    let {owner} = tweet;
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
          <Text>{tweet.contentText}</Text>
        </View>
        <View style={[commonStyles.flexRow,styles.tweetPictureWrapper]}>
          {
            tweet.contentImages.map((d,i) => (<Image style={styles.tweetPicture} key={i} source={{uri:d}}/>) )
          }
        </View>
      </View>
    );
  }
}
