<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div class="q-pa-lg">
    <q-item class="row">
      <q-space></q-space>
      <q-item-section class="logo col-4">
    <q-img src="./assets/KAPPS.png"></q-img>
      </q-item-section>
      <q-item-section class="col-7 q-gutter-sm-none q-gutter-md">
        <display-field icon-name="face" iconColor="yellow" text="place"></display-field>
        <display-field icon-name="face" text="position"></display-field>
        <display-field icon-name="face" text="date"></display-field>
        <display-field icon-name="face" text="company brief"></display-field>
      </q-item-section>
    </q-item>
    <div class="q-pa-lg card">
      <!--<q-chip square color="grey" text-color="white" class="glossy q-py-md">-->
        <!--<q-icon name="face" style="font-size: 32px"></q-icon>-->
        <!--<h6 class="text-weight-light q-px-sm">Main Task</h6></q-chip>-->
      <div class="row no-wrap q-gutter-md q-ma-sm">
        <main-task-card></main-task-card>
        <main-task-card></main-task-card>
        <main-task-card></main-task-card>
        <main-task-card></main-task-card>
      </div>
    </div>
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
import mainTaskCard from 'src/components/mainTaskCard'
export default {
  components: { DisplayField, mainTaskCard },
  displayField
}
</script>

<style>
  .card {
    width: 80vw;
    margin: auto;
  }
  .logo {
    height: 200px;
    width: 400px;
  }
</style>
