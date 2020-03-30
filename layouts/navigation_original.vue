<template>
  <!-- LEFT -->
  <v-navigation-drawer
    v-model="drawer"
    :permanent="style_width()"
    :width="style_width() ? '120' : ''"
    dark
    app
    id="drawer"
    :color="'rgba(0, 0, 0, .7)'"
  >
    <v-list>
      <!-- Первая ссылка-иконка в списке бокого меню -->

      <v-list-item color="white" link to="/home" @click="changeNavList('/home')">
        <v-list-item-content>
          <v-list-item-title class="text-center">
            <v-img width="50px" style="margin: 0 auto" :src="require('~/static/logo__1clicom.png')"></v-img>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <!-- Навигация на домашней странице -->
      <client-only>
        <template v-if="getCurrentNavList.name === 'home'">
          <v-list-item
            color="white"
            link
            v-for="(item, i) in getCurrentNavList.list"
            :to="set_path_for_link(item.path)"
            :key="i"
            @click="changeNavList(item.path)"
          >
            <v-list-item-content>
              <v-list-item-title class="subtitle-1 navigation_link">{{item.title}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </client-only>

      <!-- Навигация на остальных страницах -->

      <!-- <template v-else>
        <template v-for="(item, i) in getCurrentNavList.list">
          <v-list-item
            v-if="!item.root || (item.root && isSuperUser)"
            color="white"
            @click="item.id ? modal_window_call(item.id) : $vuetify.goTo(scrollTo(i), option_scroll)"
            link
            :key="i"
          >
            <v-list-item-content>
              <v-list-item-title class="subtitle-1 navigation_link">{{item.title}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </template>-->
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    drawer: {
      get() {
        return true;
        // return this.$store.shared.state.drawer;
      },
      set() {}
    },
    isSuperUser() {
      // return this.$store.getters.isSuperUser;
    },
    option_scroll() {
      return this.$store.shared.state.option_scroll;
    },
    getCurrentNavList() {
      return this.$store.navigation.state.getCurrentNavList;
    },
    isUserLogin() {
      // return this.$store.getters.isUserLogin;
    }
  },
  methods: {
    set_path_for_link(path) {
      // Проверка на логин юзера
      if (this.isUserLogin && path === "/partner_page") return "/auth_partner";
      return path;
    },
    changeNavList(router_name) {
      console.log(router_name);

      this.isUserLogin && router_name === "/partner_page"
        ? (router_name = "/auth_partner")
        : router_name;
      this.$emit("changeNavList", router_name);
    },
    scrollTo(index) {
      switch (this.$router.history.current.name.toLowerCase()) {
        case "auth_partner" || "partner_page":
          return `#p${index}`;
        case "expert_1c":
          return `#c${index}`;
        default:
          return `#${this.$router.history.current.name.toLowerCase().charAt(0) +
            index}`;
      }
    },
    modal_window_call(name) {
      // Клик по кнопке заказа звонка в шапке и кнопке Login
      if (name === "point_exit") {
        this.$store.dispatch("logoutUser").then(() => {
          this.$router.push("/partner_page");
        });
        this.$emit("changeNavList", "partner_page");
        return;
      }
      if (name == "expert_1c") {
        this.$store.dispatch("show_modal", {
          id: "c0",
          txt: "Заявка на обратный звонок",
          name: name
        });
        return;
      }
      this.$store.dispatch("show_modal", {
        id: name.charAt() + 0,
        txt: "Заявка на обратный звонок",
        name: name
      });
    },
    style_width() {
      if (
        this.$vuetify.breakpoint.name == "sm" ||
        this.$vuetify.breakpoint.name == "xs"
      )
        return false;
      return true;
    }
  },
  mounted() {
    document.body.addEventListener("click", e => {
      if (
        e.target.classList.value === "v-overlay__scrim" &&
        this.drawer === true
      ) {
        this.$store.dispatch("show_drawer");
      }
    });
  }
};
</script>