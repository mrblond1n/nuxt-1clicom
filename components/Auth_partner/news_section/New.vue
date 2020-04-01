<template>
  <v-card class="my-5 mx-2" width="20%" min-width="250px">
    <v-img
      class="white--text align-end"
      height="200px"
      :src="require('~/static/images/partner_news/' + card.src)"
    ></v-img>

    <v-layout column justify-space-between style="height: 200px">
      <v-card-subtitle class="pb-0 text-left">{{card.date.split('-').reverse().join('.')}}</v-card-subtitle>

      <v-card-text class="text--primary" style="height: 90px; overflow: hidden">{{card.short_info}}</v-card-text>

      <v-card-actions class="dflex justify-center">
        <v-btn small color="primary" @click="show_modal">Подробнее</v-btn>
      </v-card-actions>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      //
    };
  },
  methods: {
    show_modal() {
      this.$store.dispatch("show_modal", { name: "new_info", info: this.card });
    }
  }
};
</script>

<style scoped>
</style>
