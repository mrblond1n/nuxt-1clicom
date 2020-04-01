<template>
  <v-content class="pa-0 content">
    <v-layout column>
      <template>
        <app-top-section class="section partner" />

        <app-news-section class="section partner" :news="news" />

        <section class="section partner">
          <v-container>
            <h3
              class="display-2 mb-5"
            >Преимущества онлайн-сервиса по проверке контрагентов "лик:эксперт"</h3>
            <v-layout justify-space-around wrap>
              <ul
                style="max-width: 500px"
                v-for="(list, i) in advantage"
                :key="i"
                class="text-left"
              >
                <li class="my-3 list__item" v-for="(item, i) in list" :key="i">{{item}}</li>
              </ul>
            </v-layout>
          </v-container>
        </section>

        <app-sections
          class="section partner"
          v-for="(section, i) in sections"
          :key="i"
          :section_info="section"
        ></app-sections>

        <section class="section partner">
          <app-table page="pt_1" :table_data="getServicesTable"></app-table>
        </section>

        <app-contacts-section class="section partner" />
        <app-administration-section class="section partner" v-if="access_to_admin" />
      </template>
    </v-layout>
  </v-content>
</template>

<script>
import appTopSection from "~/components/Auth_partner/top_section/Section";
import appNewsSection from "~/components/Auth_partner/news_section/News";
import appSections from "~/components/Auth_partner/sections/Section";
import appAdministrationSection from "~/components/Auth_partner/administration/Section";
import appContactsSection from "~/components/Auth_partner/Contacts";
import appTable from "~/components/mist/Table";

import set_section_id from "~/library/set_section_id";

export default {
  middleware: "auth_guard",
  components: {
    appTopSection,
    appNewsSection,
    appTable,
    appSections,
    appAdministrationSection,
    appContactsSection
  },
  data() {
    return {
      advantage: [
        [
          "ВЫПИСКИ: ( с историей ранних выписок); - ЕГРЮЛ С ЭЦП; - ЕГРН С ЭЦП.",
          "ОТЧЁТ ПДО (уровень налогового риска с рекомендациями);",
          "ЗАБЛОКИРОВАННЫЕ СЧЕТА (с историей блокировки);",
          "РАСХОДЫ И ОТЧИСЛЕНИЯ ЮЛ;",
          "ПОДАННЫЕ ДОКУМЕНТЫ В ФНС;",
          "КОНТРАГЕНТЫ / КОНКУРЕНТЫ",
          "ПРОВЕРКА КВАРТИРЫ",
          "ОБЪЕКТЫ НЕДВИЖИМОСТИ ЮЛ (информация о факте владения объектами недвижимости и о факте аренды в объектах недвижимости.)",
          "НАЛИЧИЕ ТРАНСПОРТА ЮЛ;"
        ],
        [
          "ОКОНЧЕННЫЕ АРХИВНЫЕ ИСПОЛНИТЕЛЬНЫЕ ПРОИЗВОДСТВА;",
          "ВНЕШНЕЭКОНОМИЧЕСКАЯ ДЕЯТЕЛЬНОСТЬ;",
          "ИНФОРМАЦИЯ О ПЕРЕХОДЕ НА УСН;",
          "БИЗНЕС КОЭФФИЦИЕНТЫ;",
          "БАНКОВСКИЕ РЕКВИЗИТЫ (более 3,5 млн. ЮЛ с реквизитами основного расчетного счета);",
          "ЧЛЕНСТВО В СРО;",
          "ВОЗРАСТ РУКОВОДИТЕЛЕЙ;",
          "НАЛОГОВЫЕ НЕДОИМКИ ФЛ;",
          "ДАННЫЕ РОССТАТА (численность, филиалы, история изменений);",
          "ФОРМИРОВАНИЕ АКТУАЛЬНЫХ БАЗ ДАННЫХ по всей территории РФ (телефон, электронная почта, сайт)."
        ]
      ]
    };
  },
  computed: {
    access_to_admin() {
      return this.$store.getters["user/super_user_is_set"];
    },
    news() {
      return this.$store.getters["auth_user_page/section_news"];
    },
    sections() {
      return this.$store.getters["auth_user_page/sections"];
    },
    getServicesTable() {
      return this.$store.state.tables.services;
    }
  },
  mounted() {
    set_section_id(this);
  }
};
</script>

<style>
section {
  text-align: center;
}
.section.partner:first-child {
  padding-top: 100px;
}

.section.partner {
  background: #fff;
  color: black;
}

.section.partner:nth-child(odd) {
  background: #c5cae9;
  color: black;
}

.section.partner:nth-child(odd) .svg {
  fill: black;
}

.partner .svg {
  width: 200px;
  height: 200px;
}
</style>
