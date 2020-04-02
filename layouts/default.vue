<template>
  <v-app id="inspire">
    <app-navigation @change_nav_list="change_nav_list" />
    <app-header @change_nav_list="change_nav_list" />

    <!-- CONTENT -->
    <v-content class="pa-0 content">
      <nuxt />
    </v-content>
    <!-- FOOTER  -->
    <v-footer id="footer" class="footer" app padless @change_nav_list="change_nav_list">
      <app-footer />
    </v-footer>

    <!-- SNACKBARS -->
    <template>
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
    </template>
    <!-- MODAL -->
    <app-modal v-if="$store.state.shared.modal" />
  </v-app>
</template>

<script>
import appHeader from "./header";
import appNavigation from "./navigation";
import appFooter from "./footer";
import appModal from "@/components/modals/Modal";

import { mapState } from "vuex";

export default {
  middleware({ route, store }) {
    store.dispatch("navigation/set_current_nav_list_test", route.path);
    store.dispatch("shared/show_drawer", false);
  },
  components: {
    appHeader,
    appNavigation,
    appFooter,
    appModal
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
      return this.$store.getters["shared/loading"];
    },
    snackbar() {
      return this.$store.getters["shared/snackbar"];
    }
  },
  methods: {
    opacityColor(color) {
      return `rgba(${color}, .7)`;
    },
    closeSnackbar() {
      this.$store.dispatch("shared/clear_snackbar");
    },
    change_nav_list(router_name) {
      this.$store.dispatch("navigation/set_current_nav_list", router_name);
    }
  },
  created() {
    if (this.$router.currentRoute.name === null) {
      this.change_nav_list(`/home}`);
    } else {
      this.change_nav_list(`/${this.$router.currentRoute.name.toLowerCase()}`);
    }
  },
  mounted() {
    this.$store.dispatch("user/auto_user_login").then(res => {
      if (!res) return;
      if (this.$route.name === "partner_page") {
        this.$router.push("/auth_partner");
        this.$store.dispatch(
          "navigation/set_current_nav_list",
          "/auth_partner"
        );
      }
    });
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
  font-family: "Bebas Neue" !important;
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

html {
  font-size: 16px !important;
  @media (max-width: 1264px) {
    font-size: 14px !important;
  }
  @media (max-width: 600px) {
    font-size: 12px !important;
  }
}

// @media (min-width: 1904px) {
//   .container {
//     max-width: 1185px;
//   }
// }
// @media (max-width: 504px) {
//   html {
//     font-size: 13px !important;
//   }
// }

.list__item {
  border-bottom: 2px dotted #000;
}

.list__item.reverse {
  border-bottom: 2px dotted #fff;
}

.pointer {
  cursor: pointer;
}
</style>
