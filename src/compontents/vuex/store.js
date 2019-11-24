import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export const store = new Vuex.Store({
  // 存放数据
  state: {
    userName : ''
  },
  mutations: {
    userName(state,userName){
      state.userName = userName
    }
  },
})