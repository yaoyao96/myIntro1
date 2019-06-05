import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
import messages from 'src/i18n/messages'

export const i18n = new VueI18n({
  locale: 'en-us',
  fallbackLocale: 'en-us',
  messages
})
