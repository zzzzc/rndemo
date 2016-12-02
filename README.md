# React-native On IOS

## 目录
1. [开发环境及项目结构](#install)
2. [在APP中嵌入RN页面](#route)
3. [在RN中调用APP接口](#interface)
4. [开发调试](#dev)
5. [编译打包](#build)

<a id="install"></a>
## 开发环境及项目结构
### 项目依赖：
1. nodejs;
2. x-code;
3. watchman: `$ brew install watchman`;
4. react-native-cli: `$ npm i react-native-cli -g`;


> Ref:[https://facebook.github.io/react-native/docs/getting-started.html](https://facebook.github.io/react-native/docs/getting-started.html)

### 项目结构:

```
.
├── README.md
├── __tests__
├── android	
├── index.android.js
├── index.ios.js    //ios 入口文件
├── ios             //ios demo App
├── js
│   ├── components  //组件
│   ├── styles      //通用样式
│   └── views       //页面
├── node_modules
└── package.json
```

<a id="route"></a>
## 在APP中嵌入RN页面
### 安装ios依赖
a. 安装 Command Line Tools for Xcode: `$ xcode-select`;

b. 安装 [cocoapods](http://www.jianshu.com/p/b64b4fd08d3c): `$ gem update --system` , `$ gem install cocoapods`;

c. 在ios项目里引入react依赖：在ios/Podfile里加入如下代码

```
pod 'React', :path => '../node_modules/react-native', :subspecs => [
  'Core',
  'RCTText',
  'RCTNetwork',
  'RCTWebSocket', # needed for debugging
  'RCTAnimation',
  # Add any other subspecs you want to use in your project
]
```

d. `$ pod install`安装React-Native;

e. 在Build Phases -> Link Binary With Libraries 中加入RN;

f. 更改Info.plist，允许http:

```XML
<key>NSAppTransportSecurity</key>
<dict>
    <key>NSExceptionDomains</key>
    <dict>
        <key>localhost</key>
        <dict>
            <key>NSTemporaryExceptionAllowsInsecureHTTPLoads</key>
            <true/>
        </dict>
    </dict>
</dict>
```

### 在App中嵌入RN页面
<a id="IHReactNativeViewController"></a>

定义 IHReactNativeViewController 接口：

```objective-c
/**
 * IHReactNativeViewController.h
 */

#import <UIKit/UIKit.h>

@interface IHReactNativeViewController : UIViewController
- (id)initWithProperties:(NSDictionary *) initialProperties;
@end


/**
 * IHReactNativeViewController.m
 */

#import "IHReactNativeViewController.h"
#import "RCTRootView.h"


@implementation IHReactNativeViewController

- (id)initWithProperties :(NSDictionary *) initialProperties{
    NSLog(@"IHReactNativeViewController");
    
    self = [super init]; 
    // 开发时使用，iPhone上调试时应修改host为ip：
    NSURL *jsCodeLocation = [NSURL URLWithString: @"http://localhost:8081/index.ios.bundle?platform=ios"];
        
    // 发布时使用：
    //NSBundle *jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"index.ios" withExtension:@"jsbundle"];
    
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

使用IHReactNativeViewController：

```objective-c
#import "IHReactNativeViewController.h"

// 获取一个UIViewController实例
UIViewController *controller = [[IHReactNativeViewController alloc] 
	initWithProperties :
		// 传入的props
		@{
	   	 	@"state": @"NewHouse"
		}
	];

// 切换视图
[self.navigationController pushViewController:controller animated:YES];
```

> Ref: [https://facebook.github.io/react-native/docs/integration-with-existing-apps.html](https://facebook.github.io/react-native/docs/integration-with-existing-apps.html)

<a id="interface"></a>
## 在RN中调用APP接口

首先在APP中写好一个接口模块

```objective-c
/**
 * IWReactNativeBridges.h
 */
 
#import "RCTBridgeModule.h"

@interface IWReactNativeBridges : NSObject <RCTBridgeModule>
@end

/**
 * IWReactNativeBridges.m
 */

#import "IWReactNativeBridges.h"
#import "IWHomeViewController.h"
#import "IWMainTabViewController.h"
#import "IHAppDelegate.h"

@implementation IWReactNativeBridges

RCT_EXPORT_MODULE();//这里传入js调用的接口模块名，默认为OC中定义的名字(IWReactNativeBridges)

//定义接口的一个方法：BackHomeView
RCT_EXPORT_METHOD(BackHomeView:(NSDictionary *)dictionary callback:(RCTResponseSenderBlock)callback){
  IWMainTabViewController *theNewRootVC = kAPPDelegate.theNewRootVC;
  IWHomeViewController *homeViewController = (IWHomeViewController *)[theNewRootVC findControllerOfClass:[IWHomeViewController class]];

  //需要在主线程中执行
  dispatch_async(dispatch_get_main_queue(),^{
    [homeViewController.navigationController popToRootViewControllerAnimated:YES];
    callback(@[@"success"]);//callback参数合并成数组回传给JS
  });
}

@end

```

在js中调用该接口

```js
import {NativeModules} from 'react-native';

let IWReactNativeBridges = NativeModules.IWReactNativeBridges;
let backHomeView = function () {
  // 参数与OC定义的方法所接受参数对应
  IWReactNativeBridges.BackHomeView({}, (data)=>{
    console.log(data);// 'success'
  });
};

```

>Ref: [http://facebook.github.io/react-native/docs/native-modules-ios.html](http://facebook.github.io/react-native/docs/native-modules-ios.html)


<a id="dev"></a>
## 开发调试

### 模拟器中调试
1. 运行 `$ npm start`;
2. 在x-code中打开App;
3. 使用`command + R`刷新视图，`command + D`打开调试菜单

### iPhone中调试

<a id="build"></a>
## 编译打包
1. 运行`$ npm run build`，打包js;
2. 更改上文 [IHReactNativeViewController.m](#IHReactNativeViewController) 中jsCodeLocation的值;
3. 在xcode中添加assets【必须用Create folder references的方式，添加完是蓝色文件夹图标】和index.ios.jsbundle;
4. 没有关闭Debug JS Remotely会出现错误，`command + d`选择关闭;
5. 关闭developer menu : For iOS open your project in Xcode and select Product → Scheme → Edit Scheme... (or press ⌘ + <). Next, select Run from the menu on the left and change the Build Configuration to Release.

> Ref: [https://segmentfault.com/a/1190000004189538](https://segmentfault.com/a/1190000004189538)

<a id="more"></a>