<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <h3 class="display-2 mb-5">Создать нового пользователя</h3>
    <v-text-field v-model="login" :rules="[rules.required]" label="Логин" required></v-text-field>
    <v-text-field
      v-model="password"
      :rules="[rules.password, rules.required]"
      label="Пароль"
      required
    ></v-text-field>

    <v-text-field v-model="name" :rules="[rules.required]" label="ФИО" required></v-text-field>
    <v-text-field
      v-model="phone"
      v-mask="phone_mask"
      :rules="[rules.phone, rules.required]"
      label="Телефон"
      required
    ></v-text-field>
    <v-text-field v-model="mail" :rules="[rules.mail]" label="Email"></v-text-field>
    <v-layout justify-space-between>
      <v-btn color="indigo" class="pl-0" text @click="generate_pass">Сгенерировать пароль</v-btn>
      <v-btn :disabled="!valid" :dark="valid" color="indigo" @click="validate">Создать</v-btn>
    </v-layout>
  </v-form>
</template>

<script>
import { mask } from "vue-the-mask";
export default {
  directives: {
    mask
  },
  props: {
    rules: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      valid: true,
      password: "",
      login: "",
      mail: "",
      name: "",
      phone: "",
      phone_mask: "+7 (###) ###-##-##"
    };
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        let data = {
          task: "add",
          login: this.login,
          pass: this.password,
          user_name: this.name,
          phone: this.phone,
          email: this.mail,
          sid: localStorage.sid
        };
        let formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
          formData.append(key, value);
        });
        this.$store.dispatch("send", { formData, task: data.task }).then(() => {
          this.$refs.form.reset();
        });
      }
    },
    generate_pass() {
      let length = 8,
        charset =
          "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
      for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
      }
      this.password = retVal;
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>