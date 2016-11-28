# React-native On IOS 调研

##目录
1. [开发环境及项目结构](#install)2. [在APP中嵌入RN页面](#route)
3. [在RN中调用OC接口](#interface)4. [开发和调试](#dev)5. [打包发布](#build)6. [一些感想](#more)

<a id="install"></a>
##开发环境及项目结构
###项目依赖：1. Node2. Watchman （监听文件变化）3. react-native-cli （rn命令行工具）4. X-code

> Ref:[https://facebook.github.io/react-native/docs/getting-started.html](https://facebook.github.io/react-native/docs/getting-started.html)###项目结构:

```
.
├── IWHouseIOS		//爱屋ios客户端
├── README.md
├── __tests__
├── android			
├── index.android.js
├── index.ios.js    //ios 入口文件
├── node_modules
├── npm-debug.log
└── package.json
```

<a id="route"></a>
##在现有APP中加入RN
###安装ios依赖
a. 安装 Command Line Tools for Xcode: `$ xcode-select`;

b. 安装 [cocoapods] (http://www.jianshu.com/p/b64b4fd08d3c): `$ gem update --system` , `$ gem install cocoapods`;

c. 在ios项目里引入react依赖：在ios/Podfile里加入如下代码

```
pod 'React', :path => '../node_modules/react-native', :subspecs => [
  'Core',
  'RCTText',
  'RCTNetwork',
  'RCTWebSocket', # needed for debugging
  # Add any other subspecs you want to use in your project
]
```

d. `$ pod install`安装React-Native;

e. 在Build Phases -> Link Binary With Libraries 中加入RN; 

###在App中嵌入RN页面
定义 IHReactNativeViewController 接口

```objective-c
#import <UIKit/UIKit.h>
#import "IHReactNativeViewController.h"
#import "RCTRootView.h"

@interface IHReactNativeViewController ()

@end

@implementation IHReactNativeViewController

- (id)initWithProperties :(NSDictionary *) initialProperties{
    NSLog(@"IWNewHouseHome");
    
    NSURL *jsCodeLocation = [NSURL URLWithString: @"http://localhost:8081/index.ios.bundle?platform=ios"];
    RCTRootView *rootView =
      [[RCTRootView alloc] initWithBundleURL : jsCodeLocation
                           moduleName        : @"RNRootView"
                           initialProperties : initialProperties
                           launchOptions     : nil];
   
    self.view = rootView;
    return self;
}

@end
```

使用ViewController

```objective-c
// 获取一个UIViewController实例
UIViewController *controller = [[IHReactNativeViewController alloc] 
	initWithProperties :
		// 传入的props
		@{
	   	 	@"state": @"NewHouse/"
		}
	];

// 切换视图
[self.navigationController pushViewController:controller animated:YES];
```

> Ref: [https://facebook.github.io/react-native/docs/integration-with-existing-apps.html](https://facebook.github.io/react-native/docs/integration-with-existing-apps.html)

<a id=""></a>
##在RN中调用OC接口

首先在RN中写好一个接口

```objective-c
```

在js中调用该接口

```js
```

>Ref: [http://facebook.github.io/react-native/docs/native-modules-ios.html](http://facebook.github.io/react-native/docs/native-modules-ios.html)


<a id="dev"></a>##开发调试
1. 运行 `$ npm start`;
2. 在x-code中打开App;

<a id="build"></a>##打包发布

<a id="more"></a>##5. 一些感想