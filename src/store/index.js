import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import common from './modules/common'
import person from './modules/person'
import fun from './modules/fun'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
    common,
    person,
    fun
  }
})

export default store
