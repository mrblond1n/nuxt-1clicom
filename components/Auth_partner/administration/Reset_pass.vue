<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <h3 class="display-2 mb-5">Сбросить пароль для пользователя</h3>

    <v-text-field v-model="login" :rules="[rules.required]" label="Логин" required></v-text-field>
    <v-text-field
      v-model="password"
      :rules="[rules.password, rules.required]"
      label="Пароль"
      required
    ></v-text-field>
    <v-layout justify-space-between>
      <v-btn color="indigo" class="pl-0" text @click="generate_pass">Сгенерировать пароль</v-btn>
      <v-btn :disabled="!valid" color="indigo" :dark="valid" @click="validate">Сохранить</v-btn>
    </v-layout>
  </v-form>
</template>

<script>
export default {
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
      login: ""
    };
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        let data = {
          task: "update",
          login: this.login,
          pass: this.password,
          sid: localStorage.sid
        };
        let formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
          formData.append(key, value);
        });
        this.$store
          .dispatch("send_data", { formData, task: data.task })
          .then(() => {
            this.$refs.form.reset();
          });
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
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
    }
  }
};
</script>