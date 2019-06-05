import Vue from 'vue'
import Vuex from 'vuex'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
// import example from './module-example'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    state: { locale: String },
    mutations: {
      setLocale (state, language) {
        state.locale = language
        this.$i18n.locale = state.locale
      }

    },
    actions: {
      changeLocale (context, language) {
        context.commit('setLocale', language)
      }

    }

  })

  return Store
}
