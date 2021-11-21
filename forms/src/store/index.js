import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwic3ViIjoyNywiaWF0IjoxNjM3NDc3NjQ5fQ.XuGB3jOfiAdpObzUAGZHLl5Tt65uv8FIzd9hEIt-mfY"
  },
  mutations: {
    setToken (state, value) {
      state.token = value;
    }
  }
})

export default store;
