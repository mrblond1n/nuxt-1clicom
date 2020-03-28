<template>
  <v-app id="inspire">
    <app-header @changeNavList="changeNavList" />
    <!-- <app-navigation @changeNavList="changeNavList" /> -->

    <!-- CONTENT -->
    <transition
      mode="out-in"
      enter-active-class="animated slideInLeft"
      leave-active-class="animated slideOutRight"
    >
      <router-view></router-view>
    </transition>
    <!-- FOOTER  -->
    <v-footer id="footer" class="footer" app padless @changeNavList="changeNavList">
      <app-footer></app-footer>
    </v-footer>

    <!-- SNACKBARS -->
    <!-- <template>
      <v-snackbar
        v-if="snackbar.message"
        :multi-line="true"
        :timeout="4000"
        :color="snackbar.color"
        :value="true"
        @input="closeSnackbar"
      >
        {{ snackbar.message }}
        <v-btn color="black" text @click.native="closeSnackbar">
          <v-icon center>mdi-close</v-icon>
        </v-btn>
      </v-snackbar>
    </template>-->
    <!-- MODAL -->
    <!-- <app-modal v-if="modal" /> -->
  </v-app>
</template>

<script>
import appHeader from "./header";
// import appNavigation from "@/components/Navigation";
import appFooter from "./footer";
// import appModal from "@/components/Modals/Modal";

import { mapState } from "vuex";

export default {
  components: {
    appHeader,
    // appNavigation,
    appFooter
    // appModal
  },
  data() {
    return {
      drawer: false,
      list: [
        { title: "лик: эксперт", path: "/expert" },
        { title: "лик: эксперт 1с", path: "/expert_1c" },
        { title: "лик: бизнес", path: "/business" },
        { title: "лик: менеджер", path: "/manager" },
        { title: "лик: контрагент", path: "/kontr" },
        { title: "о нашей компании", path: "/about" },
        { title: "партнерский раздел", path: "/partner_page" }
      ]
    };
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
    snackbar() {
      return this.$store.getters.snackbar;
    },
    modal() {
      return this.$store.getters.modal;
    }
  },
  methods: {
    opacityColor(color) {
      return `rgba(${color}, .7)`;
    },
    closeSnackbar() {
      // this.$store.dispatch("clearSnackbar");
    },
    changeNavList(router_name) {
      this.$store.commit("navigation/set_current_nav_list", router_name);
    }
  },
  created() {
    this.changeNavList(`/${this.$router.currentRoute.name.toLowerCase()}`);
  }
};
</script>

<style lang="scss">
section,
.section {
  min-height: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px 20px 80px 20px;
}

@font-face {
  font-family: "Bebas Neue";
  src: url("~@/static/fonts/bebas/BebasNeueRegular.woff2") format("woff2"),
    url("~@/static/fonts/bebas/BebasNeueRegular.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}

#drawer {
  background: rgba(#000, 0.7);
  min-height: 100%;
}
.navigation_link {
  white-space: normal !important;
  text-align: center;
}

.v-application .display-1,
.v-application .display-2,
.v-application .display-3,
.v-application .display-4,
.v-application .headline,
.v-application .title,
.v-application .subtitle-1,
.v-application .subtitle-2 {
  font-family: "Bebas Neue";
}

.v-application ul {
  padding: 0 !important;
}

ul li {
  list-style: none;
  margin: 5px 0;
}

#footer {
  position: static;
}

@media (min-width: 1904px) {
  .container {
    max-width: 1185px;
  }
}
@media (max-width: 504px) {
  html {
    font-size: 13px !important;
  }
}

.list__item {
  border-bottom: 2px dotted #000;
}

.list__item.reverse {
  border-bottom: 2px dotted #fff;
}
</style>
