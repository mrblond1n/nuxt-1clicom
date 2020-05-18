<template>
  <v-navigation-drawer
    :permanent="style_width"
    :color="'rgba(0, 0, 0, .7)'"
    :width="style_width ? '120' : ''"
    @input="close_drawer"
    id="drawer"
    dark
    app
  >
    <v-list-item color="white" link to="/home">
      <v-list-item-content>
        <v-list-item-title class="text-center">
          <v-img width="50px" style="margin: 0 auto" :src="require('~/static/logo__1clicom.png')" />
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list>
      <template v-if="nav_list.name === 'home'">
        <v-list-item color="white" link v-for="(item, i) in nav_list.list" :to="item.path" :key="i">
          <v-list-item-content>
            <v-list-item-title class="subtitle-1 navigation_link">{{item.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>

      <template v-else>
        <template v-for="(item, index) in nav_list.list">
          <v-list-item
            v-if="!item.root || (item.root && super_user)"
            color="white"
            @click="item.id ? modal_window_call(item.id) : $vuetify.goTo(`#section_${index}`, option_scroll)"
            link
            :key="index"
          >
            <v-list-item-content>
              <v-list-item-title class="subtitle-1 navigation_link">{{item.title}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import * as easings from "vuetify/es5/services/goto/easing-patterns";

export default {
  props: {
    nav_list: {
      type: Object,
      default: () => ({
        name: "home",
        title: "ЗАО ЛИК",
        subtitle: "Экспертные онлайн-сервисы",
        list: [
          { title: "ли: эксперт", path: "/expert" },
          { title: "лик: эксперт 1с", path: "/expert_1c" },
          { title: "лик: бизнес", path: "/business" },
          { title: "лик: менеджер", path: "/manager" },
          { title: "о нашей компании", path: "/about" },
          { title: "партнерский раздел", path: "/partner_page" }
        ]
      })
    },
    user_set: {
      type: Object,
      default: () => {}
    },
    drawer: {
      type: Boolean,
      default: true
    },
    super_user: {
      type: Object,
      default: () => {}
    },
    logout: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      option_scroll: {
        easing: "easeInOutCubic",
        easings: Object.keys(easings),
        duration: 1000,
        offset: 0
      }
    };
  },
  computed: {
    style_width() {
      if (
        this.$vuetify.breakpoint.name == "sm" ||
        this.$vuetify.breakpoint.name == "xs"
      )
        return false;
      return true;
    }
  },
  methods: {
    close_drawer() {
      this.$emit("close_drawer");
    }
  }
};
</script>