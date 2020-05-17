<template>
  <v-content class="pa-0 content">
    <v-layout>
      <section class="section text-center">
        <v-container>
          <v-layout column>
            <h1 class="display-1">Вы можете преобрести</h1>
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
                :items="list"
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
  head: {
    title: "Точки продаж"
  },
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
      ],
      list: [
        {
          region: "Республика Башкортостан",
          list: [
            {
              company_name: "Головнин-Консалтинг",
              address: "Уфа, ул.Ленина, д.148, офис 204 ",
              phone: "8(347)229-33-77 ",
              mail: "1c@golovnin.ru",
              site: "http://golovnin.ru"
            }
          ]
        },
        {
          region: "Республика Бурятия",
          list: [
            {
              company_name: "ООО «1С-Форус»",
              address:
                "670045, г.Улан-Удэ, ул.Ботаническая, 37а, ТЦ РОШ-СТРОЙ, офис 12 ",
              phone: "8(3012)46-89-78 ",
              mail: "partner@forus.ru",
              site: "http://www.partner.forus.ru"
            }
          ]
        },
        {
          region: "Республика Алтай",
          list: [
            {
              company_name: "ООО «1С-Галэкс»",
              address: "Барнаул, ул.Деповская, д.7, офис А-111 ",
              phone: "8(3852)62-43-35, 36-59-52 ",
              mail: "1c@galex.ru",
              site: "http://www.1c-galex.ru"
            },
            {
              company_name: "ООО «Алтайтехсервис»",
              address: "Барнаул, ул.Молодежная, 62Б, офис 1 ",
              phone: "8(3852)62-36-36, 62-30-10 ",
              mail: "A567655@mail.ru",
              site: "http://www.kkm-altai.ru"
            }
          ]
        },
        {
          region: "Республика Карелия",
          list: [
            {
              company_name: "ООО «Сфера услуг»",
              address: "Петрозаводск, пр.Первомайский, д.1, оф.16 ",
              phone: "8(8142)70-00-90, 8(911)405-00-19 ",
              mail: "sferauslug-ptz@yandex.ru",
              site: "http://www.sferauslug-ptz.ru"
            },
            {
              company_name: "Неосистемы Северо-Запад ЛТД",
              address: "Петрозаводск, ул.Кирова, д.38 ",
              phone: "8(8142)672-120 ",
              mail: "os@neosystems.ru",
              site: "http://neosystems.ru"
            }
          ]
        },
        {
          region: "Республика Коми",
          list: [
            {
              company_name: 'ООО "Денвик"',
              address: "Сыктывкар, Сысольское шоссе д. 17/2 ",
              phone: "8(8212)22-97-76 ",
              mail: "info@denvic.ru",
              site: "www.denvic.ru"
            },
            {
              company_name: "ИП Яковлев Сергей Викторович (НОУ ДО ЦКГ)",
              address:
                'Усинск, ул.Ленина, д.19 (отдельный вход "Центр компьютерной грамоты") ',
              phone: "8(82144)28-345 ",
              mail: "ockg@mail.ru",
              site: ""
            },
            {
              company_name: 'ООО "Ажур"',
              address: "Сыктывкар, ул.Кирова, 28 ",
              phone: "8(8212)24-42-10, 24-11-74, 24-45-38 ",
              mail: "info@itskomi.ru",
              site: "http://itskomi.ru"
            },
            {
              company_name: 'ООО "Арев"',
              address: "Усинск, ул.Строителей, д.3а, кв.81 ",
              phone: "8(912)95-64246 ",
              mail: "arev_s@mail.ru",
              site: ""
            }
          ]
        },
        {
          region: "Республика Мордовия",
          list: [
            {
              company_name:
                "ИП Маскинсков Н.Е. (Центр компьютерной поддержки бухгалтеров)",
              address: "Саранск, ул.Коммунистическая, д.35 ",
              phone: "8(8342)47-40-29 (многоканальный) ",
              mail: "office@ckpb.ru",
              site: "http://www.ckpb.ru"
            },
            {
              company_name: 'МНПП "КВАРК"',
              address: "Саранск ",
              phone: "8(937)515-8144 ",
              mail: "kvark.1c@gmail.com",
              site: "www.kvark.org"
            }
          ]
        },
        {
          region: "Республика Саха (Якутия)",
          list: [
            {
              company_name: "ООО «Аксиома»",
              address: "Якутск, ул.Чиряева, д.1, офис 19 ",
              phone: "8(4112)47-65-00, 47-67-10 ",
              mail: "info@a-ykt.ru",
              site: "http://a-ykt.ru"
            }
          ]
        },
        {
          region: "Республика Татарстан (Татарстан)",
          list: [
            {
              company_name: 'ООО "Бизнес Информ Консалтинг"',
              address: "Набережные челны ",
              phone: "8(906)120-46-56 ",
              mail: "rafail.su@gmail.com",
              site: ""
            }
          ]
        },
        {
          region: "Удмуртская Республика",
          list: [
            {
              company_name: 'ООО "СПБ" (Скорая Помощь Бухгалтеру)',
              address: "Ижевск, ул. Лихвинцева, 48 ",
              phone: "8(3412)97-03-79 ",
              mail: "hotline@03buh.ru",
              site: "http://www.izh-buhhelp.ru"
            },
            {
              company_name: "ООО «Баланс-Сервис»",
              address: "Ижевск, ул.Коммунаров, 198 ",
              phone: "8(3412)655-655 ",
              mail: "pasv@balans-s.ru",
              site: "http://www.balans-s.ru"
            },
            {
              company_name: "ООО «Лоцман»",
              address: "Глазов, ул.Сибирская, д.20 ",
              phone: "8(34141)5-06-06, 3-04-02 ",
              mail: "ad@lotsman.glazov.net",
              site: "http://www.lotsman.biz"
            }
          ]
        },
        {
          region: "Республика Хакасия",
          list: [
            {
              company_name: "ООО «Бизнес Форум»",
              address: "Абакан, ул.Крылова 68А, оф.13Н ",
              phone: "8(3902)28-80-45, 26-04-48 ",
              mail: "abakan@bf19.ru",
              site: "snk@bf19.ru"
            },
            {
              company_name: "ООО «1С-Форус»",
              address: "Абакан, ул.Крылова, 68А, 4 этаж, офис 406 ",
              phone: "8(3902)29-75-61 ",
              mail: "partner@forus.ru",
              site: "http://www.partner.forus.ru"
            },
            {
              company_name: "ООО «Киасофт»",
              address: "Абакан, ул.Ивана Ярыгина, д.34 ",
              phone: "8(3902)26-40-26, 26-66-88 ",
              mail: "info@soft.ru",
              site: "http://www.kiasoft.ru"
            },
            {
              company_name: "ООО «РОСКОМ»",
              address: "Абакан, ул.Щетинкина, д.61 ",
              phone: "8(3902)297-821 ",
              mail: "gribanov.s.m@roscom.su",
              site: "http://roscom.su"
            },
            {
              company_name: "ООО «Адей»",
              address: "Абакан, ул.И.Ярыгина, 56-1 ",
              phone: "8(3902)22-53-02, 286-999, 26-59-02 ",
              mail: "adey@inbox.ru;",
              site: "adey@abakannet.ru"
            },
            {
              company_name: "ООО «Хакасия.ру»",
              address: "Абакан, ул.Вяткина, д.9 ",
              phone: "8(3902)30-61-19 ",
              mail: "sales@khakasia.ru",
              site: "http://www.khakasia.ru"
            },
            {
              company_name: "ООО «Собиз»",
              address: "Абакан, ул.Тараса Шевченко, 68 ",
              phone: "8(913)539-92-15 ",
              mail: "ka@sobiz24.ru",
              site: "http://www.sobiz24.ru"
            },
            {
              company_name: "ООО «Рарус-Софт»",
              address: "Абакан, ул.Чертыгашева, д.148, 3-ий этаж, оф.309 ",
              phone: "8(3902)26-30-75 ",
              mail: "partner-sib@rarus.ru",
              site: "http://rarus.ru"
            }
          ]
        },
        {
          region: "Чувашская Республика",
          list: [
            {
              company_name: "ГК Информ Стандарт",
              address: "Чебоксары, пр-т Мира, д.1 ",
              phone: "8(8352)242-535, 360-306 ",
              mail: "sales@informstandart.ru",
              site: "http://informstandart.ru"
            },
            {
              company_name: "ИП Шестакова Александра Юрьевна",
              address:
                "Республика Чувашия, г. Новочебоксарск, ул. 10 Пятилетки, д. 1, офис 26 ",
              phone: "8(960)300-53-87 ",
              mail: "bezopasnost2101@yandex.ru",
              site: "http://www.licexpert21.ru"
            },
            {
              company_name: 'ООО "СОФТ Трейд"',
              address: "Чебоксары, пр-т Мира, 9 - 218 ",
              phone: "8(8352)68-09-36 ",
              mail: "info@taxcom21.ru",
              site: "http://www.taxcom21.ru"
            },
            {
              company_name: "ООО «Гарант-лидер софт»",
              address: "Чебоксары, Московский пр-кт, д.17, стр.1 ",
              phone: "8(8352)43-95-25, 8(8352)43-95-03 ",
              mail: "adm@lidersoft21.ru",
              site: "http://www.lidersoft21.ru"
            }
          ]
        },
        {
          region: "Краснодарский край",
          list: [
            {
              company_name: 'ГК "Интерсофт"',
              address:
                'Краснодар, ул. Рашпилевская, 179/1 (БЦ "Гранд Плаза", 6 этаж) ',
              phone: "8(861)298-06-70 ",
              mail: "info@inter-soft.ru",
              site: "http://inter-soft.ru"
            },
            {
              company_name: 'ООО "А-Софт"',
              address: "Выселковский р-н, Выселки, пер.Коммунаров, д.4, оф.5 ",
              phone: "8(800)250-03-55, 8(86157)7-26-48, 8(86157)77-2-19 ",
              mail: "asoft@asoft-kuban.ru",
              site: "http://www.asoft-kuban.ru"
            },
            {
              company_name: 'ООО "Центр внедрений Амбер"',
              address: "Краснодар, ул.Восточно-Кругликовская, 67 ",
              phone: "8(861)243-55-79 ",
              mail: "rai-soft@yandex.ru",
              site: "http://rai-soft.ru"
            },
            {
              company_name: "ООО «Консоль-сопровождение»",
              address: "Краснодар, ул.Дзержинского, 38/1 ",
              phone: "8(861)224-02-22 ",
              mail: "consol@consol-1c.com",
              site: "http://www.consol-1c.com"
            },
            {
              company_name: "ООО «Инфо-Софт»",
              address: "Лабинск, ул.Константинова, д.72 ",
              phone: "8(861)693-32-72, 8(918)370-66-50 ",
              mail: "info@infosoft-23.ru",
              site: "http://www.infosoft-23.ru"
            },
            {
              company_name: "ООО «XXI Век-Технология»",
              address: "Сочи, ул.Победы, д.166В ",
              phone: "8(862)270-39-32 ",
              mail: "21vek@21vek-t.ru",
              site: "http://21век-технология.рф"
            },
            {
              company_name: "ИП Анашко Сергей Станиславович",
              address: "Краснодар, ул.Сормовская, д.185, кв.127 ",
              phone: "8(918)434-58-24 ",
              mail: "1c_fran@ssasoft.ru; 1s@ssasoft.ru; kpk60@mail.ru",
              site: "http://www.1s-ssasoft.ru"
            },
            {
              company_name: "ООО АйТи Центр",
              address: "Сочи, ул.Навагинская, д.7, эт.2, ТФ Зенит ",
              phone: "8(862)264-13-39, 264-81-65, 264-71-89 ",
              mail: "sales@it-sochi.ru",
              site: "http://www.it-sochi.ru"
            },
            {
              company_name: 'ООО "Рестарт"',
              address: "Туапсе, ул. Калараша, 48а ",
              phone: "8(86167)5-67-80, 8(86167)5-67-70, 8(86167)5-67-75 ",
              mail: "tuapse@bk.ru",
              site: "http://www.f-re.ru"
            },
            {
              company_name: 'ООО "Альта"',
              address: "Краснодар, ул.Рашпилевская, д.315/1 ",
              phone: "8(861)224-82-53 ",
              mail: "Alta23rus@gmail.com",
              site: ""
            }
          ]
        },
        {
          region: "Красноярский край",
          list: [
            {
              company_name: 'ООО "Альфа-Групп"',
              address: "Красноярск, ул.Высотная, д.2, стр.8, пом.02 ",
              phone: "8(391)205-15-04 ",
              mail: "ceo@alfa-link.ru",
              site: "http://alfa-link.ru"
            },
            {
              company_name: "ООО «1С-Форус»",
              address: "Красноярск, ул.Взлетная, 10, офис 8 ",
              phone: "8(391)204-0-124 ",
              mail: "partner@forus.ru",
              site: "http://www.partner.forus.ru"
            },
            {
              company_name: "ООО «Киасофт»",
              address: "Абакан, ул. Ивана Ярыгина, д.34 ",
              phone: "8(3902)26-40-26, 8(3902)26-66-88 ",
              mail: "mail@kiasoft.ru",
              site: "http://www.kiasoft.ru"
            },
            {
              company_name: "Алиас-К",
              address: "Красноярск, ул.Урицкого д.117, оф.215 ",
              phone: "8(391)227-79-96 ",
              mail: "zakaz@als-krsn.ru",
              site: "http://www.als-krsn.ru"
            },
            {
              company_name: 'ООО "Собиз"',
              address: "Красноярск, ул.Ленина, 221а, 3 этаж ",
              phone: "8(391)205-02-70 доб.101 ",
              mail: "info@sobiz24.ru",
              site: "http://www.sobiz24.ru"
            }
          ]
        },
        {
          region: "Приморский край",
          list: [
            {
              company_name: "ООО «1С-Форус»",
              address:
                "Владивосток, пр-т Красного Знамени, 59, 3-й этаж, офис 304 ",
              phone: "8(4232)302-874 ",
              mail: "partner@forus.ru",
              site: "http://www.partner.forus.ru"
            },
            {
              company_name: "ООО «Дальконсультант»",
              address: "Владивосток, ул.Нижнепортовая, д.1, оф.202 ",
              phone: "8(423)230-27-26 ",
              mail: "mail@dalconsult.ru",
              site: "http://dalconsult.ru"
            },
            {
              company_name: "ООО «ВЛ-Консалтинг»",
              address: "Владивосток, ул.2-ая Круговая 12, эт.1 ",
              phone: "8(423)2-620-640, 8(423)297-56-90 ",
              mail: "its@vl-k.su",
              site: "http://vl-k.su"
            }
          ]
        },
        {
          region: "Ставропольский край",
          list: [
            {
              company_name: 'ООО "Статус"',
              address: "г.Ставрополь, ул. Лермонтова, д.187 (3 этаж) ",
              phone: "8(8652)998-000 ",
              mail: "1c@status26.ru",
              site: "http://www.status26.ru"
            },
            {
              company_name: "Бизнес ИТ",
              address: "г.Ставрополь, ул. 1-ая Промышленная, д.3А ",
              phone: "8(8652)991-000, 566-811, 566-822, 566-833, 566-844 ",
              mail: "mail@biz_it.ru",
              site: "http://www.biz-it.ru"
            }
          ]
        },
        {
          region: "Хабаровский край",
          list: [
            {
              company_name: 'ООО "1С-Форус"',
              address: "680000, г.Хабаровск, ул.Калинина, 5А, офис 5 ",
              phone: "8(4212)21-54-54 ",
              mail: "partner@forus.ru",
              site: "http://www.partner.forus.ru"
            },
            {
              company_name: 'ООО "Инфолайн Консалтинг"',
              address: "Хабаровск, ул.Ким Ю Чена, 44-И, 2-й этаж ",
              phone: "8(4212) 47-03-92, 47-03-93 ",
              mail: "info@info-line.ru",
              site: "www.info-line.ru"
            },
            {
              company_name: 'ООО "Софт-Сервис Амур"',
              address: "Хабаровск, ул.Муравьева-Амурского, д.4, оф.19 ",
              phone: "8(4212)799-699 ",
              mail: "sales@dvsoft.ru",
              site: "http://www.dvsoft.ru"
            }
          ]
        },
        {
          region: "Белгородская область",
          list: [
            {
              company_name: 'ООО "Софт-Юнион"',
              address: "Белгород, ул.Королева, д. 2а, офис 520 ",
              phone: "8(4722)520-911 ",
              mail: "1C@softunion.ru",
              site: "www.softunion.ru"
            },
            {
              company_name: 'ООО "БЕЛАРТ"',
              address: "Грайворон, ул. Юбилейная, д.1 ",
              phone: "8 (47261) 4-44-45 ",
              mail: "79606277755@yandex.ru",
              site: "www.saas-soft.ru"
            }
          ]
        },
        {
          region: "Брянская область",
          list: [
            {
              company_name: 'ООО "Дейта-Сервис"',
              address: "Брянск, ул. Ульянова дом 76, офис 3 ",
              phone: "8(4832)590-425, 8(4832)729-513 ",
              mail: "info@ds1c.ru",
              site: "http://ds1c.ru"
            },
            {
              company_name: 'ООО "Бизнес Проект"',
              address: "Брянск, Проспект Московский, 86 ",
              phone: "8(4832)687-555 ",
              mail: "687555@inbox.ru",
              site: "http://687555.ru"
            }
          ]
        },
        {
          region: "Владимирская область",
          list: [
            {
              company_name: 'ООО "Бизнес Консалтинг"',
              address: "Владимир, ул. Ставровская, д. 3, пом.2. ",
              phone: "8(800)350-18-78, 8(903)134-23-82 ",
              mail: "burtseva_sa@asgroup.pro",
              site: "http://www.base.asgroup.pro"
            },
            {
              company_name: 'ООО "Смарт"',
              address: "Ковров, ул.Либерецкая, 4-42 ",
              phone: "8(49232)6-47-75 ",
              mail: "info@smart-k.ru",
              site: "http://www.smart-k.ru"
            }
          ]
        },
        {
          region: "Волгоградская область",
          list: [
            {
              company_name: 'ООО "Волгасофт-проект"',
              address: "Волгоград, ул. Баррикадная, 1/1 cтр. 7 ",
              phone: "8(8442)90-06-20 ",
              mail: "volgograd@volga-soft.ru",
              site: "http://www.volga-soft.ru"
            },
            {
              company_name: "Инженер-Центр",
              address: "Волжский, ул.Им.Генерала Карбышева, д.76, оф.824 ",
              phone: "8(8443)25-97-21 ",
              mail: "mail@ec-1c.ru",
              site: "http://ec-1c.ru"
            }
          ]
        },
        {
          region: "Вологодская область",
          list: [
            {
              company_name: 'ООО "ЦИТ "Компьютер-Аудит"',
              address: "Череповец, ул.М.Горького, д. 32, оф. 611 ",
              phone: "8(8202)30-20-19, 63-39-90 ",
              mail: "nfo@ka35.ru",
              site: "http://ka35.ru"
            },
            {
              company_name: 'ООО "ИЦ "Гарантия"',
              address: "Череповец, ул. Краснодонцев, д. 49 ",
              phone: "8-800-100-42-84, 8(8202)26-04-17 ",
              mail: "ontact@icgarantiya.com",
              site: "http://www.icgarantiya.com"
            },
            {
              company_name: 'ООО "БИЗНЕС КОНСАЛТИНГ"',
              address: "Вологда, ул.Мира, д.14 ",
              phone: "8(8172)79-50-01, 8(8172)79-50-02 ",
              mail: "bizconsalting@mail.ru",
              site: ""
            },
            {
              company_name: "Компания А-Элита",
              address: "Вологда, ул.Мальцева, 52, оф.306 ",
              phone: "8(8172)56-09-09, 8(921)833-60-34 ",
              mail: "aelita@aelita35.ru",
              site: "http://www.aelita35.ru"
            },
            {
              company_name: 'ООО "ЛОГАСОФТ"',
              address: "Вологда, ул.Гагарина, д.26, оф.101 ",
              phone: "8(8172)51-44-99 ",
              mail: "nfo@logasoft.ru",
              site: "http://www.logasoft.ru"
            }
          ]
        },
        {
          region: "Ивановская область",
          list: [
            {
              company_name: 'ООО "Альфасофт"',
              address: "Иваново, пр. Ф.Энгельса, д.94, оф.102 ",
              phone: "8(4932)20-18-17 ",
              mail: "ivalfa@mail.ru",
              site: "http://www.ivalfa.ru"
            },
            {
              company_name: 'ООО "Восточный экспресс"',
              address: "Иваново, ул. Палехская, д.10 ",
              phone: "8(4932) 41-01-21 ",
              mail: "welcome@oe-it.ru",
              site: "www.oe-it.ru"
            }
          ]
        },
        {
          region: "Иркутская область",
          list: [
            {
              company_name: 'ЗАО "СИБКОН" (Компания Партнер)',
              address: "Ангарск, 123 квартал, стр.3, оф.34 ",
              phone: "8(3951)52-20-99, 8(3951) 52-91-02 ",
              mail: "partner@svline.irmail.ru",
              site: "http://www.ini.ru"
            },
            {
              company_name: 'ООО НПФ "Форус"',
              address: "г.Иркутск, ул.Партизанская, 49, 4 этаж ",
              phone: "г.Иркутск, ул.Урицкого, 8, оф.410 ",
              mail: "sales@forus.ru",
              site: "http://www.forus.ru"
            },
            {
              company_name: '"Первый БИТ"',
              address: "Иркутск, ул. Декабрьских Событий, д. 125, офис 500 ",
              phone: "+7 (3952) 29-50-50 ",
              mail: "AOChernyakova@1cbit.ru",
              site: "http://www.1bit.ru"
            },
            {
              company_name: 'ООО "ПЛ-Групп"',
              address: "г.Иркутск, ул.Советская, д.176б, офис 606 ",
              phone: "8(3952)93-37-57 ",
              mail: "pl-group@bk.ru",
              site: "http://www.pl-irk.ru"
            },
            {
              company_name: 'ООО "Сэйфтек-Софт"',
              address: "г.Братск, ул.Мира, д.4, пом.1000 ",
              phone: "8(3953)419-988, 417-110 ",
              mail: "manager@safetek.ru",
              site: "http://www.safetek.ru"
            },
            {
              company_name: 'ООО "Бизнес Ай Ти"',
              address: "г.Братск, ул.Южная, д.20, офис 403 ",
              phone: "8(3953)25-78-02, 25-78-03, 25-78-04 ",
              mail: "vevseev@bit-1c.ru",
              site: "http://ит46.рф"
            },
            {
              company_name: 'ООО "Стелс"',
              address: "г.Слюдянка, ул.Пролетарская, д.15 ",
              phone: "8(3952)683-852, 8(914)873-35-77 ",
              mail: "slud-stels@mail.ru",
              site: ""
            },
            {
              company_name: 'ООО "ИТБ СОФТ"',
              address: "Иркутск, ул.Декабрьских Событий 100А, офис 216 ",
              phone: "8(3952)722-227 ",
              mail: "itb@irk.ru",
              site: "http://oooitb.ru"
            },
            {
              company_name: 'ООО "Лаборатория С"',
              address: "Иркутск, ул.Урицкого, д.8, оф.309 ",
              phone: "8(3952)211-212 ",
              mail: "info@211212.ru",
              site: "http://www.211212.ru"
            }
          ]
        },
        {
          region: "Калининградская область",
          list: [
            {
              company_name: 'ООО "Софт"',
              address: "Калининград, Московский проспект, 40, офис 621 ",
              phone: "8(4012)99-91-00 ",
              mail: "info@robotx.ru",
              site: "http://www.robotx.ru"
            }
          ]
        },
        {
          region: "Калужская область",
          list: [
            {
              company_name: "Фирма КАМИН",
              address: "Калуга, пер.Теренинский, 6а ",
              phone: "8(4842)53-10-22 ",
              mail: "kamin@kaluga.ru",
              site: "http://www.kaminsoft.ru"
            },
            {
              company_name: 'ООО "Центр Автоматизации"',
              address: "Обнинск, пл.Треугольная, д.1, оф.10 ",
              phone: "8(48439)6-55-55 ",
              mail: "ca@65555.ru",
              site: "http://www.65555.ru"
            },
            {
              company_name: 'ООО "Компания "Современные технологии"',
              address: "Обнинск, ул.Шацкого, д.14, оф.204 ",
              phone: "8(48439)57-5-57, 6-51-51 ",
              mail: "kodeks@obninsk.com",
              site: "http://www.ст-обнинск.рф/"
            }
          ]
        },
        {
          region: "Кемеровская область",
          list: [
            {
              company_name: "Первый Бит",
              address: "Кемерово, ул. Шестакова, 6а, оф. 417 ",
              phone: "8(3842)45-22-45 ",
              mail: "kemerovo@1cbit.ru",
              site: "http://www.1cbit.ru"
            },
            {
              company_name: 'Внедренческий центр "ИстЛайн"',
              address: "Кемерово, пр. Октябрьский, д. 38 ",
              phone: "8(3842)900-084 ",
              mail: "http://www.istline.net",
              site: ""
            },
            {
              company_name: "ООО «1С-Форус»",
              address: "Новокузнецк, пр.Курбатова, 1А, офис 32 ",
              phone: "8(3843)70-16-19 ",
              mail: "partner@forus.ru",
              site: "http://www.partner.forus.ru"
            },
            {
              company_name: '"ОАЗИС-СОФТ"',
              address: "Кемерово ",
              phone: "8(3842)49-24-89 ",
              mail: "info@oasis-erp.com",
              site: "www.oasis-erp.com"
            },
            {
              company_name: "ИП Кузовой А.А. (1С: Франчайзинг: IT-решения)",
              address: "Белово, ул.Тельмана, д.1 ",
              phone: "8(906)922-21-89, 8(3842)63-04-96 ",
              mail: "kaa_1c@comphelpik.ru",
              site: "http://www.comphelpik.ru"
            },
            {
              company_name: 'ООО "АйТи-Сервис"',
              address: "Новокузнецк, пр.Строителей, 56, оф.501 ",
              phone: "8(3843)60-90-83, 60-90-84 ",
              mail: "info@serve-it.ru",
              site: "http://айти-сервис.рф"
            }
          ]
        },
        {
          region: "Кировская область",
          list: [
            {
              company_name: 'Группа компаний "МастерСофт"',
              address: "Киров, ул.Маклина, 40 ",
              phone: "8(8332)22-22-44 (многоканальный) ",
              mail: "22-22-44@mail.ru;",
              site: "494938@mail.ru"
            },
            {
              company_name: 'ООО "РосБизнесСофт"',
              address: "Киров, ул. Красина, 5 корпус 3 ",
              phone: "8(8332)54-48-99, 8(8332)57-96-30 ",
              mail: "rbs@rbs-it.ru",
              site: "http://rbs-it.ru"
            }
          ]
        },
        {
          region: "Курганская область",
          list: [
            {
              company_name: 'ООО "СОФТ"',
              address: "Курган, ул. С. Васильева, д. 30, оф.1 ",
              phone: "+7 (3522) 54-45-45 ",
              mail: "soft@cons45.ru",
              site: "www.consultant45.ru"
            },
            {
              company_name: 'ООО "Модуль"',
              address: "Курган, ул.Гоголя д.153, оф.120 ",
              phone: "+7 (3522) 63-40-61 ",
              mail: "info@abc45.ru",
              site: "www.abc45.ru"
            }
          ]
        },
        {
          region: "Московская область",
          list: [
            {
              company_name: 'ВЦ "АЛЬТ-СОФТ"',
              address: "Подольск, ул. Советская, д. 41/5 ",
              phone: "8(4967)565-100 ",
              mail: "sale@alt-soft.ru",
              site: "http://alt-soft.ru"
            },
            {
              company_name: "ООО «ИТС Консультант»",
              address: "Жуковский, ул. Театральная, д.10, офис А326 ",
              phone: "Раменское, Фабричный проезд, д. 7 ",
              mail: "info@itsconsultant.ru",
              site: "http://www.itsconsultant.ru"
            },
            {
              company_name: "ЗАО «Коломна-Связь ТВ»",
              address: "ЗАО «Коломна-Связь ТВ» ",
              phone: "Коломна, ул.Гагарина, д.70 ",
              mail: "1c-asu@mail.ru",
              site: "http://www.garantia.tv"
            },
            {
              company_name: "ООО «Альфа-Сервис Экспресс»",
              address: "Серпухов, ул.Красноармейская, д.35/60 ",
              phone: "8(4967)35-27-74 ",
              mail: "sale@alpha-s.ru",
              site: "http://www.alpha-s.ru"
            },
            {
              company_name: "ООО «Информационные технологии»",
              address: "Жуковский, ул.Чкалова, д.37 ",
              phone: "8(498)484-77-76 ",
              mail: "info@1c.da.ru",
              site: "http://1c.da.ru"
            },
            {
              company_name: "Компания «Электронные системы»",
              address: "Егорьевск, ул.Александра Невского, д.4 ",
              phone: "8(49640)66-9-93 ",
              mail: "info@electron-system.ru",
              site: "http://electron-system.ru"
            },
            {
              company_name: 'ООО "Альянс"',
              address: "рп.Шаховская, ул. 1-ая Советская, д.44 ",
              phone: "8(49637)23-1-33, 8(916)196-50-84 ",
              mail: "info@alians-shah.ru",
              site: "http://www.alians-shah.ru"
            },
            {
              company_name: 'ООО "КАП"',
              address: "Пушкино, Пушкинское шоссе, 3-82 ",
              phone: "8(916)153-03-05, 8(496)535-82-68 ",
              mail: "comkap@ya.ru",
              site: "http://comkap.narod.ru"
            },
            {
              company_name: "НАВИГАТОР 1С:Франчайзи Домодедово",
              address: "Домодедово, Каширское ш., д.7А, офис 304 ",
              phone: "8(495)507-23-00, 8(496)793-21-96 ",
              mail: "5072300@mail.ru",
              site: "http://www.nvic.ru"
            },
            {
              company_name: 'Центр компьютерной поддержки "Виком"',
              address: "Видное, ул.Ольховая, д.4 ",
              phone: "8(495)943-49-24, 943-49-25 ",
              mail: "info@vikom.su",
              site: "http://www.vikom.su"
            }
          ]
        },
        {
          region: "Мурманская область",
          list: [
            {
              company_name: 'Группа компаний "Корунд"',
              address: "Мурманск, ул.Тарана, д.10 ",
              phone: "8(8152)442-442 ",
              mail: "info@korund-s.ru",
              site: "http://www.korund-s.ru"
            },
            {
              company_name: 'Группа компаний "Центр Бухгалтерии и Бизнеса"',
              address: "Мурманск, пр.Кирова, 17, офис 41 ",
              phone: "тел 8(8152)23-44-07, 23-05-65 ",
              mail: "corp@cbib.ru;",
              site: "zakaz@cbib.ru"
            },
            {
              company_name: 'ООО "КолаБизнесКонсалтинг"',
              address: "Мурманск, ул.Карла Либкнехта, д.27А, оф.208 ",
              phone: "8(8152)40-02-90 ",
              mail: "info@colabc.ru",
              site: "http://www.kolabc.ru"
            },
            {
              company_name: 'ООО "КОЛА ДИГЕСТА"',
              address: "Апатиты, ул.Космонавтов, д.17 ",
              phone: "8(81555)6-29-91 ",
              mail: "leb@koladigesta.ru",
              site: "http://www.koladigesta.ru"
            }
          ]
        },
        {
          region: "Нижегородская область",
          list: [
            {
              company_name: 'ООО "БИТ Бизнес Решение"',
              address:
                "Нижний Новгород, пл. Революции, ул. Литвинова, 74к31, офис 32 ",
              phone: "8(831) 435-88-88 ",
              mail: "nn@1cbit.ru",
              site: "www.1cbit.ru"
            },
            {
              company_name: 'ООО "Профессионал"',
              address:
                'Арзамас, ул. К. Маркса, д. 61, БЦ "Сити Парк" офис 409 ',
              phone: "8(831)479-56-56 ",
              mail: "info@bo52.ru",
              site: "www.bo52.ru"
            },
            {
              company_name: 'ООО Центр Информационных Технологий "Селекта"',
              address: "Нижний Новгород, Московское шоссе, д. 105 ",
              phone: "8 (831) 282-99-01 ",
              mail: "zakaz@selecta-nn.ru",
              site: "www.selecta-nn.ru"
            },
            {
              company_name: 'ООО "Профессионал"',
              address:
                'Арзамас, ул. К. Маркса, д. 61, БЦ "Сити Парк", офис 409 ',
              phone: "8(83147)7-62-18 ",
              mail: "ghostya@list.ru",
              site: ""
            },
            {
              company_name: "ООО ЛАД-Софт",
              address: "Нижний Новгород, ул.Белинского, д.36 ",
              phone: "8(831)439-77-39 ",
              mail: "SosnihinaDV@ladnn.ru",
              site: "http://www.ladnn.ru"
            },
            {
              company_name: "1С:Апрель-Софт",
              address: "Нижний Новгород, ул.Ульянова, д.7 ",
              phone: "8(831)202-15-15 ",
              mail: "aprsoft@aprilnn.ru",
              site: "http://www.aprsoft.ru"
            }
          ]
        },
        {
          region: "Новгородская область",
          list: [
            {
              company_name: 'ООО "СОФТ-СЕРВИС"',
              address: "Великий Новгород, ул.Псковская, д.18 ",
              phone: "e-mail: ",
              mail: "1C@soft.natm.ru",
              site: "www.soft.natm.ru"
            },
            {
              company_name: 'ООО "Платан-Консалтинг"',
              address:
                "Великий Новгород, ул.Большая Санкт-Петербургская, д.80 ",
              phone: "e-mail: ",
              mail: "1c@platan-vn.ru",
              site: "http://platansoft.ru"
            }
          ]
        },
        {
          region: "Новосибирская область",
          list: [
            {
              company_name: 'ООО Внедренческий Центр "ИнфоСофт"',
              address: "Новосибирск, ул. Крылова 31, офис 58 ",
              phone: "8(383)211-27-27 ",
              mail: "info@softnsk.ru",
              site: "http://www.is1c.ru"
            },
            {
              company_name: 'ООО "Альфа-Софт"',
              address: "Новосибирск, ул.Красина 43, оф.408 ",
              phone: "8(383)200-36-08 ",
              mail: "info@1calfa.ru",
              site: "http://www.1calfa.ru"
            },
            {
              company_name: 'ООО "ТеСла" (Бизнес Ассистент)',
              address: "Новосибирск, Красный проспект, 14 офис 608 ",
              phone: "8 (800) 250-97-73, 8 (383) 310-98-05 ",
              mail: "info@bizassis.ru",
              site: "http://bizassis.ru"
            },
            {
              company_name: 'ООО "1С-Форус"',
              address:
                "630087, г.Новосибирск, пр-т Карла Маркса, 26/4, офис 107 ",
              phone: "8(383)325-39-32 ",
              mail: "partner@forus.ru",
              site: "http://www.partner.forus.ru"
            },
            {
              company_name: 'ООО "Информационные технологии управления"',
              address: "Новосибирск, Красный пр-т, д. 79, оф. 304 ",
              phone: "8(383)381-30-16 ",
              mail: "info@it-om.ru",
              site: "www.it-om.ru"
            }
          ]
        },
        {
          region: "Омская область",
          list: [
            {
              company_name: "ООО «1С-Форус»",
              address: "644024, г.Омск, ул.Декабристов, 45, офис 426 ",
              phone: "8(3812)58-08-33 ",
              mail: "partner@forus.ru",
              site: "http://www.partner.forus.ru"
            }
          ]
        },
        {
          region: "Оренбургская область",
          list: [
            {
              company_name:
                "1С:Франчайзинг. Бухгалтерский отдел (ИП Иванников Андрей Владимирович)",
              address: "Гай, ул.Ленина, д.43 ",
              phone: "8(35362)50-0-09 ",
              mail: "service.1c@live.ru",
              site: ""
            },
            {
              company_name: 'ООО "Рарус-Софт"',
              address: "Оренбург, ул.Монтажников, д.23, 3-ий этаж ",
              phone: "8(3532)30-57-50, 21-66-98 ",
              mail: "partner.orn@rarus.ru",
              site: "http://rarus.ru"
            },
            {
              company_name: 'ООО "РЕБИС"',
              address: "Оренбург, ул.Володарского, д.5 ",
              phone: "8(3532)30-33-33 ",
              mail: "info@303333.ru",
              site: "http://www.303333.ru"
            }
          ]
        },
        {
          region: "Пензенская область",
          list: [
            {
              company_name: 'ООО "Содружество"',
              address: "Пензенская обл, г. Заречный, ул. Промышленная, 25 ",
              phone: "(8412)78-85-85, 65-53-55 ",
              mail: "info@zato1c.ru",
              site: "http://zato1c.ru"
            }
          ]
        },
        {
          region: "Пермский край",
          list: [
            {
              company_name: 'ООО "ЮВИС-Сервис"',
              address: "Пермь, ул. Куйбышева, д. 118, оф. 303 ",
              phone: "8(342)240-99-90 ",
              mail: "astral@uvis.su",
              site: "http://www.uvis.su"
            },
            {
              company_name: 'ООО "Базис-С"',
              address: "Лысьва, ул.Коммунаров, 24, 3-ий этаж, оф.14 ",
              phone: "тел./факс: 8(34249)555-81, 8(34249)244-82 ",
              mail: "baziss@yandex.ru",
              site: "http://базисс.рф"
            },
            {
              company_name: 'ООО "Кама-Софт"',
              address:
                "Пермь, ул. Шоссе Космонавтов, 111, корпус 27, офис 204 ",
              phone: "8(342)246-28-84 ",
              mail: "kamasoft@kamasoft.ru",
              site: "http://www.kama-soft.ru"
            },
            {
              company_name: 'ООО "ПК-Сервис"',
              address: "Пермь, ул. Куйбышева, 2, оф. 315 ",
              phone: "8(342)254-55-09, 204-44-60 ",
              mail: "office@pks59.ru",
              site: "www.pks59.ru"
            },
            {
              company_name: 'ООО "Бухгалтерское бюро "СВ"',
              address: "Пермь, ул.Екатерининская, 76 ",
              phone: "8(342)203-20-23, 203-20-24 ",
              mail: "buhburosv@yandex.ru",
              site: "http://www.buhburo-sv.ru"
            },
            {
              company_name: 'Группа компаний "Автоматизация учета"',
              address: "Пермь, ул.Чайковского, 19 ",
              phone: "8(342)207-49-05, 207-49-04 ",
              mail: "auperm@auperm.ru",
              site: "http://www.auperm.ru"
            }
          ]
        },
        {
          region: "Ростовская область",
          list: [
            {
              company_name: 'ООО "Партнер Сервис Интеллект"',
              address: "Ростов-на-Дону, пр-кт М. Нагибина 14а, офис 57 ",
              phone: "8(863) 275-16-03 ",
              mail: "intellps@aaanet.ru",
              site: "http://psi-rostov.ru"
            },
            {
              company_name: "ООО «Оптимум»",
              address: "Ростов-на-Дону, пер. Крепостной, д.133, оф.44 ",
              phone: "8(863)307-53-22, 307-53-23, 8(918)502-51-66 ",
              mail: "fevralev@opteamum.ru",
              site: "sale@opteamum.ru"
            },
            {
              company_name: "ООО «Селеста»",
              address: "Ростов-на-Дону, ул.Филимоновская, д.83, к.1 ",
              phone: "8(863)210-14-85 (многоканальный) ",
              mail: "sale@selesta.ru",
              site: "http://www.selesta.ru"
            },
            {
              company_name: "ООО «Фабрика программ»",
              address: "Волгодонск, ул.Маршала Кошевого, 13-6 ",
              phone: "8(8639)233-003 ",
              mail: "dir@fabrprog.ru",
              site: "http://www.fabrprog.ru"
            },
            {
              company_name: "ООО «ПАРТНЕРСТВО»",
              address: "Ростов-на-Дону, пр-кт Михаила Нагибина, д.14Б, оф.71А ",
              phone: "8(863)230-09-89, 8(863)230-09-91 ",
              mail: "partners@aaanet.ru",
              site: "http://partnersgroup.ru"
            },
            {
              company_name:
                "ООО «Лаборатория вычислительных систем и комплексов»",
              address: "Новочеркасск, пр-кт Ермака, д.106, кв.217 ",
              phone: "8(8635)22-59-36, 8(928)181-01-25 ",
              mail: "lvsk@bk.ru",
              site: ""
            },
            {
              company_name: 'ООО "Компания "Союз"',
              address: "Ростов-на-Дону, ул.Московская, д.71, оф.16 ",
              phone: "8(863)282-23-56, 240-34-38 ",
              mail: "info@union-soft.ru",
              site: "http://покупка1с.рф/"
            }
          ]
        },
        {
          region: "Самарская область",
          list: [
            {
              company_name: "ООО «Ризотек»",
              address: "Самара, ул.Куйбышева, 108 ",
              phone: "8(846)310-27-64, 8(846)310-27-65 ",
              mail: "sales@risotec.ru",
              site: "http://www.risotec.ru"
            },
            {
              company_name: 'ООО "Тольятти-Софт"',
              address: 'Тольятти, ул. Новый проезд, 8, ДЦ "Эл-банк", оф. 317 ',
              phone: "8(8482)955-999 ",
              mail: "tol_soft@mail.ru",
              site: "www.tolyatisoft.ru"
            },
            {
              company_name: "ООО «ПромИнфоКонсалт»",
              address: "Самара, Московское шоссе 18 км, литер А ",
              phone: "8(846)200-77-00 ",
              mail: "info@prominfo.org",
              site: "http://www.prominfo.org"
            },
            {
              company_name: "ИП Череповская Н.В. (ОВС-проф)",
              address: "Фактический адрес: Самара, ул. г.Димитрова, 62-44 ",
              phone:
                "Юридический и почтовый адрес: Кинельский р-н, с.Грачевка, ул.Пролетраская 8 ",
              mail: "bet@ovs-prof.ru",
              site: "http://www.ovs-prof.ru"
            }
          ]
        },
        {
          region: "Саратовская область",
          list: [
            {
              company_name: "ООО «Фалькон»",
              address: "Саратов, ул.Советская 90/96 ",
              phone: "8(8452)512486, 511768, 792646 ",
              mail: "info@falcon-saratov.ru",
              site: "http://falcon-saratov.ru"
            }
          ]
        },
        {
          region: "Свердловская область",
          list: [
            {
              company_name: "ООО «АСП-Центр дистрибьюции»",
              address:
                "Екатеринбург, ул.Щорса, д.7, Бизнес Центр «Парковый» 2 этаж ",
              phone: "8(343)222-16-01 ",
              mail: "1c@asp-1c.ru",
              site: "http://www.partners.asp-1c.ru"
            },
            {
              company_name: "Альянс Софт Консалтинг",
              address: "Екатеринбург, ул.Белинского, д.83, офис 601 ",
              phone: "8(800)500-31-21 (бесплатно по России) ",
              mail: "partner@asoft-ural.ru",
              site: "http://www.АльянсСофт.рф"
            },
            {
              company_name: 'ООО "Прайм Регион"',
              address:
                "Екатеринбург, Университетский пер. д.11, Литер А, пом.12 ",
              phone: "8(343)222-0-345 ",
              mail: "dyao@1c-prime.ru",
              site: "http://www.1c-prime.ru"
            },
            {
              company_name: 'ООО "Технологии автоматизации"',
              address: 'Екатеринбург, ул.Радищева, 6а, "Суворов", оф.304 ',
              phone: "8(343)382-1-381, 227-02-20 ",
              mail: "1c@ta-ural.ru",
              site: "http://www.ta-ural.ru"
            },
            {
              company_name: 'ООО "Сервис-Центр"',
              address: "Екатеринбург, проспект Ленина, 69, корп.8, к.348 ",
              phone: "8(343)350-00-52, 358-93-88, 358-93-87, 8(912)635-93-66 ",
              mail: "sc@sky.ru",
              site: "http://buhitg.ru"
            }
          ]
        },
        {
          region: "Смоленская область",
          list: [
            {
              company_name: '1С:Франчайзи "Точный учет"',
              address: "Смоленск, Ново-Рославльская, 13 ",
              phone: "8(4812)302-502 ",
              mail: "1c@1c-tu.ru",
              site: "http://1c-tu.ru"
            },
            {
              company_name: '"Простые решения"',
              address: "Смоленск, ул. Большая Краснофлотская, д. 34 ",
              phone: "8(4812)302-606 ",
              mail: "info@1eska.ru",
              site: "www.1eska.ru"
            },
            {
              company_name: '"Легасофт"',
              address: "Смоленск, ул.Крупской, д.30А, оф.139 ",
              phone: "8(4812)70-01-02 ",
              mail: "info@legasoft.ru",
              site: "http://www.legasoft.ru"
            },
            {
              company_name:
                "ООО «Спектр Ай-Ти» (Спектр информационных технологий)",
              address: "Десногорск, 2-ой микрорайон, д.12 ",
              phone: "8(915)648-30-17, 8(48153)30052 ",
              mail: "spektr1s@yandex.ru",
              site: "http://1spkt.ru"
            },
            {
              company_name: "Смоленск, ул.Рыленкова, д.32, кв.44",
              address: "тел.: 8(920)660-73-03 ",
              phone: "e-mail: ",
              mail: "fap_27@rambler.ru",
              site: ""
            }
          ]
        },
        {
          region: "Тамбовская область",
          list: [
            {
              company_name: 'ПК "Компьютер"',
              address: "Тамбов, ул. Кавалерийская, д. 7а, этаж 2, офис 210. ",
              phone: "(4752) 70-30-30, 70-30-20 ",
              mail: "info@pk-computer.ru",
              site: "http://pk-computer.ru"
            }
          ]
        },
        {
          region: "Тверская область",
          list: [
            {
              company_name: 'ООО "Боцман"',
              address: "Тверь, ул. Дмитрия Донского, 35А, оф.514 ",
              phone: "8(4822)42-17-01 ",
              mail: "info@boatswain.ru",
              site: "http://1cbo.boatswain.ru"
            },
            {
              company_name: 'ООО "Инновационные технологии"',
              address: "Тверь, пр-т Чайковского, д.9, офис 507 (5 этаж) ",
              phone: "8(4822)63-10-34 ",
              mail: "1c@it-its.ru",
              site: "http://it-its.ru"
            }
          ]
        },
        {
          region: "Томская область",
          list: [
            {
              company_name: "ООО «1С-Форус»",
              address: "634061, г.Томск, пл.Батенькова, 2, офис 201 ",
              phone: "8(3822)71-09-89 ",
              mail: "partner@forus.ru",
              site: "http://www.partner.forus.ru"
            }
          ]
        },
        {
          region: "Тюменская область",
          list: [
            {
              company_name: "ООО «1С-Форус»",
              address: "Тюмень, ул.Герцена, 72, офис 414 ",
              phone: "8(3452)64-61-13 ",
              mail: "partner@forus.ru",
              site: "http://partner.forus.ru"
            },
            {
              company_name: 'ООО "Центр управления бизнесом"',
              address:
                "Тюменская обл., г. Сургут, ул. 30 лет Победы, д.19, оф.303 ",
              phone: "8(3462)33-50-50 ",
              mail: "ooo_cub@mail.ru",
              site: "www.cub86.ru"
            },
            {
              company_name: "ООО «ДИО-Консалт»",
              address: "Тюмень, ул. Малыгина, д.58А ",
              phone: "8(3452)50-06-90 ",
              mail: "market@diocon.ru",
              site: "http://www.diocon.ru"
            },
            {
              company_name: "ООО «БИТ Ключевой элемент»",
              address: "Тюмень, ул. Республики, 61, оф.702 ",
              phone: "8(3452)522-033, 522-032 ",
              mail: "tyumen@1cbit.ru",
              site: "http://tyumen.1cbit.ru"
            }
          ]
        },
        {
          region: "Ульяновская область",
          list: [
            {
              company_name: 'ООО "ЭС ВЭ КУПЕРС"',
              address: "Ульяновск, ул. Западный бульвар, д. 27, офис 208 ",
              phone: "8(8422)73-57-50 ",
              mail: "office@svcoopers.ru",
              site: "http://svcoopers.ru"
            },
            {
              company_name: "ООО «Тайм-Софт»",
              address: "Ульяновск, ул.Радищева, д.30 ",
              phone: "8(8422)44-17-80, 99-78-85, 96-97-13, 30-50-31, 30-50-32 ",
              mail: "commerce@timesoft.ru",
              site: "http://www.timesoft.ru"
            }
          ]
        },
        {
          region: "Челябинская область",
          list: [
            {
              company_name: "Внедренческий центр Ярошенко",
              address: "Миасс, ул.Романенко, 97 ",
              phone: "8(3513)57-01-06, 57-05-15 ",
              mail: "1c@1c.miass.ru",
              site: "http://вц-ярошенко.рф"
            },
            {
              company_name: "СофтКонсалт",
              address: "Челябинск, ул. Российская, 281, оф.306 ",
              phone: "8(351)260-44-42 ",
              mail: "www.softk.pro",
              site: ""
            },
            {
              company_name: 'ООО "Лаборатория управленческих решений"',
              address: "Челябинск, ул. Стартовая, д. 15, корп. А, офис 3 ",
              phone: "8 (351) 797-15-95 ",
              mail: "baa@1cab.ru",
              site: "www.1cab.ru"
            },
            {
              company_name: '"СОФТСЕРВИС"',
              address: "Челябинск, ул.Труда, д.91 ",
              phone: "8(351)771-88-11, 771-89-11 ",
              mail: "1c@softservis.ru",
              site: "http://www.softservis.ru"
            },
            {
              company_name: 'ООО "Компьютер в бизнесе"',
              address: "Челябинск, пр.Ленина, 81-619А ",
              phone: "8(351)231-04-66 ",
              mail: "info@kb-soft.ru",
              site: "http://www.kb-soft.ru"
            }
          ]
        },
        {
          region: "Забайкальский край",
          list: [
            {
              company_name: "ООО «1С-Форус»",
              address: "672038, г.Чита, ул.Тимирязева, 25, офис 2 ",
              phone: "8(3022)32-29-39 ",
              mail: "partner@forus.ru",
              site: "http://www.partner.forus.ru"
            },
            {
              company_name: 'Компания "БУХУЧЕТ и УПРАВЛЕНИЕ"',
              address:
                "672000, г.Чита, ул.Анохина, 91, БИЗНЕС-ЦЕНТР, корп.1, оф.307, Учебный центр - оф.308 ",
              phone: "8(3022)40-09-02, 8-914-141-7902, 8-914-512-2902 ",
              mail: "1c@chitabuh.ru",
              site: "http://www.chitabuh.ru"
            },
            {
              company_name: 'ГК "Аргунь Софт"',
              address:
                '674673, Краснокаменский район, г.Краснокаменск, пр-кт Строителей д.5 "Бизнес-Центр" 3-ий этаж ',
              phone: "8(30245)60888 ",
              mail: "info@argunsoft.ru",
              site: "http://argunsoft.ru"
            }
          ]
        },
        {
          region: "Город Москва",
          list: [
            {
              company_name: "Первый Бит",
              address: "Москва, ул. Воронцовская, д. 35 б, корп. 2, (3 этаж) ",
              phone: "8(495)748-07-77 ",
              mail: "1c@1cbit.ru",
              site: "http://www.1cbit.ru"
            },
            {
              company_name: 'ООО "Проекты автоматизации бизнеса"',
              address: "Москва, ул. Севанская, д. 15, корп. 1, пом. II ",
              phone: "8(495)532-32-47 ",
              mail: "info@ap-lab.ru",
              site: "http://www.ap-lab.ru"
            },
            {
              company_name: 'Компания "ВЕЛСИ"',
              address: "Москва, ул.Лестева, д.18 ",
              phone: "8(499)681-77-71, 8(800)50-50-257 ",
              mail: "info@wellsy.ru",
              site: "http://wellsy.ru"
            },
            {
              company_name: 'Первый Дом Консалтинга "Что делать Консалт"',
              address: "Москва, ул.Мишина, д.56 ",
              phone: "8(495)784-77-33 ",
              mail: "4dv@4dk.ru",
              site: "http://www.4dk-soft.ru"
            },
            {
              company_name: 'ООО "ЗУБР Текнолоджис"',
              address:
                "Москва, ул. Электродная, д. 2, стр. 13, подъезд 11, офис 306 (3-й этаж) ",
              phone: "8(495)989-42-10 ",
              mail: "sales@zubrt.ru",
              site: "http://www.zubrt.ru"
            },
            {
              company_name: "1С:ВДГБ",
              address:
                "Москва, Проезд Серебрякова, д.14, стр.16, 4 этаж, БЦ Сильвер Стоун ",
              phone: "8(495)223-32-11 ",
              mail: "www@vdgb.ru",
              site: "http://www.vdgb.ru"
            },
            {
              company_name: 'ООО "Бухгалтерский Центр"',
              address: "Москва, ул. Басовская, 16 ",
              phone: "8(495)789-93-12 ",
              mail: "doc@1-bc.ru",
              site: "http://1-bc.ru"
            },
            {
              company_name: 'ООО "СУАБ"',
              address: "Москва, ул. Большая почтовая, д. 36. стр. 9 ",
              phone: "8(495)648-63-11 ",
              mail: "mail@suab.ru",
              site: "www.suab.ru"
            },
            {
              company_name: "ИП Юрецкая Оксана Анатольевна",
              address: "Москва, Филевский б-р, д. 2-120 ",
              phone: "8(499)142-26-47 ",
              mail: "1c@ip-prof.ru",
              site: "http://ip-prof.ru"
            },
            {
              company_name: 'ООО "Автоматизация.Внедрение.Технологии."',
              address:
                "Москва, ул. Волгоградский проспект, д. 46Б, корп.1, офис 610 ",
              phone: "8(495)989-4567 ",
              mail: "avt@avt-1c.ru",
              site: "www.avt-1c.ru"
            },
            {
              company_name: "ИП Бурцева Светлана Александровна",
              address:
                "Москва, Рязанский проспект, д.24, корпус 1, помещение 24 ",
              phone: "e-mail: ",
              mail: "burtseva_sa@asgroup.pro",
              site: "http://www.base.asgroup.pro"
            },
            {
              company_name: 'ООО "Внедренческий центр Формула"',
              address: "Москва, ул. Воздвиженка, дом 10 ",
              phone: "8(800)250-40-46 ",
              mail: "office@vcformula.ru",
              site: "www.vcformula.ru"
            },
            {
              company_name: '"Аргос"',
              address: "Москва, Ленинский пр-т 168, оф. 220 ",
              phone: "8(812)610-5-610 доб.4, 8(495)640-88-98 ",
              mail: "butenko.s@argosgrp.ru",
              site: "http://1c.argos-nalog.ru"
            },
            {
              company_name: 'Группа Компаний "1С-АналитИКС"',
              address: 'Группа Компаний "1С-АналитИКС" ',
              phone: "Москва, ул.2-ая Хуторская, д.38А, стр.1, эт.3 ",
              mail: "Analit@analit.ru",
              site: "http://analit.ru"
            },
            {
              company_name: 'Компания "Инсорс"',
              address: "Москва, ул.Щербаковская, д.53 ",
              phone: "8(495)781-59-44 ",
              mail: "agusev@insource-it.ru",
              site: "http://www.insource-it.ru"
            },
            {
              company_name: 'ООО "Информационные нанотехнологии"',
              address: "Москва, ул.Трофимова, д.24, корп.2 ",
              phone: "8(495)677-38-40 ",
              mail: "zontikbuh@zontikbuh.ru",
              site: ""
            }
          ]
        },
        {
          region: "Город Санкт-Петербург",
          list: [
            {
              company_name: 'Первый Дом Консалтинга "Что делать Консалт" СПб',
              address: "Санкт-Петербург, ул.Миргородская, д.1 ",
              phone: "8(812)334-44-73 ",
              mail: "vap@spb.4dk.ru",
              site: "http://www.4dk-soft.ru"
            },
            {
              company_name: "Первый Бит",
              address: "Санкт-Петербург, ул. Бабушкина д. 36 А ",
              phone: "8(812)320-20-56 ",
              mail: "Fresh-spb@1cbit.ru",
              site: "http://www.1cbit.ru"
            },
            {
              company_name: 'ООО "УльтраЮнион"',
              address:
                "Санкт-Петербург, ул.Бумажная, д.9, к.1., лит.А, оф.516 ",
              phone: "8(812)777-09-90 ",
              mail: "erei@ultraunion.ru",
              site: "http://ultraunion.ru"
            },
            {
              company_name: 'ООО "АИГ КОНСАЛТ"',
              address:
                "Санкт-Петербург, ул. Фурштатская, д.35, лит. А, пом. 24Н ",
              phone: "e-mail: ",
              mail: "office@aiggroup.ru",
              site: "http://www.aiggroup.ru"
            },
            {
              company_name: 'Консалтинговая группа "АКСИОМА"',
              address:
                'Санкт-Петербург, ул.Мебельная, д.12, офис 145, БЦ "Авиатор" ',
              phone: "8(812)449-25-49 (многоканальный) ",
              mail: "info@aksioma-gk.ru",
              site: "http://www.aksioma-gk.ru"
            },
            {
              company_name: "ГК СофтБаланс",
              address: "Санкт-Петербург, Заневский пр., д.30, корп. 2 ",
              phone: "8(812)325-44-00 ",
              mail: "zakaz@softbalance.ru",
              site: "http://sb-vnedr.ru"
            },
            {
              company_name: "Амбер СПб",
              address: "Санкт-Петербург, ул.Правды, д.16 ",
              phone: "8(812)244-01-61 ",
              mail: "amber@amber.spb.ru",
              site: "http://www.amber.spb.ru"
            },
            {
              company_name: "АртАйТи группа компаний",
              address: "Санкт-Петербург, ул.Караванная, д.1 ",
              phone: "8(812)449-57-55 ",
              mail: "info@myartit.ru",
              site: "http://www.myartit.ru"
            },
            {
              company_name: 'ООО "АРГОС"',
              address: "Санкт-Петербург, Ленинский пр., д.168 ",
              phone: "8(812)610-5-610 ",
              mail: "1cmaster@argosgrp.ru",
              site: "http://1c.argos-nalog.ru"
            },
            {
              company_name: 'ООО "ЮКО"',
              address:
                "Юридический адрес: Санкт-Петербург, ул.Смоленская, д.9 ",
              phone:
                "Почтовый адрес: Санкт-Петербург, Предпортовый 4-й проезд, д.2 ",
              mail: "yuko@bk.ru",
              site: "http://www.yuko.net.ru"
            },
            {
              company_name: "Группа компаний Омега",
              address: "Санкт-Петербург, ул.Тележная, д.13, к.2 ",
              phone: "8(812)448-01-48 ",
              mail: "info@gkomega.ru",
              site: "http://www.gkomega.ru"
            },
            {
              company_name: 'ООО "Невасофт"',
              address: "Санкт-Петербург, ул.Седова, 13, оф.340 ",
              phone: "8(812)640-76-75 ",
              mail: "office@nevasoft.ru",
              site: "http://nevasoft.ru"
            },
            {
              company_name: "Компания АстроСофт",
              address:
                'Санкт-Петербург, пр.Б.Сампсониевский д.60А, БЦ "Телеком СПб" ',
              phone: "8(812)494-90-90 ",
              mail: "market@AstroSoft.ru",
              site: "http://www.astrosoft.ru"
            }
          ]
        },
        {
          region: "Ханты",
          list: [
            {
              company_name: '"NIKcons"',
              address: "Сургут, ул. Лермонтова 11/5, 310 ",
              phone: "8(3462)91-77-32 ",
              mail: "info@nikcons.ru",
              site: "www.nikcons.ru"
            }
          ]
        }
      ]
    };
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