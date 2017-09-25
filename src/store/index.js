import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    }
  },
  getters:{
    uid({user}){
      if(user)return user.id;
      return null;
    }
  },
  actions: {
    exit(context) {
      context.commit('setUser', null);
    },
    login(context, user) {  //传入use才可能进行设置并登录（实现存储的逻辑）
      context.commit('setUser', user);
    }
  }
})

export default store
