<template>
  <!-- Обычная секция -->
  <!-- <v-container :data-aos="Number(page.charAt(1)) % 2 === 0 ? 'fade-right': 'fade-left'"> -->
  <v-container>
    <v-layout column align-center justify-space-around>
      <v-layout column>
        <h3 class="display-2">{{section.title}}</h3>
        <h4 class="headline">{{section.subtitle}}</h4>
      </v-layout>
      <v-layout
        align-center
        justify-center
        :wrap="$vuetify.breakpoint.xsOnly || $vuetify.breakpoint.smOnly"
        :reverse="section.method === 'rtl'"
        style="width: 100%"
      >
        <v-layout class="ma-5 img_wrapper" justify-center align-center>
          <v-img
            class="ma-5 img_wrapper"
            :src="require(`~/static/images/lists/${section.src}.png`)"
          />
        </v-layout>
        <v-layout column align-center class="ma-5">
          <ul class="text-left">
            <li
              class="my-2"
              :class="section.method === 'rtl' ? 'list__item reverse' : 'list__item'"
              v-for="(str, i) in section.list"
              :key="i"
            >{{str}}</li>
          </ul>
          <v-btn
            :color="set_color()"
            @click="modal_window_call"
            class="my-5"
            dark
          >попробуй сейчас бесплатно</v-btn>
        </v-layout>
      </v-layout>
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
    },
    set_color() {
      if (this.$router.history.current.name === "Kontr") {
        return "warning";
      } else {
        return "error";
      }
    }
  }
};
</script>

