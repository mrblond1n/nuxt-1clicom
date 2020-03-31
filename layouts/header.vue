<template>
  <client-only>
    <header>
      <!-- LEFT -->

      <!-- TOP  -->
      <v-app-bar app dark id="bar" :color="'rgba(0, 0, 0, .7)'">
        <v-app-bar-nav-icon v-show="!style_width()" @click.stop="show_drawer" />

        <!-- Заголовок -->
        <router-link v-if="this.$vuetify.breakpoint.name != 'xs'" to="/home" tag="div">
          <div class="pointer" @click="changeNavList('/home')">
            <v-toolbar-title class="display-1">{{getCurrentNavList.title}}</v-toolbar-title>
            <v-toolbar-title class="caption">{{getCurrentNavList.subtitle}}</v-toolbar-title>
          </div>
        </router-link>

        <!-- Выпадающее меню -->

        <v-menu offset-y open-on-hover v-if="$router.history.current.name != 'Home'">
          <template v-slot:activator="{ on }">
            <v-btn
              :small="$vuetify.breakpoint.xsOnly || $vuetify.breakpoint.smOnly"
              color="warning"
              style="margin-left: 20px"
              dark
              v-on="on"
            >Наши сервисы</v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, i) in list"
              :key="i"
              :to="set_path_for_link(item.path)"
              @click="changeNavList(item.path)"
            >
              <v-list-item-title class="subtitle-1">{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-spacer></v-spacer>

        <!-- Правая часть хедера -->

        <v-btn
          :small="$vuetify.breakpoint.xsOnly || $vuetify.breakpoint.smOnly"
          color="warning"
          @click.stop="modal_window_call(getCurrentNavList.name)"
        >
          <v-icon :left="style_width()">mdi-phone</v-icon>
          <template v-show="style_width()">заказать звонок</template>
        </v-btn>
        <v-btn v-if="!isUserLogin" text @click="modal_window_call('point_entry')">
          <v-icon>mdi-account</v-icon>
        </v-btn>
        <v-btn v-else text @click="modal_window_call('point_exit')">
          <v-icon>mdi-exit-to-app</v-icon>
        </v-btn>
      </v-app-bar>
    </header>
  </client-only>
</template>

<script>
export default {
  data() {
    return {
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
    isUserLogin() {
      return this.$store.getters.isUserLogin;
    },
    getCurrentNavList() {
      return this.$store.state.navigation.current_navigation_list;
    }
  },
  methods: {
    set_path_for_link(path) {
      // Проверка на логин юзера
      if (this.isUserLogin && path === "/partner_page") return "/auth_partner";
      return path;
    },
    changeNavList(router_name) {
      this.isUserLogin && router_name === "/partner_page"
        ? (router_name = "/auth_partner")
        : router_name;
      this.$emit("changeNavList", router_name);
    },
    style_width() {
      if (
        this.$vuetify.breakpoint.name == "sm" ||
        this.$vuetify.breakpoint.name == "xs"
      )
        return false;
      return true;
    },
    show_drawer() {
      this.$store.dispatch("shared/show_drawer", true);
    },
    modal_window_call(name) {
      // Клик по кнопке навигации Logout
      if (name === "point_exit") {
        this.$store.dispatch("shared/logoutUser").then(() => {
          this.drawer = false;
          if (this.$router.history.current.name === "Auth_partner") {
            this.$router.push("/partner_page").then(() => {
              this.changeNavList("/partner_page");
            });
          }
        });
        return;
      }
      // Клик по кнопке заказа звонка в шапке и кнопке Login
      if (name == "expert_1c") {
        this.$store.dispatch("shared/show_modal", {
          id: "c0",
          txt: "Заявка на обратный звонок",
          name: name
        });
        return;
      }
      this.$store.dispatch("shared/show_modal", {
        id: name.charAt() + 0,
        txt: "Заявка на обратный звонок",
        name: name
      });
    }
  }

  //
};
</script>