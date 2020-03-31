<template>
  <v-card>
    <v-card-title class="headline">Вход в личный кабинет</v-card-title>
    <v-card-text>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          prepend-icon="mdi-account"
          name="login"
          placeholder=" "
          label="Логин"
          type="login"
          :rules="loginRules"
          color="#005B9B"
          v-model="login"
        ></v-text-field>
        <v-text-field
          prepend-icon="mdi-lock"
          name="password"
          placeholder=" "
          label="Пароль"
          color="#005B9B"
          :rules="passRules"
          v-model="password"
          @keydown.enter="onSubmit"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show ? 'text' : 'password'"
          @click:append="show = !show"
        ></v-text-field>
      </v-form>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" text @click="close">Отмена</v-btn>
      <v-btn color="primary" dark @click="onSubmit">Войти</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      show: false,
      login: "",
      password: "",
      valid: false,
      loginRules: [v => !!v || "Login is required"],
      passRules: [v => !!v || "Password is required"]
    };
  },
  methods: {
    close() {
      this.$store.dispatch("shared/show_modal", false);
    },
    onSubmit() {
      if (this.$refs.form.validate()) {
        const user = {
          user_name: this.login.toLowerCase(),
          user_pass: this.password
        };
        this.$store.dispatch("user/user_login", user).then(res => {
          if (!res) return;
          this.$store.dispatch("get_user_info", res);
          this.$store.dispatch("shared/show_modal", false);
          this.$router.push("/auth_partner");
          this.$store.dispatch(
            "navigation/set_current_nav_list",
            "/auth_partner"
          );
        });
        this.close();
      }
    }
  }
};
</script>