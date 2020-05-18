<template>
  <v-app id="inspire">
    <app-header @show_drawer="show_drawer" :nav_list="nav_list" />
    <app-navigation :drawer="drawer" @show_drawer="show_drawer" :nav_list="nav_list" />

    <!-- CONTENT -->
    <v-content class="pa-0 content" style="overflow: hidden">
      <nuxt />
    </v-content>
    <!-- FOOTER  -->
    <app-footer />

    <!-- SNACKBARS -->
    <template v-if="snackbar.message">
      <v-snackbar
        :multi-line="true"
        :timeout="4000"
        :color="snackbar.color"
        :value="true"
        @input="clear_snackbar"
      >
        {{ snackbar.message }}
        <v-btn color="black" text @click.native="clear_snackbar">
          <v-icon center>mdi-close</v-icon>
        </v-btn>
      </v-snackbar>
    </template>
    <!-- MODAL -->
    <app-modal v-if="modal" />
  </v-app>
</template>

<script>
import appHeader from "./appHeader";
import appNavigation from "./appDrawer";
import appFooter from "./appFooter";
import appModal from "@/components/modals/Modal";

import { mapState, mapActions } from "vuex";

export default {
  components: {
    appHeader,
    appNavigation,
    appFooter,
    appModal
  },
  data() {
    return {
      drawer: true,
      list: [
        { title: "лик: эксперт", path: "/expert" },
        { title: "лик: эксперт 1с", path: "/expert_1c" },
        { title: "лик: бизнес", path: "/business" },
        { title: "лик: менеджер", path: "/manager" },
        { title: "лик: контрагент", path: "/kontr" },
        { title: "о нашей компании", path: "/about" },
        { title: "партнерский раздел", path: "/partner_page" }
      ],
      navigation_lists: [
        {
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
        },
        {
          name: "expert",
          title: "ЛИК:Эксперт",
          subtitle: "Cервис для проверки и поиска клиентов",
          list: [
            { title: "Поиск и карточка" },
            { title: "Аффилированность" },
            { title: "Арбитражная практика" },
            { title: "Отчеты и выписки" },
            { title: "Финансовая отчетность" },
            { title: "Тендеры и закупки" },
            { title: "Мониторинг и анализ" },
            { title: "Формирование базы" },
            { title: "Варианты и цены" }
          ]
        },
        {
          name: "expert_1c",
          title: "ЛИК:Эксперт 1C",
          subtitle: "Cервис для проверки и поиска клиентов",
          list: [
            { title: "Поиск и карточка" },
            { title: "Аффилированность" },
            { title: "Арбитражная практика" },
            { title: "Отчеты и выписки" },
            { title: "Финансовая отчетность" },
            { title: "Тендеры и закупки" },
            { title: "Мониторинг и анализ" },
            { title: "Формирование базы" },
            { title: "Варианты и цены" }
          ]
        },
        {
          name: "business",
          title: "ЛИК:БИЗНЕС",
          subtitle: "Сервис для поиска и проверки контрагентов",
          list: [
            { title: "Платформы и решения" },
            { title: "Информация о компании" },
            { title: "Оценка рисков" },
            { title: "Формирование базы" },
            { title: "Бух. отчетность" },
            { title: "Возможности" },
            { title: "Варианты и цены" }
          ]
        },
        {
          name: "manager",
          title: "ЛИК:МЕНЕДЖЕР",
          subtitle: "Сервис для формирования клиентской базы",
          list: [
            { title: "Контакты" },
            { title: "Формирование базы" },
            { title: "Контактная информация" },
            { title: "Возможности" },
            { title: "Варианты и цены" }
          ]
        },
        {
          name: "about",
          title: "О нас",
          list: [{ title: "О проекте" }, { title: "Информация" }]
        },
        {
          name: "partner_page",
          title: "Зао лик",
          subtitle: "для партнеров",
          list: [
            { title: "схемы сотрутдничества" },
            { title: "Контакты для связи" },
            { title: "Личный кабинет", id: "point_entry" }
          ]
        },
        {
          name: "auth_partner",
          title: "Зао лик",
          subtitle: "для партнеров",
          list: [
            { title: "Заказать доступ" },
            { title: "Новости" },
            { title: "Преимущества" },
            { title: "Документы" },
            { title: "Обучение" },
            { title: "Рекламные материалы" },
            { title: "сервисы лик" },
            { title: "контакты" },
            { title: "Администрирование", root: true },
            { title: "выход", id: "point_exit" }
          ]
        }
      ]
    };
  },
  computed: {
    ...mapState("shared", ["snackbar", "modal"]),
    nav_list() {
      return this.navigation_lists.filter(
        el => el.name === this.$route.name
      )[0];
    }
  },
  methods: {
    ...mapActions({
      clear_snackbar: "shared/clear_snackbar",
      auto_login: "user/auto_user_login"
    }),
    show_drawer(val) {
      this.drawer = val;
    }
  },
  mounted() {
    this.auto_login().then(res => {
      if (!res) return;
      if (this.$route.name === "partner_page") {
        this.$router.push("/auth_partner");
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

@media (min-width: 1904px) {
  .container {
    max-width: 1185px;
  }
}

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
