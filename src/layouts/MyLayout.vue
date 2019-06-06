<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy" >
      <div class="q-pa-md" style="background: radial-gradient(circle at top, #027be3 0%,#53a9f5 50%, #bfe9ff 100%)">
        <div class="q-gutter-md" >
          <q-tabs>
            <q-space></q-space>
            <q-route-tab icon="fas fa-tools" :label="$t('skillset')" to="/skill-set"/>
            <q-route-tab icon="fas fa-graduation-cap" :label="$t('education')" :to="{ path: '/education'}" />
            <q-route-tab :label="$t('aboutme')" icon="far fa-grin-squint-tears" to="/"></q-route-tab>
            <q-route-tab icon="fas fa-briefcase" :label="$t('workexperience')" to="work-experience" />
            <q-route-tab icon="fas fa-project-diagram" :label="$t('project')" to="/projects" />
            <q-space></q-space>
            <select-language></select-language>
          </q-tabs>
        </div>
      </div>
    </q-header>
    <q-page-container>
      <br>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
// import i18n from 'src/i18n/messages'
import selectLanguage from 'src/components/selectLanguage'

export default {
  name: 'MyLayout',
  // i18n,
  components: {
    selectLanguage
  },
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      langKey: 0
    }
  },
  methods: {
    openURL
    // change (lang) {
    //   // this.$i18n.locale = lang
    //   // console.log('layout.locale:', this.locale)
    //   console.log('layout.i18n:', this.$i18n.locale)
    //   // this.langKey++
    // }

  },
  created () {
    // this.$i18n.locale = this.locale
  }
}
</script>

<style>
</style>
