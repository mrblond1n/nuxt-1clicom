<template>
  <!-- Секция о возможностях продукта -->
  <v-container data-aos="fade">
    <v-layout justify-center align-center column class="text-center">
      <h3 class="display-2 mb-5">{{section.title}}</h3>
      <ul class="text-left">
        <li class="list__item" v-for="(item, i) in section.list" :key="i">{{item}}</li>
      </ul>
      <v-btn
        :color="page === 'kp' ? '#fb8c00' : 'red darken-1'"
        class="my-5"
        @click="modal_window_call"
        dark
      >Попробуй сейчас бесплатно</v-btn>
      <div class="caption" style="max-width: 800px">{{section.description}}</div>
    </v-layout>
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
  },
  methods: {
    modal_window_call() {
      this.$store.dispatch("show_modal", {
        id: this.page,
        txt: "Заявка на обратный звонок"
      });
    }
  }
};
</script>