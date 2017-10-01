import Vue from 'vue'
// 使用网页加载进度条
import VueProgressBar from 'vue-progressbar'
import App from './App'
import router from './router'
// 引入vuex的存储对象
import store from './store'
// 引入后端接口
import api from './api'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import './assets/global.css'


Vue.use(ElementUI)
/**
 * 获取到当前用户然后储存在vuex中
 */
const user = api.SDK.User.current()
if (user) {
  store.commit('setUser', user);
}
/**
 * 配置进度条参数，并使用
 */
const options = {
  color: '#048888',
  // color: '#B61A1A',  
  failedColor: '#874b4b',
  thickness: '2.5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}

Vue.use(VueProgressBar, options)

Vue.config.productionTip = false
localStorage.setItem('debug', 'leandcloud*') //开启调试模式

Vue.mixin({
  // 每个文件在创建前注册$api =api
  beforeCreate() {
    if (!this.$api) {
      this.$api = api;
    }
  }
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.needLogin)) {
    if (!store.state.user) {
      app.$message.error("请先登录");
      next({
        path: '/signIn'
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})

/* eslint-disable no-new */
var app = new Vue({
  el: '#app',
  router,
  store,
  // components: { App } 
  // template: '<App/>',
  render: h => h(App)
})
