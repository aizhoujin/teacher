import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import common from './modules/common'
import person from './modules/person'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
    common,
    person
  }
})

export default store
