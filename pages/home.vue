<template>
  <v-layout column>
    <section
      class="section section__header-home"
      :style="{'background': 'url(' + require('~/static/images/home/bg.jpg') + ') center center / cover no-repeat'}"
    >
      <v-container data-aos>
        <v-layout class="text-center" column>
          <v-layout column class="my-5">
            <h1 class="display-4 mb-3">зао лик</h1>
            <h4 class="display-1">экспертные онлайн сервисы</h4>
          </v-layout>
          <v-layout column class="my-5">
            <h4 class="display-1 text-center">В нашей базе данных</h4>
            <hr class="my-5" />
            <client-only>
              <v-layout row wrap>
                <v-layout
                  v-for="(item, i) in first"
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
            </client-only>
          </v-layout>
        </v-layout>
      </v-container>
    </section>

    <section style="min-height: 0px">
      <v-container data-aos>
        <v-layout justify-center column align-center style="margin-top: -180px">
          <v-layout row wrap justify-center class="my-5">
            <router-link
              v-for="(item, i) in second"
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
                    <v-img
                      :src="require(`~/static/images/home/${item.src}`)"
                      :lazy-src="require(`~/static/images/home/${item.src}`)"
                    ></v-img>
                  </v-list-item-avatar>
                  <div class="caption text-center">{{item.description}}</div>
                </v-layout>
              </v-list-item>
            </router-link>
          </v-layout>
          <v-btn color="warning" @click="modal({id: 'h1'})">Получить тестовый доступ</v-btn>
        </v-layout>
      </v-container>
    </section>

    <section class="section">
      <app-section-table :page="`ht_1`" />
    </section>

    <section class="section">
      <v-container data-aos>
        <v-layout column>
          <h3 class="display-1 text-center">Кому это нужно</h3>
          <v-layout wrap justify-center>
            <v-card
              width="15%"
              min-width="150px"
              flat
              data-aos="fade-right"
              v-for="(item, i) in third"
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
                    <v-img
                      :src="require(`~/static/images/home/${item.src}`)"
                      :lazy-src="require(`~/static/images/home/${item.src}`)"
                    ></v-img>
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
      <app-section-table :page="`ht_2`" :table_data="table" />
    </section>

    <section class="section">
      <v-container data-aos>
        <v-layout column>
          <h3 class="display-1 text-center">Источники данных</h3>
          <v-layout wrap justify-center>
            <v-card
              data-aos="fade-right"
              width="25%"
              min-width="200px"
              flat
              v-for="(item, i) in fourth"
              :key="i"
            >
              <v-list-item>
                <v-layout column>
                  <v-list-item-avatar size="130" style="margin-right: 0" class="avatar-icon">
                    <v-img
                      :src="require(`~/static/images/home/${item.src}`)"
                      :lazy-src="require(`~/static/images/home/${item.src}`)"
                    />
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
      <v-container data-aos>
        <v-layout column justify-center>
          <h3 class="display-1 text-center">Новости</h3>
          <v-layout wrap justify-center align-center>
            <v-card
              data-aos="fade-right"
              width="50%"
              min-width="200px"
              v-for="(item, i) in fifth"
              class="my-2"
              :key="i"
              flat
              color="transparent"
            >
              <v-list-item>
                <v-layout column align-start>
                  <v-list-item-title class="subtitle-2 text-left" style="width: 100%">{{item.date}}</v-list-item-title>
                  <div class="caption text-left">{{item.text}}</div>
                </v-layout>
              </v-list-item>
            </v-card>
          </v-layout>
        </v-layout>
      </v-container>
    </section>
  </v-layout>
</template>

<script>
import { mapActions } from "vuex";
import set_section_id from "~/library/set_section_id";
export default {
  head: {
    title: "Домашнаяя"
  },
  data() {
    return {
      first: [
        { count: 25560738, title: "Компаний и ип" },
        { count: 45572629, title: "Арбитражных дел" },
        { count: 2148271, title: "Проверок" },
        { count: 13948271, title: "Бух. Балансов" }
      ],
      second: [
        {
          src: "lic_e.png",
          path: "/expert",
          description:
            "Онлайн-сервис по проверке контрагентов и поиск целевых клиентов"
        },
        {
          src: "lic_b.png",
          path: "/business",
          description:
            "Приложение для Windows и 1С для проверки контрагентов и поиска целевых клиентов"
        },
        {
          path: "/manager",
          src: "lic_m.png",
          description: "Windows-приложение для поиска целевых клиентов"
        }
      ],
      third: [
        {
          title: "Руководителю",
          description: "Минимизация финансовых и репутационных рисков",
          src: "a_dir.png"
        },
        {
          title: "Бухгалтеру",
          description:
            "Минимизация налоговых рисков и проявление должной осмотрительности",
          src: "a_buh.png"
        },
        {
          title: "Юристу",
          description:
            "Контроль изменения основных данных контрагента и анализ арбитражных дел",
          src: "a_uri.png"
        },
        {
          title: "службе безопасности",
          description:
            "Проверка благонадежности контрагентов и выявление аффилированности",
          src: "a_sb.png"
        },
        {
          title: "Менеджеру",
          description:
            "Формирование базы потенциальных клиентов, получение полной информации о клиенте",
          src: "a_man.png"
        },
        {
          title: "Маркетологу",
          description: "Комплексный анализ конкурентного окружения",
          src: "a_mar.png"
        }
      ],
      fourth: [
        {
          title: "Данные фнс",
          description: "Обновление ежедневно",
          src: "fns_logo.png"
        },
        {
          title: "Данные РосСтат",
          description: "Обновление ежемесячно",
          src: "rosstat_logo.png"
        },
        {
          title: "Данные ВАС РФ",
          description: "Обновление еженедельно",
          src: "vasrf_logo.png"
        },
        {
          title: "Данные ФССП",
          description: "Обновление еженедельно",
          src: "fssp_logo.png"
        },
        {
          title: "Гос. закупки",
          description: "Обновление еженедельно",
          src: "goszak_logo.png"
        },
        {
          title: "Ген. прокуратура",
          description: "Обновление еженедельно",
          src: "genpro_logo.png"
        },
        {
          title: "ЦБ РФ",
          description: "Обновление по запросу",
          src: "cbrf_logo.png"
        },
        {
          title: "Рос Реестр",
          description: "Обновление по запросу",
          src: "rosreestr_logo.png"
        }
      ],
      fifth: [
        {
          date: "30 декабря 2019",
          text:
            'Уважаемые Клиенты! В период с с 3 по 5 января 2020 года на серверах компании будут проводиться технические работы по переходу на новую платформу, в связи с чем сервисы "ЛИК" могут быть временно недоступны.'
        },
        {
          date: "25 октября 2017",
          text:
            "В связи с проведением срочных технологических работ, сервисы компании могут быть недоступны с 23-00 по 23-59 25.10.2017 года. Приносим свои извинения за предоставленные неудобства"
        },
        {
          date: "25 октября 2017",
          text:
            "Во вторник, 24 октября, было проведено «сотни атак» с использованием вируса Bad Rabbit, который является модификацией вируса-шифратора, известного как Petya. Наши сервера также подверглись атакам и сервисы были временно недоступны. Приносим вам свои извинения. В настоящий момент проблема решена и сервисы работают в штатном режиме."
        },
        {
          date: "28 апреля 2017",
          text:
            "Добавлена возможность заказа выписки из Единого государственного реестра недвижимости (ЕГРН), а также получение информации из реестра залогов движимого имущества."
        }
      ],
      table: {
        class: "home_table_how_much",
        title: "сколько это стоит ?",
        header: [
          {
            cells: [
              { text: "" },
              { text: "Лик:Эксперт" },
              { text: "Лик:Бизнес" },
              { text: "Лик:Менеджер" }
            ]
          }
        ],
        body: [
          {
            title: {
              text: "Основное рабочее место / год"
            },
            cells: [
              {
                text: "44 000",
                icon: "currency-rub"
              },
              {
                text: "35 000",
                icon: "currency-rub"
              },
              {
                text: "26 000",
                icon: "currency-rub"
              }
            ]
          },
          {
            title: {
              text: "5 Дополнительных рабочих мест"
            },
            cells: [
              {
                icon: "minus"
              },
              {
                text: "14 000",
                icon: "currency-rub",
                subtext: "(2800 руб / 1 раб. место)"
              },
              {
                icon: "minus"
              }
            ]
          },
          {
            title: {
              text: "10 Дополнительных рабочих мест"
            },
            cells: [
              {
                icon: "minus"
              },
              {
                text: "21 000",
                icon: "currency-rub",
                subtext: "(2100 руб / 1 раб. место)"
              },
              {
                icon: "minus"
              }
            ]
          }
        ],
        footer: [
          {
            cells: [
              { text: "" },
              { text: "Заказать" },
              { text: "Заказать" },
              { text: "Заказать" }
            ]
          }
        ]
      }
    };
  },
  methods: {
    ...mapActions({ modal: "shared/show_modal" }),
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

<style scoped>
.section:first-child {
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

