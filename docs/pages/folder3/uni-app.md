## Uni-App 坑点
1. css中不加分号不可以有注释,小程序会报错,但其他可以通过.
2. 微信小程序中的tabbar栏 不支持i18 国际化
3. 微信小程序和H5表现不同,各有支持不支持.比如语言切换处的对号 微信小程序中可以出现 但是H5中不出现
4. 管理台中,小程序会出现背景设置不起作用的可能  .原因 小程序组件不支持上类的样式 包一层 给父亲加上就可以了
5. 微信小程序不认组件,和uni-ui组件的类标签.给他们直接加样式加不上
```json 小程序分包控制 大于2M 以上要分包
{
    "subPackages": [{
			"root": "pagesA",
			"pages": [{
					"path": "/list/list",
					"style": {
						"navigationBarTitleText": "%Tabbar.setting%",
						"enablePullDownRefresh": false
					}
				}
			}],
		"preloadRule": {
			"pages/setting/setting": {
				"network": "all",
				"packages": ["pagesA"]
			}
		},
}
```

