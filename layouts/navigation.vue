<template>
  <!-- LEFT -->
  <v-navigation-drawer
    v-model="$store.state.shared.drawer"
    :permanent="style_width()"
    :color="'rgba(0, 0, 0, .7)'"
    :width="style_width() ? '120' : ''"
    id="drawer"
    dark
    app
  >
    <!-- <v-list-item color="white" link to="/home" @click="changeNavList('/home')"> -->
    <v-list-item color="white" link to="/home" @click="changeNavList('/home')">
      <v-list-item-content>
        <v-list-item-title class="text-center">
          <v-img width="50px" style="margin: 0 auto" :src="require('~/static/logo__1clicom.png')"></v-img>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list>
      <template v-if="$store.state.navigation.current_navigation_list.name === 'home'">
        <v-list-item
          color="white"
          link
          v-for="(item, i) in $store.state.navigation.current_navigation_list.list"
          :to="set_path_for_link(item.path)"
          :key="i"
          @click="changeNavList(item.path)"
        >
          <v-list-item-content>
            <v-list-item-title class="subtitle-1 navigation_link">{{item.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>

      <template v-else>
        <template v-for="(item, index) in $store.state.navigation.current_navigation_list.list">
          <v-list-item
            v-if="!item.root || (item.root && isSuperUser)"
            color="white"
            @click="item.id ? modal_window_call(item.id) : $vuetify.goTo(`#section_${index}`, $store.state.shared.option_scroll)"
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
export default {
  data() {
    return {
      drawer: false,
      items: [{ title: "sd", icon: "mdi-lock" }]
    };
  },
  methods: {
    style_width() {
      if (
        this.$vuetify.breakpoint.name == "sm" ||
        this.$vuetify.breakpoint.name == "xs"
      )
        return false;
      return true;
    },
    changeNavList(router_name) {
      this.$store.state.user.user_setted && router_name === "/partner_page"
        ? (router_name = "/auth_partner")
        : router_name;
      this.$emit("changeNavList", router_name);
    },
    set_path_for_link(path) {
      // Проверка на логин юзера
      if (this.$store.state.user.user_setted && path === "/partner_page")
        return "/auth_partner";
      return path;
    },
    modal_window_call(name) {
      // Клик по кнопке заказа звонка в шапке и кнопке Login
      if (name === "point_exit") {
        this.$store.dispatch("user/logoutUser").then(() => {
          this.$router.push("/partner_page");
        });
        this.$emit("changeNavList", "partner_page");
        return;
      }
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
  },
  mounted() {
    document.body.addEventListener("click", e => {
      if (
        e.target.classList.value === "v-overlay__scrim" &&
        this.drawer === true
      ) {
        this.$store.dispatch("shared/show_drawer");
      }
    });
  }
  //   computed: {
  //     drawer: {
  //       get() {
  //         return true;
  //         // return this.$store.shared.state.drawer;
  //       },
  //       set() {}
  //     },
  //     isSuperUser() {
  //       // return this.$store.getters.isSuperUser;
  //     },
  //     option_scroll() {
  //       return this.$store.shared.state.option_scroll;
  //     },
  //     getCurrentNavList() {
  //       return this.$store.navigation.state.getCurrentNavList;
  //     },
  //     isUserLogin() {
  //       // return this.$store.getters.isUserLogin;
  //     }
  //   },
  //   methods: {

  //
  //   },
};
</script>