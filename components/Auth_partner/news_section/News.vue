<template>
  <section>
    <v-container>
      <v-layout wrap justify-center>
        <app-new
          :data-aos=" i % 2 === 1 ? 'fade-right' : 'fade-left'"
          v-for="(card, i) in news.slice(0, 8)"
          :key="i"
          :card="card"
        ></app-new>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import appNew from "./New";

export default {
  props: {
    news: {
      type: Array,
      default: () => {}
    }
  },
  components: {
    appNew
  }
};
</script>