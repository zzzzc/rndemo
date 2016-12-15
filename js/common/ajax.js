/*
* @Author: zoucong
* @Date:   2016-12-14 10:52:55
* @Last Modified by:   zoucong
* @Last Modified time: 2016-12-15 10:48:51
*/

'use strict';

import {NativeModules} from 'react-native';

let networkBridge = NativeModules.IWRNNetworkBridges;

function checkResponse(res) {
  if (res.errorCode) {
    throw res;
  } else {
    return res;
  }
}

function transParams(data) {
  if (data) {
    let params = {};
    Object.keys(data)
      .forEach(function(key) {
        let val = data[key];
        // 参数中数组转换为字符串
        params[key] = Array.isArray(val) ? JSON.stringify(val) : val;
      });
    return params;
  }
}

function post(url, data) {
  return networkBridge.post(url, transParams(data));
    .then(checkResponse);
}

function get(url, data) {
  return networkBridge.get(url, transParams(data));
    .then(checkResponse);
}

export default {post,get};