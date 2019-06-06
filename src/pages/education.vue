<template>
  <div class="q-px-lg q-pb-md">
    <q-timeline :layout="layout" color="secondary">
      <q-timeline-entry heading>{{$t('bachelor.heading')}}</q-timeline-entry>
      <q-timeline-entry
        :title="$t('bachelor.schoolname')"
        :subtitle="$t('bachelor.startdate')"
        side="left"
      >
        <q-expansion-item
          expand-separator
          icon="fab fa-readme"
          :label="$t('bachelor.major')"
          :caption="$t('bachelor.degree')"
        >
          <q-card>
            <q-card-section>
             {{$t('bachelor.mainstuff')}}
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-timeline-entry>

      <q-timeline-entry
        :title="$t('bachelor.end')"
        :subtitle="$t('bachelor.graduatedate')"
        side="right"
        icon="fas fa-archway"
      >
      </q-timeline-entry>

      <q-timeline-entry heading>{{$t('bachelor.heading')}}</q-timeline-entry>
      <q-timeline-entry
        :title="$t('bachelor.schoolname')"
        :subtitle="$t('bachelor.startdate')"
        side="left"
      >
        <q-expansion-item
          expand-separator
          icon="fab fa-readme"
          :label="$t('bachelor.major')"
          :caption="$t('bachelor.degree')"
        >
          <q-card>
            <q-card-section>
              {{$t('bachelor.mainstuff')}}
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-timeline-entry>

      <q-timeline-entry
        :title="$t('bachelor.end')"
        :subtitle="$t('bachelor.graduatedate')"
        side="right"
        color="orange"
        icon="fas fa-archway"
      >
      </q-timeline-entry>
    </q-timeline>
  </div>
</template>
<script>
// import i18n from 'src/i18n/messages'
export default {
  // i18n,
  props: {
    locale: null
  },
  computed: {
    layout () {
      return this.$q.screen.lt.sm ? 'dense' : (this.$q.screen.lt.md ? 'comfortable' : 'loose')
    }
  },
  created () {
    // console.log('routerpara?>>', this.locale)
    // this.$i18n.locale = this.locale
  }
}
</script>
