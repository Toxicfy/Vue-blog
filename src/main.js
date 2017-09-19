import Vue from 'vue'
import VueProgressBar from 'vue-progressbar'
import App from './App'
import router from './router'
import store from './store'
import api from './api'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)

const user = api.SDK.User.current()
console.log(user)
if (user) {
  store.commit('setUser', user);
}

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
  beforeCreate() {
    if (!this.$api) {
      this.$api = api;
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  // components: { App } 
  // template: '<App/>',
  render: h => h(App)
})
