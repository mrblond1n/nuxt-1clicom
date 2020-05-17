<template>
  <v-navigation-drawer
    v-model="drawer"
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

    <v-list v-if="nav_list">
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
  props: {
    nav_list: {
      type: Object,
      default: () => {}
    },
    user_set: {
      type: Boolean,
      default: false
    },
    drawer: {
      type: Boolean,
      default: true
    },
    super_user: {
      type: Boolean,
      default: true
    }
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