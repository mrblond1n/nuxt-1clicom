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
      //
    };
  },
  computed: {
    rules() {
      return this.$store.getters.rules;
    }
  }
};
</script>

<style scoped>
.form {
  max-width: 400px;
}
</style>