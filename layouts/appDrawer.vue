<template>
  <v-navigation-drawer v-model="show_drawer" app width="120" color="rgba(0,0,0, .7)" dark>
    <v-list-item color="white" link to="/home">
      <v-list-item-content>
        <v-list-item-title class="text-center">
          <v-img width="50px" style="margin: 0 auto" :src="require('~/static/logo__1clicom.png')" />
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list>
      <template v-for="(item, i) in nav_list.list">
        <v-list-item
          v-if="show(item)"
          class="py-2"
          link
          :key="item.path"
          :to="path(item.path)"
          @click="handler({item, i})"
        >
          <v-list-item-title class="subtitle-1 navigation_link">{{item.title}}</v-list-item-title>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import * as easings from "vuetify/es5/services/goto/easing-patterns";
import { mapActions, mapState } from "vuex";

export default {
  props: {
    drawer: {
      type: Boolean,
      default: false
    },
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
  data: () => ({
    option_scroll: {
      easing: "easeInOutCubic",
      easings: Object.keys(easings),
      duration: 1000,
      offset: 0
    }
  }),
  computed: {
    ...mapState("user", ["super_user", "user"]),
    show_drawer: {
      get() {
        return this.drawer;
      },
      set(val) {
        this.$emit("show_drawer", val);
      }
    }
  },
  methods: {
    ...mapActions({ modal: "shared/show_modal", logout: "user/user_logout" }),
    handler({ item, i }) {
      if (item.id) {
        item.id === "point_exit"
          ? this.logout()
          : this.modal({ name: item.id });
      } else {
        if (
          this.$route.name === "home" ||
          !document.querySelector(`#section_${i}`)
        )
          return;
        try {
          this.$vuetify.goTo(`#section_${i}`, this.option_scroll);
        } catch (e) {
          console.log(e);
        }
      }
    },
    show(item) {
      if (item.root && this.super_user) return true;
      if (!item.root) return true;
      return false;
    },
    path(val) {
      return this.user && val === "/partner_page" ? "/auth_partner" : val;
    }
  }
};
</script>

<style lang="scss" scoped>
.navigation_link {
  white-space: normal !important;
  text-align: center;
}
</style>