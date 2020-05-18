<template>
  <header>
    <v-app-bar app color="rgba(0,0,0, .7)" dark>
      <v-app-bar-nav-icon class="d-md-none hidden-md-and-up" @click="$emit('show_drawer', true)" />
      <nuxt-link class="d-none d-sm-flex" to="/home" tag="div">
        <div class="pointer">
          <v-toolbar-title class="display-1">{{nav_list.title}}</v-toolbar-title>
          <v-toolbar-title class="caption">{{nav_list.subtitle}}</v-toolbar-title>
        </div>
      </nuxt-link>
      <v-menu offset-y open-on-hover v-if="$route.name != 'home'">
        <template v-slot:activator="{ on }">
          <v-btn color="warning" class="ml-4" dark v-on="on">Наши сервисы</v-btn>
        </template>
        <v-list>
          <v-list-item color="red" v-for="(item, i) in links" :key="i" :to="item.path">
            <v-list-item-title class="subtitle-1">{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-spacer></v-spacer>
      <v-btn color="warning" @click="modal(nav_list.name)">
        <v-icon>mdi-phone</v-icon>
        <span class="d-none d-sm-flex">заказать звонок</span>
      </v-btn>
      <v-btn v-if="!user" icon @click="modal({name: 'point_entry'})">
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <v-btn v-else icon @click="logout">
        <v-icon>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>
  </header>
</template>

<script>
import { mapActions, mapState } from "vuex";
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
  methods: {
    ...mapActions({ modal: "shared/show_modal", logout: "user/user_logout" })
  },
  computed: {
    ...mapState("user", ["user"])
  }
};
</script>

<style lang="scss" scoped>
</style>