<template>
  <q-page class="flex flex-block justify-center q-ma-lg">
    <div class="q-pa-md" style="height:70vh; width: 40vw; border-radius: 10px">
      <p class="text-h5 text-weight-bold">{{$t('intro.hey')}}</p>
      <p class="text-h5 text-weight-bold">{{$t('intro.name')}}</p>
      <p class="text-subtitle1 text-weight-light text-grey-7">{{$t('intro.brief1')}}</p>
      <p class="text-subtitle1 text-weight-light text-grey-7">{{$t('intro.brief2')}}</p>
      <p class="text-subtitle1 text-weight-light text-grey-7">{{$t('intro.brief3')}}</p>
      <p class="text-subtitle1 text-weight-light text-grey-7">{{$t('intro.brief4')}}</p>
      <p class="text-subtitle1 text-weight-light text-grey-7">{{$t('intro.dropEmail')}}</p>
      <p class="text-subtitle1 text-weight-light text-grey-7">{{$t('intro.brief5')}}</p>
      <div class="q-gutter-md">
      <q-avatar>
        <img src="https://store-images.s-microsoft.com/image/apps.10758.9007199266245564.c55a36f5-1440-4aa4-86ba-172b5d014e6a.c4a13c22-7543-4386-8da0-5ab9be831883">
      </q-avatar>
      <q-avatar>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Ei-sc-github.svg/1024px-Ei-sc-github.svg.png">
      </q-avatar></div>
    </div>
    <div>
      <q-img
        src="https://github.blog/wp-content/uploads/2019/05/facebook-1200x630.png?fit=1203%2C633"
        spinner-color="white"
        style="height: 70vh; width: 40vw"
      />
    </div>
  </q-page>
</template>

<style>
</style>

<script>
// import i18n from 'src/i18n/messages'
export default {
  name: 'PageIndex',
  // i18n,
  props: {
    locale: null
  },
  created () {
    // console.log('routerpara?>>', this.locale)
    // this.$i18n.locale = this.locale
  }
}
</script>
