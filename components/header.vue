<template>
  <header>
    <!-- TOP  -->
    <v-app-bar app dark id="bar" :color="'rgba(0, 0, 0, .7)'">
      <v-app-bar-nav-icon v-show="!style_width" @click="show_drawer" />
      <!-- Заголовок -->
      <nuxt-link class="d-none d-sm-flex" to="/home" tag="div">
        <div class="pointer">
          <v-toolbar-title class="display-1">{{nav_list.title}}</v-toolbar-title>
          <v-toolbar-title class="caption">{{nav_list.subtitle}}</v-toolbar-title>
        </div>
      </nuxt-link>

      <!-- Выпадающее меню -->
      <v-menu offset-y open-on-hover v-if="$route.name != 'home'">
        <template v-slot:activator="{ on }">
          <v-btn
            :small="style_width"
            color="warning"
            style="margin-left: 20px"
            dark
            v-on="on"
          >Наши сервисы</v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, i) in links" :key="i" :to="item.path">
            <v-list-item-title class="subtitle-1">{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-spacer></v-spacer>

      <!-- Правая часть хедера -->
      <v-btn :small="style_width" color="warning" @click.stop="show_modal(nav_list.name)">
        <v-icon :left="style_width">mdi-phone</v-icon>
        <template v-if="style_width">заказать звонок</template>
      </v-btn>
      <v-btn v-if="!user_set" icon @click="show_modal({name: 'point_entry'})">
        <v-icon>mdi-account</v-icon>
        {{user_set}}
      </v-btn>
      <v-btn v-else icon @click="logout">
        <v-icon>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>
  </header>
</template>

<script>
export default {
  props: {
    page_name: {
      type: String,
      default: "home"
    },
    nav_list: {
      type: Object,
      default: () => {}
    },
    user_set: {
      type: Object,
      default: () => {}
    },
    show_modal: {
      type: Function,
      default: () => {}
    },
    logout: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      links: [
        { title: "лик: эксперт", path: "/expert" },
        { title: "лик: эксперт 1с", path: "/expert_1c" },
        { title: "лик: бизнес", path: "/business" },
        { title: "лик: менеджер", path: "/manager" },
        { title: "о нашей компании", path: "/about" },
        { title: "партнерский раздел", path: "/partner_page" }
      ]
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
    show_drawer() {
      this.$emit("show_drawer");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>