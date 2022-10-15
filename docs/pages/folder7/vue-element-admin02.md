##  手把手学习后台
1. 随着业务的迭代，模块还会会越来越多。 所以这里建议根据业务模块来划分 views，并且 将views 和 api 两个模块一一对应，从而方便维护。
   ![](/iamge/1.png)
   API模块与view 模块要一一对应  若有公用的API 则进行单独新建文件进行放置

2. components 放置的都是全局公用的一些组件，如上传组件，富文本等等
3. store 不要为了vuex 和Pinia而 全局,业务之间的耦合度是很低的. 就直接不同页面对应不同的数据,如登录token,用户信息，或者是一些全局个人偏好设置等 需要用store 保存
4. alias 善用别名
   项目过大,逻辑关系比较复杂,用相对详细寻找,比较麻烦,可以使用别名指向src 文件下
   ```
        resolve: {
        alias: {
            '~': resolve(__dirname, 'src')
        }
        }

        //使用
        import stickTop from '~/components/stickTop'
   ```