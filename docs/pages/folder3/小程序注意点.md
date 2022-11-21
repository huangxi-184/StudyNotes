**要保证全局的数据可以在任何文件中安全的被使用到，那么可以在 App() 中进行设置**
```js
// app.js
App({
  globalData: 1
})
```

```js
// a.js
// 获取 global 变量
var app = getApp()

// 修改 global 变量
app.globalData++  // 执行后 globalData 数值为 2
```
b.js 中的获取方法
`getApp().globalData`

``` js
App({
  onLaunch: function(options) {},
  onShow: function(options) {},
  onHide: function() {},
  onError: function(msg) {},
  globalData: 'I am global data'
})
```

在页面Page构造器里onLoad的option可以拿到当前页面的打开参数，其类型是一个Object，其键值对与页面URL上query键值对一一对应
```js
// pages/list/list.js
// 列表页使用navigateTo跳转到详情页
wx.navigateTo({ url: 'pages/detail/detail?id=1&other=abc' })

// pages/detail/detail.js
Page({
  onLoad: function(option) {
        console.log(option.id)
        console.log(option.other)
  }
})
```
<!-- Page实例下的方法调用this.setData把数据传递给渲染层，从而达到更新界面的目的。
setData其一般调用格式是 setData(data, callback)，其中data是由多个key: value构成的Object对象。 -->
**所有组件名和属性都是小写，多个单词会以英文横杠 "-" 进行连接。**
``` css
通过hover-class属性改变触摸时的样式
.hover{

  background-color: gray;

}

<!--page.wxml -->

<button hover-class="hover"> 点击button </button>

<view hover-class="hover"> 点击view</view>
```

**有时候需要传一些比较复杂的数据结构到后台的时候，用JSON格式会更加合适。此时我们可以在wx.request的header参数设置content-type头部为application/json，小程序发起的请求的包体内容就是data参数对应的JSON字符串，代码示例如下**
`header: { 'content-type': 'application/json'},`

尤其注意，只要成功收到服务器返回，无论HTTP状态码是多少都会进入success回调。因此开发者自己通过对回包的返回码进行判断后再执行后续的业务逻辑。'

``` 
4.4.6 排查异常的方法
在使用wx.request接口我们会经常遇到无法发起请求或者服务器无法收到请求的情况，我们罗列排查这个问题的一般方法：

检查手机网络状态以及wifi连接点是否工作正常。
检查小程序是否为开发版或者体验版，因为开发版和体验版的小程序不会校验域名。
检查对应请求的HTTPS证书是否有效，同时TLS的版本必须支持1.2及以上版本，可以在开发者工具的console面板输入showRequestInfo()查看相关信息。
域名不要使用IP地址或者localhost，并且不能带端口号，同时域名需要经过ICP备案。
检查app.json配置的超时时间配置是否太短，超时时间太短会导致还没收到回报就触发fail回调。
检查发出去的请求是否302到其他域名的接口，这种302的情况会被视为请求别的域名接口导致无法发起请求。
```