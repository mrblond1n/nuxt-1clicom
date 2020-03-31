<template>
  <v-content class="pa-0 content">
    <v-layout>
      <section class="section text-center">
        <v-container>
          <v-layout column>
            <h3 class="display-1">Вы можете преобрести</h3>
            <h4 class="headline">
              Программные продукты ЛИК для формирования баз данных клиентов с контактными
              данными, оценки налоговых и финансовых рисков и проверки контрагентов ЛИК:ЭКСПЕРТ,
              ЛИК:БИЗНЕС, ЛИК:КОНТРАГЕНТ, ЛИК:МЕНЕДЖЕР
            </h4>
            <v-layout class="my-3" column align-center>
              <h4 class="headline">У разработчика</h4>
              <ul class="body-1">
                <li>
                  позвонив по телефону:
                  <a
                    style="color: white"
                    href="tel:+78005004018"
                  >8(800)500-40-18</a> (звонок бесплатный)
                </li>

                <li>
                  по электронной почте:
                  <a
                    style="color: white"
                    href="mailto:inf@1clicom.ru"
                  >inf@1clicom.ru</a>
                </li>
              </ul>
            </v-layout>
            <v-layout class="my-3" column justify-center align-center>
              <h4 class="headline">На сайте магазина по продаже софта</h4>
              <a href="https://allsoft.ru/software/vendors/lik/" target="_blank">
                <v-img width="80" :src="require('@/static/images/shops/allsoft_shop.gif')" />
              </a>
            </v-layout>

            <h3 class="headline my-3">У региональных партнеров компании ЗАО "ЛИК</h3>
            <v-card>
              <v-card-title>
                Партнеры
                <v-spacer></v-spacer>
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Поиск"
                  single-line
                  hide-details
                ></v-text-field>
              </v-card-title>
              <v-data-table
                hide-default-header
                hide-default-footer
                :page.sync="page"
                :items-per-page="10"
                :headers="headers"
                class="elevation-6"
                :items="$store.state.shops.list"
                :search="search"
                @page-count="pageCount = $event"
              >
                <template v-slot:body="props">
                  <tbody>
                    <template v-for="(item, i) in props.items" class="item">
                      <tr :key="i" class="shop_row">
                        <td>
                          <div class="subtitle-2">{{item.region}}</div>
                        </td>
                        <td>
                          <v-layout>
                            <div v-for="(company, i) in item.list" :key="i">
                              <div class="subtitle-2 font-weight-bold">{{company.company_name}}</div>
                              <div class="caption">{{company.address}}</div>
                              <div class="caption">
                                Тел.:
                                <a
                                  v-for="(item, i) in phone_format(company.phone)"
                                  :key="i"
                                  :href="`tel:+${item.link}`"
                                >{{phone_format(company.phone).length > 1 && phone_format(company.phone).length !== i + 1? `${item.phone}, `: item.phone }}</a>
                              </div>
                              <div>
                                <b>E-mail:</b>
                                <a :href="`mailto:${company.mail}`">{{company.mail}}</a>
                              </div>
                              <div>
                                <b>Сайт:</b>
                                <a :href="`${company.site}`">{{company.site}}</a>
                              </div>
                            </div>
                          </v-layout>
                        </td>
                      </tr>
                    </template>
                  </tbody>
                </template>
              </v-data-table>
              <v-pagination v-model="page" :length="pageCount"></v-pagination>
            </v-card>
          </v-layout>
        </v-container>
      </section>
    </v-layout>
  </v-content>
</template>


<script>
export default {
  data() {
    return {
      search: "",
      page: 1,
      pageCount: 0,
      headers: [
        {
          sortable: false,
          value: "region"
        }
      ]
    };
  },
  computed: {
    shops_list() {
      return this.$store.getters.shops_list;
    }
  },
  methods: {
    phone_format(num) {
      const main_phone = num.split(",")[0];
      const phone_code = main_phone
        .split("")
        .splice(main_phone.indexOf("(") + 1, main_phone.indexOf(")") - 2)
        .join("");

      const phones = num.split(",");
      let result = [];
      let result_phone;
      phones.forEach(phone => {
        if (phone.split("").indexOf(")") != -1) {
          result_phone = `+7${phone_code}${phone
            .split("")
            .splice(phone.split("").indexOf(")") + 1)
            .join("")
            .replace(/\D+/g, "")}`;
        } else {
          result_phone = `+7${phone_code}${phone.replace(/\D+/g, "")}`;
        }
        result.push({ link: result_phone, phone: phone.replace(" ", "") });
      });
      return result;
    }
  }
};
</script>

<style scoped>
.shop_row td:last-child div {
  margin: 0 10px;
  text-align: left;
}
.section {
  background: #989797;
}
</style>