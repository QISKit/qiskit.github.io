import Vuex from 'vuex'
import Vue from 'vue'
import events from './modules/events'
import advocates from './modules/advocates'
import learningResources from './modules/learning-resources'

Vue.use(Vuex)

export default () => new Vuex.Store({
  modules: { events, advocates, learningResources }
})
