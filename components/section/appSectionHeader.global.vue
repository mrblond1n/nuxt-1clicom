<template>
  <!-- Секция хедер -->
  <v-container>
    <v-layout justify-center align-center column>
      <!-- TITLES -->
      <transition
        mode="out-in"
        enter-active-class="animated fadeInDown"
        leave-active-class="animated fadeOutUp"
      >
        <template v-for="(title, i) in section_info.titles">
          <template v-if="title.page == toggle">
            <v-layout align-center justify-center column class="mb-5" :key="`title_${i}`">
              <h1 class="display-2 mb-3 text-center" style="line-height: 1.3" v-html="title.main"></h1>
              <h4 class="headline" v-html="title.sub"></h4>
            </v-layout>
          </template>
        </template>
      </transition>

      <!-- BUTTON TOGGLE -->
      <v-btn-toggle
        v-if="section_info.toggle_names"
        dense
        v-model="toggle"
        mandatory
        color="error"
        class="my-4"
      >
        <template v-for="(btn, i) in section_info.toggle_names">
          <v-btn
            :x-small="$vuetify.breakpoint.xsOnly || $vuetify.breakpoint.smOnly"
            :key="`btn_${i}`"
          >{{btn.text}}</v-btn>
        </template>
      </v-btn-toggle>

      <!-- CONTENT -->
      <v-layout class="mt-5" align-center justify-center reverse wrap style="width: 100%;">
        <!-- IMAGE -->
        <transition
          mode="out-in"
          enter-active-class="animated fadeInRight"
          leave-active-class="animated fadeOutRight"
        >
          <template v-for="(image, i) in section_info.image">
            <template v-if="image.page === toggle" style="display: inline-block">
              <v-layout
                class="ma-5 img_wrapper"
                column
                justify-center
                align-center
                :key="`image_${i}`"
              >
                <v-img
                  :src="require(`~/static/images/lists/${image.src}.png`)"
                  :lazy-src="require(`~/static/images/lists/${image.src}.png`)"
                  width="100%"
                />
              </v-layout>
            </template>
          </template>
        </transition>

        <!-- LIST -->
        <transition
          mode="out-in"
          enter-active-class="animated fadeInLeft"
          leave-active-class="animated fadeOutLeft"
        >
          <template v-for="(info, i) in section_info.info">
            <template v-if="info.page === toggle" style="display: inline-block">
              <v-layout
                class="ma-5"
                column
                justify-center
                align-center
                :key="`info_${i}`"
                style="width: 45%"
              >
                <h5 class="headline pb-4">{{info.title}}</h5>
                <ul class="text-left pb-4 pt-4">
                  <li
                    class="list__item"
                    v-for="(item, i) in info.list"
                    :key="i"
                    style="border-bottom: 2px dotted white"
                    :style="item.src ? 'cursor: pointer; font-weight: bold': ''"
                    @click="item.src ? modal_window_call(item.src) : () => {}"
                  >{{item.text}}</li>
                </ul>
                <v-btn
                  :color="set_color()"
                  class="mt-4"
                  @click="modal_window_call"
                  dark
                >{{info.button}}</v-btn>
              </v-layout>
            </template>
          </template>
        </transition>
      </v-layout>

      <!-- DESCRIPTION -->
      <transition
        mode="out-in"
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <template v-for="(description, i) in section_info.description">
          <template v-if="description.page === toggle">
            <div class="caption" :key="`desc_${i}`">{{description.text}}</div>
          </template>
        </template>
      </transition>
      <!-- BUTTONS -->
      <transition
        mode="out-in"
        enter-active-class="animated fadeInUp"
        leave-active-class="animated fadeOutDown"
      >
        <template v-for="(buttons, i) in section_info.button_group">
          <template v-if="buttons.page === toggle">
            <v-layout column align-center class="my-5" :key="`buttons_${i}`">
              <ul class="d-flex flex-wrap justify-center">
                <li class="ma-2" v-for="(button, i) in buttons.list" :key="i">
                  <v-btn
                    rounded
                    color="rgba(0,0,0,.3)"
                    dark
                    small
                    :download="button.download"
                    :disabled="button.download"
                    target="_blank"
                    :tag="button.href ? 'a' : 'button'"
                    :href="button.href ? button.href : ''"
                  >
                    <v-icon small v-if="button.icon">{{button.icon}}</v-icon>
                    <!-- <svg-icon v-else name="1c-logo" class="svg mx-1" /> -->
                    {{button.text}}
                  </v-btn>
                </li>
              </ul>
              <div class="caption mt-5" :key="`desc_${i}`">{{buttons.description}}</div>
            </v-layout>
          </template>
        </template>
      </transition>
    </v-layout>
  </v-container>
</template>

<script>
// import SvgIcon from "@/components/Mist/SvgIcon";
export default {
  components: {
    // SvgIcon
  },
  props: {
    section_info: {
      type: Object,
      default: () => {}
    },
    buttons: {
      type: Array,
      default: () => {}
    }
  },
  data() {
    return {
      toggle: 0
    };
  },
  methods: {
    modal_window_call(src) {
      if (typeof src === "string") {
        this.$store.dispatch("shared/show_modal", {
          name: "pdf",
          src,
          txt: "Заявка на обратный звонок"
        });
        return;
      }
      let id;
      if (this.$router.history.current.name === "Expert_1c") {
        id = "c1";
      } else {
        id = this.$router.history.current.name.charAt(0).toLowerCase() + 1;
      }
      this.$store.dispatch("shared/show_modal", {
        id,
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

<style>
h3 span,
h4 span {
  background: #ef5350;
  padding: 5px 5px 0 5px;
}
.kontr h3 span {
  background: #fb8c00;
  padding: 5px 5px 0 5px;
}

.img_wrapper {
  max-width: 450px;
  max-height: 250px;
  width: 100%;
  height: 100%;
}
</style>