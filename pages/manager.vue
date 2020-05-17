<template>
  <v-layout column>
    <section class="section">
      <app-section-header :section_info="top_section" />
    </section>
    <section v-for="(section, i) in list_sections" :key="i + 10" class="section">
      <app-section :page="`m${i + 2}`" :section="section" />
    </section>
    <section class="section">
      <app-section-possible page="mp" :section="possible_section" />
    </section>
    <section class="section">
      <app-table page="mt" :table_data="$store.state.tables.manager_how_much" />
    </section>
  </v-layout>
</template>

<script>
import appTable from "~/components/mist/Table";
import appSectionHeader from "@/components/section/Top";
import appSection from "@/components/section/Content";
import appSectionPossible from "~/components/section/Possible";

import set_section_id from "~/library/set_section_id";
export default {
  data() {
    return {
      list_sections: [
        {
          title: "Формирование клиентской базы",
          subtitle: "используя следующие основные критерии отбора:",
          list: [
            "По местоположению компаний (ОКАТО)",
            "По виду деятельности компаний (ОКВЭД)",
            "По финансовым показателям компаний",
            "С телефонами и/или e-mail компаний",
            "По периоду регистрации компаний",
            "По организационно-правовой форме"
          ],
          src: "renderClientBase",
          method: "ltr"
        },
        {
          title: "Информация для менеджера",
          subtitle: "Все что нужно для звонка:",
          list: [
            "Актуальные контактные данные",
            "ФИО и должность руководителя",
            "Адрес компании",
            "Возможность выгрузки данных в вашу CRM-систему"
          ],
          src: "m_res_1",
          method: "rtl"
        }
      ],
      possible_section: {
        title: "ЛИК:Менеджер даёт вам возможность:",
        list: [
          "Полностью автоматизировать работу менеджеров по продажам, обеспечив менеджеров актуальными и полными данными для построения процесса продаж",
          "Максимально расширить клиентскую базу, увеличить объем продаж, максимально охватить Вашу целевую аудиторию",
          "Обратиться непосредственно к Лицу принимающему решения (ЛПР), повысив этим конверсию коммерческих предложений",
          "Опередить конкурентов, первыми сделав предложение по товарам и услугам недавно созданным компаниям"
        ],
        description:
          "ЛИК: МЕНЕДЖЕР содержит информацию о более чем 8,7 млн. индивидуальных предпринимателей и 8.2 млн. юридических лиц (из них 4,8 млн. - действующие юридические лица). В базе данных содержится более 4 млн. контактных данных (телефоны/e-mail/сайт). Данные об имеющихся и о вновь зарегистированных ИП и компаниях регулярно обновляются и актуализируются."
      },
      top_section: {
        titles: [
          {
            main:
              "ХОТИТЕ <span>ДОЗВАНИВАТЬСЯ</span> до новых организации <span>первым</span>?",
            sub: "ЛИК:МЕНЕДЖЕР предоставит ВАМ <span>контакты</span>",
            page: 0
          }
        ],
        info: [
          {
            list: [
              { text: "Построение списков по 30 параметрам" },
              { text: "Актуальные контактные данные" },
              { text: "Информация о финансовом состоянии клиента" },
              { text: "Информация о руководителях и соучредителях" }
            ],
            button: "Получить 100 контактов бесплатно",
            page: 0
          }
        ],
        image: [
          {
            src: "m_win_spis",
            page: 0
          }
        ],
        descriptions: [
          {
            text:
              "ЛИК:МЕНЕДЖЕР	– позволяет самостоятельно построить и выгрузить клиентские базы с актуальными контактными данными (адрес, телефон, факс, e-mail, сайт), регистрационными данными компаний и ИП, ФИО руководителей.",
            page: 0
          }
        ],
        button_group: [
          {
            list: [
              {
                text: "Скачать лик:менеджер для ос windows",
                icon: "mdi-microsoft-windows",
                href:
                  "https://1clicom.ru/soft/releases/lic_manager_win_2.2.5.zip",
                download: true
              },
              {
                text: "Руководство по установке и регистрации",
                icon: "mdi-file",
                href: "https://1clicom.ru/instruction/manual_LICmanager.pdf",
                download: true
              },
              {
                text: "Пример списка юридических лиц",
                icon: "mdi-file",
                modal: true
              },
              {
                text: "Скачать лик:менеджер для ос windows XP",
                icon: "mdi-microsoft-windows",
                href:
                  "https://1clicom.ru/soft/releases/lic_manager_win_2.2.5-XP.zip",
                download: true
              }
            ],
            page: 0
          }
        ]
      }
    };
  },
  components: {
    appSectionHeader,
    appSection,
    appTable,
    appSectionPossible
  },
  mounted() {
    set_section_id(this);
  }
};
</script>

<style scoped>
.section:first-child {
  padding-top: 100px;
}

.section {
  background: #fff;
  color: black;
}

.section:nth-child(odd) {
  background: rgb(131, 176, 185);
  color: white;
}
</style>