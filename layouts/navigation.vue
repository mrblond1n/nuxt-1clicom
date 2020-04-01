<template>
  <!-- LEFT -->
  <v-navigation-drawer
    v-model="drawer"
    :permanent="style_width()"
    :color="'rgba(0, 0, 0, .7)'"
    :width="style_width() ? '120' : ''"
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
      <template v-if="current_navigation_list.name === 'home'">
        <v-list-item
          color="white"
          link
          v-for="(item, i) in current_navigation_list.list"
          :to="set_path_for_link(item.path)"
          :key="i"
        >
          <v-list-item-content>
            <v-list-item-title class="subtitle-1 navigation_link">{{item.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>

      <template v-else>
        <template v-for="(item, index) in current_navigation_list.list">
          <v-list-item
            v-if="!item.root || (item.root && super_user_is_set)"
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
  computed: {
    current_navigation_list() {
      return this.$store.getters["navigation/current_navigation_list"];
    },
    super_user_is_set() {
      return this.$store.getters["user/super_user_is_set"];
    },
    drawer: {
      get() {
        return this.$store.getters["shared/drawer"];
      },
      set() {}
    }
  },
  methods: {
    close_drawer(val) {
      this.$store.dispatch("shared/show_drawer", val);
    },
    style_width() {
      if (
        this.$vuetify.breakpoint.name == "sm" ||
        this.$vuetify.breakpoint.name == "xs"
      )
        return false;
      return true;
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
        this.$store.dispatch("user/user_logout").then(() => {
          this.$router.push("/partner_page");
        });
        this.$store.dispatch(
          "navigation/set_current_nav_list",
          "/partner_page"
        );
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
  }
};
</script>