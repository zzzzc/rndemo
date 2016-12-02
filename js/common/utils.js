/*
* @Author: zoucong
* @Date:   2016-12-02 14:49:07
* @Last Modified by:   zoucong
* @Last Modified time: 2016-12-02 14:50:47
*/

'use strict';

export default {
  params(obj) {
    return Object.keys(obj)
      .map(key => `${key}=${obj[key] || ''}`)
      .join('&');
  }
}