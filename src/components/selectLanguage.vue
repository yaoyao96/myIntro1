<template>
  <div>
  <!--<q-select-->
    <!--v-model="lang"-->
    <!--:options="langOptions"-->
    <!--label="Quasar Language"-->
    <!--dense-->
    <!--borderless-->
    <!--emit-value-->
    <!--map-options-->
    <!--options-dense-->
    <!--style="min-width: 150px"-->
  <!--/>-->
    <q-toggle
      v-model="value"
      :label="translate"
      color="white"
    />
  </div>
</template>

<script>
// import languages from 'quasar/lang/index.json'
// import i18n from 'src/i18n/messages.js'

export default {
  // i18n,
  data () {
    return {
      value: true,
      lang: this.$q.lang.isoName,
      langOptions: [
        { label: 'English', value: 'en-us' },
        { label: '中文', value: 'zh-hans' }
      ]
    }
  },
  computed: {
    translate () {
      if (this.value) { return ' 中文 ' } else { return 'English' }
    }
  },

  watch: {
    // lang (lang) {
    //   // dynamic import, so loading on demand only
    //     import(`quasar/lang/${lang}`).then(lang => {
    //       this.$q.lang.set(lang.default)
    //     })
    //     this.$emit('langChange', lang)
    //     console.log('lang isoName>>', this.$q.lang.isoName)
    // },
    value (value) {
      let lang = 'zh-hans'
      if (value) { lang = 'en-us' }
      import(`quasar/lang/${lang}`).then(lang => {
        this.$q.lang.set(lang.default)
      })
      this.$i18n.locale = lang
      console.log('lang isoName>>', this.$i18n.locale)
      this.$emit('langChange', lang)
    }
  },

  created () {
    // this.langOptions = languages.map(lang => ({
    //   label: lang.nativeName, value: lang.isoName
    // }))
    // console.log('lang>>', this.$q.lang)
  }
}
</script>
