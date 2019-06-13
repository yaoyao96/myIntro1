<template>
    <div class="row q-mx-lg items-start">
      <q-icon :name="iconName" class="col-2" :color="iconColor" style="font-size: 32px"></q-icon>
      <p class="text-subtitle1">{{text}}</p>
    </div>
</template>

<script>
export default {
  name: 'displayField',
  props: {
    iconName: String,
    text: String,
    iconColor: String
  }
}
</script>

<style scoped>

</style>
