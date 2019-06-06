<template>
  <div class="q-pa-md">
    <div style="max-width: 600px; text-align:center; margin: auto; background: radial-gradient(circle at top,  #ccffff 0%, #ffffff 70%) ">

  <div class="q-ma-md q-pa-sm"><q-chip class="q-ma-sm q-px-md" v-for="skill in skills" :key="skill.label" clickable @click="onClick" :color="skill.color" text-color="white" :icon="skill.icon">
    {{skill.label}}
  </q-chip></div>

    </div>
    <q-card class="q-pa-md" style="margin: auto; max-width: 1000px" >
      <q-item>
        <q-item-section side>
          <q-avatar rounded size="200px">
            <img src="https://cdn.quasar-framework.org/img/parallax2.jpg" />
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-item-section>
      </q-item>

      <!--<q-card-section>-->
        <!--lorem-->
      <!--</q-card-section>-->
    </q-card>
  </div>
</template>

<script>
// import i18n from 'src/i18n/messages'
export default {
  // i18n,
  props: {
    locale: null
  },
  data () {
    return {
      tab: 'front-end',
      skills: [{ label: 'Html5', color: 'red', icon: 'fab fa-html5' },
        { label: 'CSS', color: 'pink', icon: 'fab fa-css3' },
        { label: 'Javascript', color: 'amber', icon: 'fab fa-js' },
        { label: 'Vue.js', color: 'orange', icon: 'fab fa-vuejs' },
        { label: 'Java SE', color: 'deep-orange', icon: 'fab fa-java' },
        { label: '.Net MVC', color: 'blue', icon: 'code' },
        { label: 'Spring MVC', color: 'light-blue', icon: 'code' },
        { label: 'SQL', color: 'cyan', icon: 'fas fa-database' },
        { label: 'Python', color: 'teal', icon: 'fab fa-python' },
        { label: 'C#', color: 'green', icon: 'code' },
        { label: 'Android Studio', color: 'lime', icon: 'fab fa-android' },
        { label: 'Git', color: 'light-green', icon: 'fab fa-github' },
        { label: 'MS Office', color: 'yellow', icon: 'fas fa-file-word' }]
    }
  },
  created () {
    // console.log('routerpara?>>', this.locale)
    // this.$i18n.locale = this.locale
  }
}
</script>
