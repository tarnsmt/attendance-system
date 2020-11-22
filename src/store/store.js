import Vue from 'vue'
import Vuex from 'vuex'

// Make vue aware of Vuex
Vue.use(Vuex)

// Create an object to hold the initial state when
// the app starts up
const state = {
  // TODO: Set up our initial state
  userid: '',
  username: '',
  password: '',
  login: false
}

// Create an object storing various mutations. We will write the mutation
const mutations = {
  // TODO: set up our mutations
  USERID_CHANGE: (state, value) => {
    state.userid = value
  },
  NAME_CHANGE: (state, value) => {
    state.username = value
  },
  PASSWORD_CHANGE: (state, value) => {
    state.password = value
  },
  LOGIN_CHANGE: (state, value) => {
    state.login = value
  }
}

const getters = {
  userid: state => state.userid,
  username: state => state.username,
  password: state => state.password,
  login: state => state.login
}

const actions = {
  saveUserID: (state, value) => {
    store.commit('USERID_CHANGE', value)
  },
  saveUserName: (state, value) => {
    store.commit('NAME_CHANGE', value)
  },
  savePassword: (state, value) => {
    store.commit('PASSWORD_CHANGE', value)
  },
  saveLogin: (state, value) => {
    store.commit('LOGIN_CHANGE', value)
  }
}

// Combine the initial state and the mutations to create a Vuex store.
// This store can be linked to our app.
let store = new Vuex.Store({
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions
})

global.store = store
export default store
