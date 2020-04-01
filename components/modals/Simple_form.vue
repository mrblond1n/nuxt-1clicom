<template>
  <v-card>
    <v-card-title class="headline">{{modal_title}}</v-card-title>
    <template>
      <v-card-text>
        <v-form v-model="form_valid" ref="form">
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="company_name" dense label="Название компании"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="user_name"
                :rules="[rules.required, rules.counter]"
                dense
                label="Ваше имя"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="user_phone"
                :rules="[rules.required, rules.phone]"
                v-mask="user_phone_mask"
                dense
                label="Телефон"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="user_mail" :rules="[rules.mail]" dense label="Email"></v-text-field>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </template>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" text @click="close">Отмена</v-btn>
      <v-btn color="primary" @click="send">Отправить</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mask } from "vue-the-mask";
import get_rules from "~/library/rules_for_fields";
import clear_from_tag from "~/library/clear_text_field";

export default {
  directives: {
    mask,
    get_rules
  },
  data() {
    return {
      company_name: "",
      user_name: "",
      user_phone: "",
      user_mail: "",
      form_valid: true,
      form_title: "",
      user_phone_mask: "+7-(###)-###-##-##",
      rules: {}
      // rules: {
      //   mail: v =>
      //     (v ? /^\w+([/.-]?\w+)*@\w+([/.-]?\w+)*(.\w{2,3})+$/.test(v) : true) ||
      //     "Неправильно указан e-mail.",
      //   required: v => !!v || "Это поле обязательно к заполнению.",
      //   counter: v => v.length <= 15 || "Максимум 15 символов",
      //   phone: v =>
      //     (v ? v.length : 20) >= "+7-(###)-###-##-##".length ||
      //     "Неверно указан номер телефона",
      //   inn: v =>
      //     (v ? v.length : 20) >= "## ## ##### #".length ||
      //     "Неверно указан номер инн",
      //   password: v => (v ? v.length : 8) >= 8 || "Минимум 8 символов",
      //   service_place: v =>
      //     !!v || "Необходимо выбрать колличество рабочих мест."
      // }
    };
  },
  methods: {
    close() {
      this.$store.dispatch("shared/show_modal", false);
    },
    send() {
      if (!this.$refs.form.validate()) return;
      let data = {
        COMPANY_TITLE: this.company_name
          ? `<b>Компания:</b> ${clear_from_tag(this.company_name)}`
          : '<span style="color:gray"><i>Компания не указана</i></span>',
        NAME: `<b>Имя:</b> ${clear_from_tag(this.user_name)}`,
        PHONE_WORK: `<b>Телефон:</b> <a href="tel:${this.user_phone.replace(
          /[^+0-9]/gim,
          ""
        )}">${this.user_phone}</a>`,
        EMAIL_WORK: this.user_mail
          ? `<b>Почта:</b> <a href="mailto:${this.user_mail}">${this.user_mail}</a>`
          : '<span style="color:gray"><i>Почта не указана</i></span>',
        SOURCE_DESCRIPTION: `<b>${this.from} ${this.section}</b>`
      };

      let formData = new FormData();
      let text = "";
      Object.values(data).forEach(value => {
        text += `${value} <br />`;
      });
      formData.append("text", text);
      formData.append("subject", `1clicom: ${this.modal.txt}`);
      formData.append("type", "simple");

      this.$store.dispatch("send", formData).then(() => {
        this.$store.dispatch("shared/show_modal", false);
      });
    }
  },
  computed: {
    modal() {
      return this.$store.state.shared.modal;
    },
    title() {
      switch (this.modal.id.charAt(0)) {
        case "e":
          return "страница лик:эксперт";
        case "h":
          return "домашняя страница";
        case "b":
          return "страница лик:бизнес";
        case "k":
          return "страница лик:контрагент";
        case "m":
          return "страница лик:менеджер";
        case "c":
          return "страница лик:эксперт 1с";
        case "p":
          return "страница для партнеров";
        case "l":
          return "страница личного кабинета";

        default:
          return this.modal.id;
      }
    },
    from() {
      switch (this.modal.id.charAt(0)) {
        case "e":
          return "страница лик:эксперт";
        case "h":
          return "домашняя страница";
        case "b":
          return "страница лик:бизнес";
        case "k":
          return "страница лик:контрагент";
        case "m":
          return "страница лик:менеджер";
        case "c":
          return "страница лик:эксперт 1с";
        case "p":
          return "страница для партнеров";
        case "l":
          return "страница личного кабинета";

        default:
          return this.modal.id;
      }
    },
    section() {
      if (this.modal.id.charAt(1) == "0") {
        return "из шапки страницы";
      } else if (this.modal.id.charAt(1) == "t") {
        return (
          "из таблицы № " +
          this.modal.id.charAt(3) +
          " кнопка № " +
          this.modal.id.charAt(5)
        );
      } else if (this.modal.id.charAt(1) == "p") {
        return "из секции перед таблицой";
      } else {
        return "секции № " + this.modal.id.charAt(1);
      }
    },
    show_header_for_partner() {
      if (this.modal.id.charAt(3) === "1") return "Хочу стать агентом";
      return "Хочу стать партнером";
    },
    modal_title() {
      switch (this.modal.txt) {
        case "Заявка на обратный звонок":
          return "мы перезвоним через пять минут";
        case "Заявка на обучение":
          return "Заявка на обучение";

        default:
          return "мы перезвоним через пять минут";
      }
    }
  },
  mounted() {
    this.rules = get_rules();
  }
};
</script>