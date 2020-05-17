<template>
  <v-form ref="form" lazy-validation>
    <v-container>
      <h3 class="display-2 text-center mb-5">Заказать тестовый доступ</h3>
      <v-row>
        <v-col cols="12" md="12" class="pa-1 px-3">
          <v-text-field
            dense
            :rules="[rules.required]"
            v-model="main.title"
            label="Наименование партнера"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="12" class="pa-1 px-3">
          <v-text-field
            dense
            v-model="main.mail"
            :rules="[rules.mail, rules.required]"
            label="Email партнера"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="12" class="pa-1 px-3">
          <v-text-field :rules="[rules.required]" dense v-model="main.name" label="ФИО" required></v-text-field>
        </v-col>

        <v-col cols="12" md="12" class="pa-1 px-3">
          <v-text-field
            dense
            v-mask="user_phone_mask"
            :rules="[rules.required, rules.phone]"
            v-model="main.phone"
            label="Телефон"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-checkbox label="Закрепить клиента" v-model="bind_client"></v-checkbox>
      <v-scale-transition>
        <v-row v-if="bind_client">
          <v-col cols="12" md="12" class="pa-1 px-3">
            <v-text-field
              dense
              v-model="extra.title"
              label="Наименование клиента"
              :rules="bind_client ? [rules.required] : []"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="12" class="pa-1 px-3">
            <v-text-field
              dense
              v-model="extra.inn"
              v-mask="user_inn_mask"
              label="ИНН клиента"
              :rules="bind_client ? [rules.required, rules.inn] : []"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="12" class="pa-1 px-3">
            <v-text-field
              :rules="[rules.mail]"
              dense
              v-model="extra.mail"
              label="Email клиента"
              required
            ></v-text-field>
          </v-col>
        </v-row>
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
import { mask } from "vue-the-mask";
export default {
  directives: {
    mask
  },
  data() {
    return {
      user_phone_mask: "+7-(###)-###-##-##",
      user_inn_mask: "## ## ##### #",
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
        service_place: v =>
          !!v || "Необходимо выбрать колличество рабочих мест."
      },
      bind_client: true,
      main: {},
      extra: {}
    };
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
          MAIN_TITLE: `<b>Наименование:</b> ${this.main.title}`,
          MAIN_NAME: `<b>ФИО:</b> ${this.main.name}`,
          MAIN_PHONE: `<b>Email:</b> ${this.main.mail}`,
          MAIN_MAIL: `<b>Телефон:</b> ${this.main.phone}`
        };
        if (this.bind_client) {
          data.EXTRA_BLOCK_TITLE = "<b><i>Клиент</i></b>";
          data.EXTRA_TITLE = `<b>Наименование:</b> ${this.extra.title}`;
          data.EXTRA_INN = `<b>ИНН:</b> ${this.extra.inn}`;
          data.EXTRA_MAIL = `<b>Email:</b> ${this.extra.mail || "не указан"}`;
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

<style lang="scss" scoped>
</style>