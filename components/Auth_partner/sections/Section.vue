<template>
  <section>
    <v-container>
      <v-layout justify-space-around wrap>
        <app-card
          :data-aos=" i % 2 === 1 ? 'fade-right' : 'fade-left'"
          class="ma-5"
          v-for="(card, i) in section_info"
          :key="i"
          :card="card"
        ></app-card>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import appCard from "./Card";
export default {
  components: {
    appCard
  },
  props: {
    section_info: {
      type: Array,
      default: () => {}
    }
  }
};
</script>