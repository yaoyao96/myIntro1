<template>
      <div class="q-pa-md">
        <q-page-sticky position="top-right" :offset="[18, 18]">
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" color="blue" position="left"/>
        </q-page-sticky>
        <q-drawer
          v-model="drawer"
          :mini="miniState"
          @mouseover="miniState = false"
          @mouseout="miniState = true"
          :width="200"
          :breakpoint="500"
          show-if-above
          bordered
          content-class="bg-grey-3"
          side="right"
        >
          <q-scroll-area class="fit">
            <q-list padding>
              <q-item clickable v-ripple v-for="project in projects" :key="project.short" @click="changeProject(project)">
                <q-item-section>
                  {{project.full}}
                </q-item-section>
              </q-item>

            </q-list>
          </q-scroll-area>
        </q-drawer>
        <q-card class="q-ma-lg justify-center" style="width: 60vw; margin: auto">
          <q-carousel
            animated
            v-model="slide"
            arrows
            navigation
            infinite
            class="justify-center"
            style="max-width:1000px; width: 60vw; max-height:600px; height: 35vw"
          >
            <q-carousel-slide :name="1" img-src="https://images1.privateschoolreview.com/photo/780x600/7000/7200/IMGAcademy-bbfcGyP.jpg" />
            <q-carousel-slide :name="2" img-src="https://usathss.files.wordpress.com/2018/09/s20180817img_football_imgvscolumbiahs133cbl.jpg?w=1000&h=600&crop=1" />
            <q-carousel-slide :name="3" img-src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/448b6870739945.5bb4df3d2a185.jpg" />
            <q-carousel-slide :name="4" img-src="https://www.golf.org.au/site/_content/image/00127234-image.jpg" />
          </q-carousel>
          <q-card-section>
            <div class="text-h6">{{mainTag}}</div>
            <div class="text-subtitle2">{{smallTag}}</div>
          </q-card-section>

          <q-card-section>
            <div v-for="title in titles" :key="title" class="q-py-xs">
              <q-chip outline color="primary" text-color="white" icon="directions">{{$t(`${smallTag}`+'.'+`${title}`)}}</q-chip>
              <p>{{$t(`${smallTag}`+'.'+`${title}`+ "Text")}}</p>
            </div>
          </q-card-section>
        </q-card>
      </div>
</template>
<script>
export default {
  data () {
    return {
      slide: 1,
      drawer: true,
      miniState: true,
      text: 'hello',
      mainTag: 'aa',
      smallTag: 'a',
      projects: [
        { 'short': 'a', 'full': 'aa' },
        { 'short': 'b', 'full': 'bb' },
        { 'short': 'c', 'full': 'cc' },
        { 'short': 'd', 'full': 'dd' },
        { 'short': 'e', 'full': 'ee' },
        { 'short': 'f', 'full': 'ff' }
      ],
      titles: ['technologyStack', 'description', 'myRole', 'myGain']
    }
  },
  methods: {
    changeProject: function (project) {
      this.mainTag = project.full
      this.smallTag = project.short
    }
  }
}
</script>
