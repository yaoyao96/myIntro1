<template>
  <q-layout>
  <q-page>
    <div class="row no-wrap justify-center q-ma-xl">
    <div class="q-pa-md" style="height: 70vh; min-height: 400px; width: 40vw; min-width: 360px; border-radius: 10px">
      <p class="text-h5 text-weight-bold">{{$t('intro.hey')}}</p>
      <p class="text-h5 text-weight-bold">{{$t('intro.name')}}</p>
      <p class="text-subtitle1 text-weight-light text-grey-7">{{$t('intro.brief1')}}</p>
      <p class="text-subtitle1 text-weight-light text-grey-7">{{$t('intro.brief2')}}</p>
      <p class="text-subtitle1 text-weight-light text-grey-7">{{$t('intro.brief3')}}</p>
      <p class="text-subtitle1 text-weight-light text-grey-7">{{$t('intro.brief4')}}</p>
      <p class="text-subtitle1 text-weight-light text-grey-7">{{$t('intro.dropEmail')}}</p>
      <p class="text-subtitle1 text-weight-light text-grey-7">{{$t('intro.brief5')}}</p>
      <div class="q-gutter-md">
        <q-btn round>
      <q-avatar>
        <img src="https://store-images.s-microsoft.com/image/apps.10758.9007199266245564.c55a36f5-1440-4aa4-86ba-172b5d014e6a.c4a13c22-7543-4386-8da0-5ab9be831883">
      </q-avatar></q-btn>
        <q-btn round>
      <q-avatar>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Ei-sc-github.svg/1024px-Ei-sc-github.svg.png">
      </q-avatar></q-btn>
      </div>
    </div>
    <div style="height: 70vh; width: 40vw">
      <q-img
        src="https://github.blog/wp-content/uploads/2019/05/facebook-1200x630.png?fit=1203%2C633"
        spinner-color="white"
      />
    </div></div>
    <div class="q-ma-lg q-pa-md">
      <div style="max-width: 600px; text-align:center; margin: auto; background: radial-gradient(circle at top,  #ccffff 0%, #ffffff 70%) ">

        <div class="q-ma-md q-pa-sm"><q-chip class="q-ma-sm q-px-md" v-for="skill in skills" :key="skill.label" clickable @click="showSkill(skill.label)" :color="skill.color" text-color="white" :icon="skill.icon">
          {{skill.label}}
        </q-chip></div>

      </div>
      <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        infinite
        control-color="black"
        arrows
        height="300px"
        class="bg-grey-1 text-black shadow-1 rounded-borders"
        style="margin: auto; width: 80vw; max-width: 800px"
      >
        <q-carousel-slide :name="skill.label" class="justify-center"
                          v-for="skill in skills"
                          :key="skill.label" clickable
                          >
          <div class="text-center q-gutter-none q-ma-lg">
            <q-icon :name="skill.icon" :color="skill.color" size="45px" />
            <p class="text-h6">{{skill.label}}</p>
          </div>
          <div class="row justify-start"> <div class="col-2"></div>
          <div class="col-6 text-subtitle1">
            {{$t('skill.proficiencyLevel')}}
            <q-rating
              v-model="skill.level"
              size="1.5em"
              color="blue"
              readonly
            />
          </div></div>
          <div class="row justify-start"> <div class="col-2"></div>
            <div class="col-6 text-subtitle1 text-weight-light">
              {{$t('skill.'+`${skill.label}`)}}
            </div></div>
        </q-carousel-slide>
      </q-carousel>

      <!--<q-card class="q-pa-md" style="margin: auto; max-width: 1000px" >-->
        <!--<q-item>-->
          <!--<q-item-section side>-->
            <!--<q-avatar rounded size="200px">-->
              <!--<img src="https://cdn.quasar-framework.org/img/parallax2.jpg" />-->
            <!--</q-avatar>-->
          <!--</q-item-section>-->
          <!--<q-item-section>-->
            <!--<div class="text-h6">Our Changing Planet</div>-->
            <!--<div class="text-subtitle2">by John Doe</div>-->
          <!--</q-item-section>-->
        <!--</q-item>-->

        <!--&lt;!&ndash;<q-card-section>&ndash;&gt;-->
        <!--&lt;!&ndash;lorem&ndash;&gt;-->
        <!--&lt;!&ndash;</q-card-section>&ndash;&gt;-->
      <!--</q-card>-->
    </div>
    <div class="row justify-center q-ma-xl q-pa-md" >
      <q-timeline :layout="layout" color="secondary" class="justify-center" style="max-width: 800px; min-width: 600px;">
        <q-timeline-entry heading class="text-grey">{{$t('education.heading1')}}</q-timeline-entry>
        <q-timeline-entry
          :title="$t('education.schoolname1')"
          :subtitle="$t('education.startdate1')"
          side="left"
        >
          <q-expansion-item
            expand-separator
            icon="fab fa-readme"
            :label="$t('education.major1')"
            :caption="$t('education.degree1')"
          >
            <q-card>
              <q-card-section class="bg-amber-3">
                {{$t('education.mainstuff1')}}
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-timeline-entry>

        <q-timeline-entry
          :title="$t('education.end1')"
          :subtitle="$t('education.graduatedate1')"
          side="right"
          icon="fas fa-archway"
        >
        </q-timeline-entry>

        <q-timeline-entry heading class="text-grey">{{$t('education.heading2')}}</q-timeline-entry>
        <q-timeline-entry
          :title="$t('education.schoolname2')"
          :subtitle="$t('education.startdate2')"
          side="left"
        >
          <q-expansion-item
            expand-separator
            icon="fab fa-readme"
            :label="$t('education.major2')"
            :caption="$t('education.degree2')"
          >
            <q-card>
              <q-card-section class="bg-amber-3">
                {{$t('education.mainstuff2')}}
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-timeline-entry>

        <q-timeline-entry
          :title="$t('education.end2')"
          :subtitle="$t('education.graduatedate2')"
          side="right"
          color="orange"
          icon="fas fa-archway"
        >
        </q-timeline-entry>
      </q-timeline>
    </div>
  </q-page>
    <br>
    <q-footer bordered class="bg-white text-primary text-center">
      <p class="text-subtitle2 text-black">I do this for work 8::)</p>
    </q-footer>
  </q-layout>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',
  props: {
  },
  data () {
    return {
      slide: 'Html5',
      tab: 'front-end',
      skills: [{ label: 'Html5', color: 'red', icon: 'fab fa-html5', level: 5 },
        { label: 'Javascript', color: 'amber', icon: 'fab fa-js', level: 5 },
        { label: 'Vue.js', color: 'orange', icon: 'fab fa-vuejs', level: 5 },
        { label: 'Java SE', color: 'deep-orange', icon: 'fab fa-java', level: 5 },
        { label: '.Net MVC', color: 'blue', icon: 'code', level: 5 },
        { label: 'Spring Framework', color: 'light-blue', icon: 'code', level: 5 },
        { label: 'SQL', color: 'cyan', icon: 'fas fa-database', level: 5 },
        { label: 'Python', color: 'teal', icon: 'fab fa-python', level: 5 },
        { label: 'C#', color: 'green', icon: 'code', level: 5 },
        { label: 'Android Studio', color: 'lime', icon: 'fab fa-android', level: 5 },
        { label: 'Git', color: 'light-green', icon: 'fab fa-github', level: 5 },
        { label: 'MS Office', color: 'yellow', icon: 'fas fa-file-word', level: 5 }]
    }
  },
  computed: {
    layout () {
      return this.$q.screen.lt.sm ? 'dense' : (this.$q.screen.lt.md ? 'comfortable' : 'loose')
    }
  },
  methods: {
    showSkill: function (skillName) { this.slide = skillName }
  },
  created () {
  }
}
</script>
