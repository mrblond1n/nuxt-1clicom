<template>
  <v-content class="pa-0 content">
    <v-layout column>
      <section class="section section__header-home">
        <v-container>
          <v-layout class="text-center" column>
            <v-layout column class="my-5">
              <h1 class="display-4 mb-3">зао лик</h1>
              <h4 class="display-1">экспертные онлайн сервисы</h4>
            </v-layout>
            <v-layout column class="my-5">
              <h4 class="display-1 text-center">В нашей базе данных</h4>
              <hr class="my-5" />
              <v-layout row wrap>
                <v-layout
                  v-for="(item, i) in home_data.first"
                  :key="i"
                  column
                  style="min-width: 150px"
                  class="text-center ma-3"
                >
                  <animate-number
                    easing="easeOutQuad"
                    class="headline"
                    :formatter="formatter"
                    from="0"
                    :to="item.count"
                    :duration="1000 * random_integer(2, 5)"
                  ></animate-number>
                  <div class="headline">{{item.title}}</div>
                </v-layout>
              </v-layout>
            </v-layout>
          </v-layout>
        </v-container>
      </section>

      <section style="min-height: 0px">
        <v-container>
          <v-layout justify-center column align-center style="margin-top: -180px">
            <v-layout row wrap justify-center class="my-5">
              <router-link
                v-for="(item, i) in home_data.second"
                :key="i"
                tag="div"
                class="pointer"
                :to="item.path"
                max-width="200px"
                max-height="300px"
                flat
                color="transparent"
              >
                <v-list-item style="width: 200px">
                  <v-layout column>
                    <v-list-item-avatar size="150" style="margin-right: 0" class="avatar-icon">
                      <v-img :src="require('~/static/images/home/' + item.src)"></v-img>
                    </v-list-item-avatar>
                    <div class="caption text-center">{{item.description}}</div>
                  </v-layout>
                </v-list-item>
              </router-link>
            </v-layout>
            <v-btn color="warning" @click="modal_window_call({id: 'h1'})">Получить тестовый доступ</v-btn>
          </v-layout>
        </v-container>
      </section>

      <section class="section">
        <!-- <app-table :page="`ht_1`" :table_data="$store.state.tables.services"></app-table> -->
      </section>

      <section class="section">
        <v-container>
          <v-layout column>
            <h3 class="display-1 text-center">Кому это нужно</h3>
            <v-layout wrap justify-center>
              <v-card
                width="15%"
                min-width="150px"
                flat
                data-aos="fade-right"
                v-for="(item, i) in home_data.third"
                :key="i"
              >
                <v-list-item>
                  <v-layout column>
                    <v-list-item-avatar
                      size="130"
                      style="margin-right: 0"
                      :color="item.color"
                      class="avatar-icon"
                    >
                      <v-img :src="require('~/static/images/home/' + item.src)"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-title class="subtitle-2">{{item.title}}</v-list-item-title>
                    <div class="caption text-center">{{item.description}}</div>
                  </v-layout>
                </v-list-item>
              </v-card>
            </v-layout>
          </v-layout>
        </v-container>
      </section>

      <section class="section">
        <!-- <app-table :page="`ht_2`" :table_data="$store.state.tables.how_much_home" /> -->
      </section>

      <section class="section">
        <v-container>
          <v-layout column>
            <h3 class="display-1 text-center">Источники данных</h3>
            <v-layout wrap justify-center>
              <v-card
                data-aos="fade-right"
                width="25%"
                min-width="200px"
                flat
                v-for="(item, i) in home_data.fourth"
                :key="i"
              >
                <v-list-item>
                  <v-layout column>
                    <v-list-item-avatar size="130" style="margin-right: 0" class="avatar-icon">
                      <v-img :src="require('~/static/images/home/' + item.src)" />
                    </v-list-item-avatar>
                    <v-list-item-title class="subtitle-2">{{item.title}}</v-list-item-title>
                    <div class="caption text-center">{{item.description}}</div>
                  </v-layout>
                </v-list-item>
              </v-card>
            </v-layout>
          </v-layout>
        </v-container>
      </section>

      <section class="section">
        <v-container>
          <v-layout column justify-center>
            <h3 class="display-1 text-center">Новости</h3>
            <v-layout wrap justify-center align-center>
              <v-card
                data-aos="fade-right"
                width="50%"
                min-width="200px"
                v-for="(item, i) in home_data.fifth"
                class="my-2"
                :key="i"
                flat
                color="transparent"
              >
                <v-list-item>
                  <v-layout column align-start>
                    <v-list-item-title
                      class="subtitle-2 text-left"
                      style="width: 100%"
                    >{{item.date}}</v-list-item-title>
                    <div class="caption text-left">{{item.text}}</div>
                  </v-layout>
                </v-list-item>
              </v-card>
            </v-layout>
          </v-layout>
        </v-container>
      </section>
    </v-layout>
  </v-content>
</template>

<script>
import appTable from "@/components/mist/Table";

import set_section_id from "~/library/set_section_id";
export default {
  components: {
    appTable
  },
  data() {
    return {};
  },
  computed: {
    home_data() {
      return this.$store.state.home.list;
    }
  },
  methods: {
    modal_window_call(num) {
      this.$store.dispatch("show_modal", num);
    },
    formatter: function(num) {
      let number = num.toFixed(0);
      return number
        .toString()
        .split(/(?=(?:\d{3})+(?:\.|$))/g)
        .join(" ");
    },
    random_integer(min, max) {
      let rand = min - 0.5 + Math.random() * (max - min + 1);
      return Math.round(rand);
    }
  },
  mounted() {
    set_section_id(this);
  }
};
</script>

<style lang="scss" >
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

.section:first-child {
  // background: url(../assets/images/home/bg.jpg) center center / cover no-repeat;
  background: #000;
  color: white;
}

section:nth-child(2n + 3) {
  background: #e7e5e5;
}

.avatar-icon {
  border-radius: 50%;
}

.pointer {
  cursor: pointer;
}
</style>

