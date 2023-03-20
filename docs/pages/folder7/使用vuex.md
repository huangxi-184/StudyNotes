>在大型项目中,使用$bus容易导致代码繁琐,且不容易阅读. 仍然可以使用props 传值
>这个时候,vuex的出现可以很好的帮助我们解决我们这种问题. 所以vuex是适合大型项目的传值

**vuex 是vue的状态管理模式 采用集中式存储管理**
---
*相当于一个仓库,里面存放着各种需要共享的数据,所有组件都可以拿到里面的数据*
    共分为5个部分
1. state 统一定义管理公共数据
2. mutations: 使用它来修改数据
3. getters: 类似于vue中的计算属性
4. actions: 类似于methods,用于发起异步请求,比如axios
5. modules: 模块拆分

``` JavaScript
import Vue from 'vue' 
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'


Vue.use(Vuex)
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
```

### 第一次使用vuex的方法
1. `npm i vuex`
2. 实例化store.新建store文件夹,在该文件夹下建index.js文件
``` JavaScript
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  }
})
export default store

```
3. main.js 中引入
``` JavaScript
import store from './store' 

new Vue({
  // 省略其他...
  store // 2. 注入Vue实例
})
```

vue2 中使用this.$store.state.属性名 来获取公共数据
vue3 中使用store.state.属性名 来取得公共数据

在模板中 可以省去this 变为 {{$store.state.属性名}} 来获取公共数据

在组件中若需要修改state,则需要使用mutations 来处理

    **store.commit('mutation事件名',mapper参数)**
*注意这是methods中的方法 调取mutation的事件 来修改数据 前一个参数是mutation的事件名 后一个是传入事件的参数*


 **vuex中用getters的派生状态**
    *对state数据进行加工得到新数据。与组件中computed一样*
``` JavaScript
new Vuex.store({
  // 省略其他...
  getters: {
    // state 就是上边定义的公共数据state
    getter的名字: function(state) {
        // 加工数据
      return 要返回的值
    }
  }
})
```

组件中使用`store.getters.xxx` 来取加工后的数据 


若是发生了异步请求 就需要action 
``` JavaScript
  actions: {
    // context对象会自动传入，它与store实例具有相同的方法和属性
    action的名字: function(context, 载荷) {
      // 1. 发异步请求, 请求数据
      
      // 2. commit调用mutation来修改/保存数据
      
      // context.commit('mutation名', 载荷)
    }
    logout({ commit }) {
      return new Promise((resolve, reject) => {
        commit("LOGIN_OUT");
        localStorage.removeItem("tofflon_pms_mobile_user-token");
        resolve();
        })
        }
    }

```
 action中可以通过调用 mutation来修改state，而不是直接变更状态 可以包含任意异步的请求

通过使用`store.dispatch('actions的名字', 参数)`来调用action 

*将异步请求放在action中的好处.*
> 1. 代码得到了进一步封装。将发ajax和保存数据到vuex绑定在一起。
> 2. 逻辑更通顺 直接将获取到的数据就存在vuex 中,省去转存的数据



## Vuex-用modules来拆分复杂业务

modules 的使用方法 使用后就可以
``` JavaScript
export default new Vuex.Store({
  // state: 用来保存所有的公共数据
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
  	模块名1： {
    		// namespaced为true，则在使用mutations时，就必须要加上模块名
            // namespaced不写，默认为false，则在使用mutations时，不需要加模块名
      	namespaced: true, 
  		  state: {},
  			getters: {},
  			mutations: {},
  			actions: {},
  			modules: {}
  	}
  }
})
```

访问数据和修改数据的调整,访问模块中的数据，要加上模块名
模板中
`获取数据项：  {{$store.state.模块名.数据项名}}`
`获取getters： {{$store.getters['模块名/getters名']}}`

JS中 mutations/actions:
`store.commit('mutations名')        // namespaced为false`
`store.commit('模块名/mutations名')  // namespaced为true`

**在使用modules时，建议都给加上namespaced!**


### 辅助函数mapState
当访问某个数据项嵌套太深了，用store访问数据太麻烦,可以mapState把公共数据（vuex.store） 映射 到本组件内部的计算属性中

使用方法: `import { mapState } from 'vuex'` 所需处
mapState是一个函数  返回值是一个对象 我们需要将其...展开  ...是对象的展开运算符


### 辅助函数mapState*用于对数据重命名*

vuex中的数据与本组件内的数据名相同,我们可以使用`...mapState({'新名字': 'xxx'})`对数据重命名

模块中 重命名的方法`...mapState('模块名', {'新名字': 'xxx'})`

**{ commit }将content 给解构出来**
