<template>
  <v-card>
    <!-- {{`@/assets/files/${info.src}`}} -->
    <!-- <v-img :src="require(`@/assets/files/${info.src}`)" /> -->
    <!-- <v-img :src="require('@/assets/images/home/a_buh.png')" /> -->
    <!-- <pdf :src="require(`@/static/files/${info.src}`)" /> -->
  </v-card>
</template>

<script>
// import pdf from "vue-pdf";
export default {
  components: {
    // pdf
  },
  props: {
    info: {
      type: Object,
      default: () => {}
    }
  }
};
</script>