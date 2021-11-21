import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: null
  },
  mutations: {
    setToken (state, value) {
      state.token = value;
    }
  }
})

export default store;
