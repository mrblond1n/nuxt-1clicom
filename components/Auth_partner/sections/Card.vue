<template>
  <v-card width="300px" style="background: transparent; height: 500px" elevation="0">
    <v-layout column align-center justify-space-between style="height: 100%">
      <v-card-title class="display-1" v-html="card.title" />
      <!-- <svg-icon :name="card.src" class="svg" /> -->
      <v-img :src="require(`~/static/images/icons/${card.src}.svg`)" class="svg" contain />
      <v-card-actions style="width: 100%">
        <v-btn
          outlined
          color="indigo"
          x-large
          width="100%"
          v-if="card.link"
          tag="a"
          target="_blank"
          :href="`http://licweb.ru/1clicom/files/partner_page/${card.link}`"
        >открыть</v-btn>
        <v-btn
          outlined
          color="indigo"
          x-large
          width="100%"
          @click="modal_window_call"
          v-else
        >Заказать</v-btn>
      </v-card-actions>
    </v-layout>
  </v-card>
</template>

<script>
// import SvgIcon from "@/components/Mist/SvgIcon";

export default {
  components: {
    // SvgIcon
  },
  props: {
    card: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    modal_window_call() {
      this.$store.dispatch("shared/show_modal", {
        id: "p5",
        txt: "Заявка на обучение"
      });
    }
  }
};
</script>

