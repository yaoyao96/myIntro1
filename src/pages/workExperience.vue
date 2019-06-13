<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div>
    <q-item class="row">
      <q-item-section class="logo col-5">
    <q-img src="./assets/KAPPS.png" class="bg-grey"></q-img>
      </q-item-section>
      <q-item-section class="col-7 q-gutter-sm-none q-gutter-md">
        <display-field icon-name="face" text="place"></display-field>
        <display-field icon-name="face" text="position"></display-field>
        <display-field icon-name="face" text="date"></display-field>
        <display-field icon-name="face" text="company brief"></display-field>
      </q-item-section>
    </q-item>
    <div class="q-pa-lg card">ddd</div>
    <br>
    <q-separator inset />
    <q-item>
      <q-item-section>
        <q-img src="./assets/kraftHeinzLogo.png" class="logo"></q-img>
      </q-item-section>
      <q-item-section>
        <q-item-label>Single line item</q-item-label>
        <q-item-label caption>Secondary line text.</q-item-label>
      </q-item-section>
    </q-item>
  </div>
</template>

<script>
import displayField from 'src/components/displayField'
import DisplayField from '../components/displayField'
export default {
  components: { DisplayField },
  displayField
}
</script>

<style>
  .card {
    width: 80vw;
    margin: auto;
    border-radius: 1em;
    border: 1px solid grey;
  }
  .logo {
    height: 200px;
    width: 400px;
  }
</style>
