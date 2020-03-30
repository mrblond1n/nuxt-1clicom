<template>
  <v-container :data-aos="Number(page.charAt(1)) % 2 === 0 ? 'fade-right': 'fade-left'">
    <v-layout column align-center justify-space-around></v-layout>
  </v-container>
</template>

<script>
export default {
  props: {
    section: {
      type: Object,
      default: () => {}
    },
    page: {
      type: String,
      default: ""
    }
  }
};
</script>

