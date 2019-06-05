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
              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="inbox" />
                </q-item-section>

                <q-item-section>
                  Inbox
                </q-item-section>
              </q-item>

              <q-item active clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="star" />
                </q-item-section>

                <q-item-section>
                  Star
                </q-item-section>
              </q-item>

              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="send" />
                </q-item-section>

                <q-item-section>
                  Send
                </q-item-section>
              </q-item>

              <q-separator />

              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="drafts" />
                </q-item-section>

                <q-item-section>
                  Drafts
                </q-item-section>
              </q-item>
            </q-list>
          </q-scroll-area>
        </q-drawer>

        <q-item>
                <q-item-section side><div>
                  <q-carousel
                    animated
                    v-model="slide"
                    arrows
                    navigation
                    infinite
                    style="min-width:600px; height: 400px; "
                  >
                    <q-carousel-slide :name="1" img-src="https://cdn.quasar-framework.org/img/mountains.jpg" />
                    <q-carousel-slide :name="2" img-src="https://cdn.quasar-framework.org/img/parallax1.jpg" />
                    <q-carousel-slide :name="3" img-src="https://cdn.quasar-framework.org/img/parallax2.jpg" />
                    <q-carousel-slide :name="4" img-src="https://cdn.quasar-framework.org/img/quasar.jpg" />
                  </q-carousel>
                </div></q-item-section>
                <q-item-section style="width:30%; height: 400px; ">
                  <q-item-label>Text Header</q-item-label>
                  <q-item-label caption>10 messages</q-item-label>
                  <q-scroll-area style="height: 360px; max-width: 600px;">
                    <div v-for="n in 100" :key="n" class="q-py-xs">
                      <q-chip>{{n}}</q-chip>
                      <p>{{text}}</p>
                    </div>
                  </q-scroll-area>
                </q-item-section>
              </q-item>

      </div>

</template>
<script>
export default {
  data () {
    return {
      testArray: [0, 2, 5],
      str: 'abcd',
      slide: 1,
      drawer: true,
      miniState: true,
      text: 'hello'
    }
  } }
</script>
