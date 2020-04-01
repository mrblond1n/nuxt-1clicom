<template>
  <section>
    <v-container>
      <v-layout justify-space-around wrap>
        <!-- sections -->
        <app-create-user :rules="rules" class="form my-5" />
        <app-reset-pass :rules="rules" class="form my-5" />
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import appCreateUser from "./Create_user";
import appResetPass from "./Reset_pass";
export default {
  components: {
    appCreateUser,
    appResetPass
  },
  data() {
    return {
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
  computed: {
    // rules() {
    //   return this.$store.getters.rules;
    // }
  }
};
</script>

<style scoped>
.form {
  max-width: 400px;
}
</style>