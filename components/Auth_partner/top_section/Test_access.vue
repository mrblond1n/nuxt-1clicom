<template>
  <v-form ref="form" lazy-validation>
    <v-container>
      <h3 class="display-2 text-center mb-5">Заказать тестовый доступ</h3>
      <app-main-part :rules="rules"></app-main-part>
      <v-checkbox label="Закрепить клиента" v-model="bind_client"></v-checkbox>
      <v-scale-transition>
        <app-extra-part v-if="bind_client" :bind_client="bind_client" :rules="rules"></app-extra-part>
      </v-scale-transition>
      <!-- ГРУППА КНОПОК -->
      <v-layout class="button-group my-5">
        <v-btn text color="primary" @click="clear">Очистить</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="submit">Отправить</v-btn>
      </v-layout>
      <!-- СНОСКА -->
      <div
        class="text-left font-italic font-weight-light"
      >ВНИМАНИЕ: Тестовый доступ предоставляется на 3 дня и имеет ограничение на 350 запросов в сутки</div>
      <div
        class="text-left font-italic font-weight-light pt-5"
      >Заполнение формы нужно для того, чтобы мы смогли закрепить Вашего клиента в общей базе клиентов ЛИК и избежать пересечения</div>
    </v-container>
  </v-form>
</template>

<script>
import appMainPart from "./Test_access/Main_part";
import appExtraPart from "./Test_access/Extra_part";
export default {
  components: { appMainPart, appExtraPart },
  data: () => ({
    bind_client: true,
    render_data: {},
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
    test_access_form() {
      return this.$store.getters["auth_user_forms_test/test_access_form"];
    }
  },
  methods: {
    clear() {
      this.$refs.form.reset();
    },
    submit() {
      if (this.$refs.form.validate()) {
        let data = {
          TITLE: !this.bind_client
            ? "1clicom: Заявка на тестовый доступ"
            : "1clicom: Заявка на тестовый доступ + закрепить клиента",
          BLOCK_TITLE: "<b><i>Партнер</i></b>",
          MAIN_TITLE: `<b>Наименование:</b> ${this.test_access_form.main.title}`,
          MAIN_NAME: `<b>ФИО:</b> ${this.test_access_form.main.name}`,
          MAIN_PHONE: `<b>Email:</b> ${this.test_access_form.main.mail}`,
          MAIN_MAIL: `<b>Телефон:</b> ${this.test_access_form.main.phone}`
        };
        if (this.bind_client) {
          data.EXTRA_BLOCK_TITLE = "<b><i>Клиент</i></b>";
          data.EXTRA_TITLE = `<b>Наименование:</b> ${this.test_access_form.extra.title}`;
          data.EXTRA_INN = `<b>ИНН:</b> ${this.test_access_form.extra.inn}`;
          data.EXTRA_MAIL = `<b>Email:</b> ${this.test_access_form.extra.mail ||
            "не указан"}`;
        }
        let formData = new FormData();
        let text = "";
        Object.values(data).forEach(value => {
          text += `${value} <br />`;
        });

        formData.append("text", text);
        formData.append("subject", "1clicom: тестовый доступ");
        formData.append("type", "partner");

        this.$store.dispatch("send", formData).then(() => {
          this.$refs.form.reset();
        });
      }
    }
  }
};
</script>