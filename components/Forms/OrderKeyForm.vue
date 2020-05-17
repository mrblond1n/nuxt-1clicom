<template>
  <v-form v-model="valid" ref="form" lazy-validation>
    <v-container>
      <h3 class="display-2 text-center">Заказать ключ</h3>
      <!-- SWITCH TYPE -->
      <v-btn-toggle dense mandatory color="#1976d2" v-model="toggle" class="my-4" rounded>
        <v-btn>Дистрибьютор</v-btn>
        <v-btn>Партнер</v-btn>
      </v-btn-toggle>
      <div>
        <v-row>
          <v-col cols="12" md="12" class="pa-1 px-3">
            <v-text-field
              dense
              :rules="[rules.required]"
              v-model="main.title"
              :label="toggle === 0 ? 'Наименование дистрибьютора' : 'Наименование партнера' "
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="12" class="pa-1 px-3">
            <v-text-field
              dense
              v-model="main.mail"
              :rules="[rules.mail]"
              :label=" toggle === 0 ? 'Email дистрибьютора': 'Email партнера'"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="12" class="pa-1 px-3">
            <v-text-field :rules="[rules.required]" dense v-model="main.name" label="ФИО" required></v-text-field>
          </v-col>
        </v-row>
        <h4 class="headline text-left">{{toggle === 0 ? 'О партнере' : 'О клиенте'}}</h4>
        <!-- ДОПОЛНИТЕЛЬНАЯ ФОРМА -->
        <v-row>
          <v-col cols="12" md="12" class="pa-1 px-3">
            <v-text-field
              dense
              v-model="extra.title"
              :label="toggle === 0 ? 'Наименование партнера' : 'Наименование клиента'"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="12" class="pa-1 px-3">
            <v-text-field
              dense
              v-model="extra.mail"
              :rules="[rules.mail]"
              :label="toggle === 0 ? 'Email партнера' : 'Email клиента'"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <h4 class="headline text-left">Выбрать сервис</h4>
          <v-col cols="12" md="12" class="pa-1 px-3">
            <v-select
              dense
              v-model="services.select_main"
              :items="services_list"
              label="Не выбрано"
              solo
            ></v-select>
          </v-col>
          <!-- ДОПОЛНИТЕЛЬНЫЙ СЕРВИС -->
          <h4 class="headline text-left">Выбрать дополнительное рабочее место</h4>
          <v-col cols="12" md="12" class="pa-1 px-3">
            <v-select
              dense
              v-model="services.select_extra"
              :items="extra_services_list.list"
              item-text="title"
              return-object
              single-line
              @change="disabled_item"
              label="Не выбрано"
              solo
            ></v-select>
          </v-col>
          <v-col cols="12" md="12" class="pa-1 px-3">
            <v-select
              dense
              v-model="services.select_places"
              :items="extra_services_list.places"
              item-text="text"
              return-object
              item-disabled="disabled"
              single-line
              label="Не выбрано"
              solo
              :rules="services.select_extra ? [rules.service_place] : []"
              :disabled="!services.select_extra"
            ></v-select>
          </v-col>
        </v-row>
      </div>
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
export default {
  data() {
    return {
      main: {},
      extra: {},
      services: {},
      services_list: [
        "Не выбрано",
        "Лицензия ЛИК:ЭКСПЕРТ",
        "Лицензия ЛИК:БИЗНЕС",
        "Лицензия ЛИК:МЕНЕДЖЕР",
        "Лицензия ЛИК:БИЗНЕС для 1C:CRM"
      ],
      extra_services_list: {
        list: [
          "Доп. лицензия ЛИК:ЭКСПЕРТ",
          "Доп. лицензия ЛИК:БИЗНЕС",
          "Доп. лицензия ЛИК:БИЗНЕС для 1C:CRM"
        ],
        places: [
          { text: "1 раб. место", disabled: false },
          { text: "5 раб. мест", disabled: false },
          { text: "10 раб. мест", disabled: false }
        ]
      },
      toggle: 0,
      valid: false,
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
      }
    };
  },
  methods: {
    clear() {
      this.$refs.form.reset();
    },
    disabled_item(val) {
      this.services.select_places = "";
      this.extra_services_list.places.forEach(el => {
        el.disabled = false;
      });
      if (val === "Доп. лицензия ЛИК:ЭКСПЕРТ") {
        this.extra_services_list.places[1].disabled = true;
        this.extra_services_list.places[2].disabled = true;
      } else {
        this.extra_services_list.places[0].disabled = true;
      }
      // this.set_form();
    },
    submit() {
      if (this.$refs.form.validate()) {
        this.form_data.type = this.toggle;
        console.log(this.form_data);

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
            MAIN_TITLE: `<b>Наименование:</b> ${this.form_data.main.title}`,
            MAIN_MAIL: `<b>Почта:</b> ${this.form_data.main.mail}`,
            MAIN_NAME: `<b style="margin-bottom: 10px">ФИО:</b> ${this.form_data.main.name}`
          };
          if (Object.keys(this.form_data.extra).length != 0) {
            data.EXTRA_TYPE =
              this.toggle === 0
                ? "<b><i>Партнер</i></b>"
                : "<b><i>Клиент</i></b>";
            data.EXTRA_TITLE = `<b>Наименование:</b> ${this.form_data.extra.title}`;
            data.EXTRA_MAIL = `<b>Почта:</b> ${this.form_data.extra.mail}`;
          }
          if (Object.keys(this.form_data.services).length != 0) {
            data.MAIN_SERVICE = `<b style="margin-top: 10px">Выбранная лицензия:</b> лицензия на право использования программы для ЭВМ ${this.render_message(
              this.form_data.services.select_main.replace("Лицензия ", "")
            )} на 1 (одно) основное рабочее место сроком на один год`;
            data.EXTRA_SERVICE = `<b>Выбранная лицензия:</b> доп. лицензия к основному рабочему месту на право использования программы для ЭВМ ${this.render_message(
              this.form_data.services.select_extra.replace("Доп. лицензия ", "")
            )} сроком на один год ${
              this.form_data.services.select_places
                ? "на " + this.form_data.services.select_places.text
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

<style lang="scss" scoped>
</style>