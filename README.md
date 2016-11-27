# React-native On IOS 调研

##目录
1. [开发环境及项目结构](#1)

<a id="1"></a>
##1. 开发环境及项目结构
###项目依赖：

> Ref:[https://facebook.github.io/react-native/docs/getting-started.html](https://facebook.github.io/react-native/docs/getting-started.html)

<a id="2"></a>
##2. 在现有APP中加入RN
###安装ios依赖
1.安装 Command Line Tools for Xcode: `$ xcode-select`;

2.安装 [cocoapods] (http://www.jianshu.com/p/b64b4fd08d3c): `$ gem update --system` , `$ gem install cocoapods`;

3.在ios项目里引入react依赖，在ios/Podfile里加入如下代码

```
pod 'React', :path => '../node_modules/react-native', :subspecs => [
  'Core',
  'RCTText',
  'RCTNetwork',
  'RCTWebSocket', # needed for debugging
  # Add any other subspecs you want to use in your project
]
```

4.`$pod install`安装React-Native;

###见证奇迹的时刻




> Ref: [https://facebook.github.io/react-native/docs/integration-with-existing-apps.html](https://facebook.github.io/react-native/docs/integration-with-existing-apps.html)

<a id="3"></a>
##3. 混合开发、页面路由

<a id="4"></a>

<a id="5"></a>

<a id="6"></a>