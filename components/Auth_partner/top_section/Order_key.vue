<template>
  <v-form v-model="valid" ref="form" lazy-validation>
    <v-container>
      <h3 class="display-2 text-center">Заказать ключ</h3>
      <!-- SWITCH TYPE -->
      <v-btn-toggle dense mandatory color="#1976d2" v-model="toggle" class="my-4" rounded>
        <v-btn>Дистрибьютор</v-btn>
        <v-btn>Партнер</v-btn>
      </v-btn-toggle>
      <!-- ОСНОВНАЯ ФОРМА -->
      <app-main-part :toggle="toggle" :rules="rules"></app-main-part>
      <h4 class="headline text-left">{{toggle === 0 ? 'О партнере' : 'О клиенте'}}</h4>
      <!-- ДОПОЛНИТЕЛЬНАЯ ФОРМА -->
      <app-extra-part :toggle="toggle" :rules="rules"></app-extra-part>
      <!-- ФОРМА ДЛЯ ВЫБОРА СЕРВИСОВ -->
      <app-services-form :rules="rules"></app-services-form>
      <!-- ГРУППА КНОПОК -->
      <v-layout class="button-group my-5">
        <v-btn text color="primary" @click="clear">Очистить</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="submit">Отправить</v-btn>
      </v-layout>
      <!-- СНОСКА -->
      <div
        class="text-left font-italic font-weight-light"
      >ВНИМАНИЕ: Заказ ключа означает обязательство со стороны Заказчика по его оплате, согласно условиям договора</div>
      <div
        class="text-left font-italic font-weight-light pt-5"
      >Все лицензии преобретаются сроком на 1 год!</div>
    </v-container>
  </v-form>
</template>

<script>
import appServicesForm from "./Order_key/Services";
import appMainPart from "./Order_key/Main_part";
import appExtraPart from "./Order_key/Extra_part";
export default {
  components: {
    appServicesForm,
    appMainPart,
    appExtraPart
  },
  data: () => ({
    valid: false,
    switch_type: false,
    toggle: 0,
    rules: {
      mail: v =>
        (v ? /^\w+([/.-]?\w+)*@\w+([/.-]?\w+)*(.\w{2,3})+$/.test(v) : true) ||
        "Неправильно указан e-mail.",
      required: v => !!v || "Это поле обязательно к заполнению.",
      counter: v => v.length <= 15 || "Максимум 15 символов",
      phone: v =>
        (v ? v.length : 20) >= "+7-(###)-###-##-##".length ||
        "Неверно указан номер телефона",
      inn: v =>
        (v ? v.length : 20) >= "## ## ##### #".length ||
        "Неверно указан номер инн",
      password: v => (v ? v.length : 8) >= 8 || "Минимум 8 символов",
      service_place: v => !!v || "Необходимо выбрать колличество рабочих мест."
    }
  }),
  computed: {
    // rules() {
    //   return this.$store.getters.rules;
    // },
    test_order_key_form() {
      return this.$store.getters["auth_user_forms_key/test_order_key_form"];
    }
  },
  methods: {
    clear() {
      this.$refs.form.reset();
    },
    submit() {
      if (this.$refs.form.validate()) {
        this.test_order_key_form.type = this.radios;
        let data;
        try {
          data = {
            TITLE: `1clicom.ru: Заявка на ключ от ${
              this.toggle === 0 ? "дистрибьютора" : "партнера"
            }`,
            MAIN_TYPE:
              this.toggle === 0
                ? "<b><i>Дистрибьютор</i></b>"
                : "<b><i>Партнер</i></b>",
            MAIN_TITLE: `<b>Наименование:</b> ${this.test_order_key_form.main.title}`,
            MAIN_MAIL: `<b>Почта:</b> ${this.test_order_key_form.main.mail}`,
            MAIN_NAME: `<b style="margin-bottom: 10px">ФИО:</b> ${this.test_order_key_form.main.name}`
          };
          if (Object.keys(this.test_order_key_form.extra).length != 0) {
            data.EXTRA_TYPE =
              this.toggle === 0
                ? "<b><i>Партнер</i></b>"
                : "<b><i>Клиент</i></b>";
            data.EXTRA_TITLE = `<b>Наименование:</b> ${this.test_order_key_form.extra.title}`;
            data.EXTRA_MAIL = `<b>Почта:</b> ${this.test_order_key_form.extra.mail}`;
          }
          if (Object.keys(this.test_order_key_form.services).length != 0) {
            data.MAIN_SERVICE = `<b style="margin-top: 10px">Выбранная лицензия:</b> лицензия на право использования программы для ЭВМ ${this.render_message(
              this.test_order_key_form.services.select_main.replace(
                "Лицензия ",
                ""
              )
            )} на 1 (одно) основное рабочее место сроком на один год`;
            data.EXTRA_SERVICE = `<b>Выбранная лицензия:</b> доп. лицензия к основному рабочему месту на право использования программы для ЭВМ ${this.render_message(
              this.test_order_key_form.services.select_extra.replace(
                "Доп. лицензия ",
                ""
              )
            )} сроком на один год ${
              this.test_order_key_form.services.select_places
                ? "на " + this.test_order_key_form.services.select_places.text
                : ""
            }`;
          }
        } catch (error) {
          console.log(error);
          this.$store.dispatch("shared/set_snackbar", {
            message: "Произошла ошибка, попробуйте позже",
            color: "error"
          });
          return;
        }

        let formData = new FormData();
        let text = "";
        Object.values(data).forEach(value => {
          text += `${value} <br />`;
        });

        formData.append("text", text);
        formData.append("subject", "1clicom: заказ ключа");
        formData.append("type", "partner");
        this.$store.dispatch("send", formData).then(() => {
          this.$refs.form.reset();
        });
      }
    },
    render_message(name) {
      switch (name) {
        case "ЛИК:ЭКСПЕРТ":
          return `"${name}"`;
        case "ЛИК:КОНТРАГЕНТ":
          return `"${name}" для 1C`;
        case "ЛИК:БИЗНЕС":
          return `"${name}" для 1C или Windows`;
        case "ЛИК:МЕНЕДЖЕР":
          return `"${name}" для Windows`;
        case "ЛИК:БИЗНЕС для 1C:CRM":
          return `"${name.replace(" для 1C:CRM", "")}" для 1C:CRM`;

        default:
          return name;
      }
    }
  }
};
</script>

<style scoped>
.active {
  background: #1976d2;
  color: white;
}

.switcher {
  background: rgb(155, 166, 169);
  border-radius: 100px;
  box-shadow: 0 0 10px 0 grey;
  transition: 0.4s;
}

.switcher__type {
  cursor: pointer;
  height: 100%;
  width: 100%;
  padding: 10px 20px;
  border-radius: 100px;
  text-align: center;
  transition: 0.4s;
}
</style>