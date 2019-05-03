import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import example from './example'
import layout from './layout'

export default new Vuex.Store({
  modules: {
    example,
    layout
  }
})