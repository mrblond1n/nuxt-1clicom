<template>
  <section>
    <v-container>
      <v-layout justify-center wrap>
        <app-order-key-form class="form px-5" />
        <app-test-access-form class="form px-5" />
      </v-layout>
    </v-container>
  </section>
</template>

<script>
// import appOrderKeyForm from "./Order_key";
import appOrderKeyForm from "~/components/Forms/OrderKeyForm";
import appTestAccessForm from "./Test_access";
export default {
  components: {
    appOrderKeyForm,
    appTestAccessForm
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.form {
  max-width: 500px;
  min-width: 300px;
}
</style>