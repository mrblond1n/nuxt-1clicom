<template>
  <v-content class="pa-0 content">
    <v-layout column>
      <section class="section partner">
        <v-container>
          <v-layout wrap justify-space-around>
            <div v-for="(column, i) in section" :key="i" style="width: 500px" class="my-5">
              <v-layout column align-center style="height: 100%">
                <v-layout column class="mb-5">
                  <h3 class="display-1">{{column.title}}</h3>
                  <h4 class="headline">{{column.subtitle}}</h4>
                </v-layout>
                <ul class="text-left my-5">
                  <li class="list__item" v-for="(item, i) in column.list" :key="i" v-html="item"></li>
                </ul>
                <v-layout column align-center justify-end>
                  <h4 class="headline" v-html="column.description_title"></h4>
                  <ul class="description__list my-5">
                    <li
                      class="caption"
                      v-for="(item, i) in column.description_list"
                      :key="i"
                    >{{item}}</li>
                  </ul>
                  <v-btn
                    color="indigo"
                    @click="show_modal(column.button_id, `Заявка ${column.button_text}`)"
                    dark
                  >{{column.button_text}}</v-btn>
                </v-layout>
              </v-layout>
            </div>
          </v-layout>
        </v-container>
      </section>
      <app-contacts-section class="section partner" />
    </v-layout>
  </v-content>
</template>

<script>
import appContactsSection from "~/components/Auth_partner/Contacts";
import { mapState, mapActions } from "vuex";

import set_section_id from "~/library/set_section_id";
export default {
  head: {
    title: "Партнеры"
  },
  components: {
    appContactsSection
  },

  data() {
    return {
      section: [
        {
          title: "Агентская схема работы",
          subtitle: "для Физ. Лиц и ИП",
          list: [
            "Прибыль с каждого проданного вами сервиса – 50%",
            "Прибыль с каждого последующего продления вашего клиента – 50%",
            "Вы получите скидку 50% на приобретение NFR-версий сервисов ЛИК (ЛИК:ЭКСПЕРТ / ЛИК:БИЗНЕС – 22 000 руб.)",
            "Мы проведем для Вас обучение работе с сервисами",
            "Мы обеспечим техническую и информационную поддержку",
            "Вы получите возможность участия в партнерских акциях"
          ],
          description_title:
            "Вам нужно подписать с нами <a target='_blank' href='http://licweb.ru/1clicom/files/agent.docx'>Агентский договор</a>",
          description_list: [
            "Вы выставляете счет клиенту",
            "Вы получаете оплату от клиента",
            "Вы перечисляете нам 50% от суммы оплаченной клиентом"
          ],
          button_text: "cтать агентом",
          button_id: "p1_1"
        },
        {
          title: "Партнерская схема работы",
          subtitle: "для Юр. Лиц и ИП",
          list: [
            "Прибыль с каждого проданного вами сервиса – 50%",
            "Прибыль с каждого последующего продления вашего клиента – 50%",
            "Вы получите скидку 50% на приобретение NFR-версий сервисов ЛИК (ЛИК:ЭКСПЕРТ / ЛИК:БИЗНЕС – 22 000 руб.)",
            "Мы проведем для Вас обучение работе с сервисами",
            "Мы обеспечим техническую и информационную поддержку",
            "Вы получите возможность участия в партнерских акциях",
            "Размещение контактов вашей компании в разделе «Где купить» на сайте <a href='#' class='to_shops'>1clicom.ru</a>"
          ],
          description_title:
            "Вам нужно подписать с нами <a target='_blank' href='http://licweb.ru/1clicom/files/partner.docx'>Партнерский договор</a> и разместить информацию на своем сайте о сервисах ЛИК",
          description_list: [
            "Мы выставим счет Вашему клиенту",
            "Мы перечислим Вам 40% при оплате на карту или 50% при оплате по счету от суммы оплаченной клиентом"
          ],
          button_text: "cтать партнером",
          button_id: "p1_2"
        }
      ]
    };
  },
  methods: {
    ...mapActions({ modal: "shared/show_modal" }),
    show_modal(id, txt, type) {
      this.modal({
        id: id,
        txt: txt,
        type: type
      });
    }
  },
  computed: {
    ...mapState(["user", "user_is_set"])
  },
  mounted() {
    set_section_id(this);
    document.querySelector(".to_shops").addEventListener("click", e => {
      e.preventDefault();
      this.$router.push("/shop_location");
    });
  }
};
</script>

<style scoped>
.description__list {
  border: 1px solid grey;
  border-radius: 5px;
}
section.partner {
  background: #fff;
  color: black;
}

.section.partner:nth-child(odd) {
  background: #c5cae9;
  color: black;
}
</style>
