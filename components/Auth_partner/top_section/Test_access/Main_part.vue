<template>
  <v-row>
    <v-col cols="12" md="12" class="pa-1 px-3">
      <v-text-field
        @change="set_main_part_access_form"
        dense
        :rules="[rules.required]"
        v-model="data.title"
        label="Наименование партнера"
        required
      ></v-text-field>
    </v-col>

    <v-col cols="12" md="12" class="pa-1 px-3">
      <v-text-field
        @change="set_main_part_access_form"
        dense
        v-model="data.mail"
        :rules="[rules.mail, rules.required]"
        label="Email партнера"
        required
      ></v-text-field>
    </v-col>

    <v-col cols="12" md="12" class="pa-1 px-3">
      <v-text-field
        @change="set_main_part_access_form"
        :rules="[rules.required]"
        dense
        v-model="data.name"
        label="ФИО"
        required
      ></v-text-field>
    </v-col>

    <v-col cols="12" md="12" class="pa-1 px-3">
      <v-text-field
        @change="set_main_part_access_form"
        dense
        v-mask="user_phone_mask"
        :rules="[rules.required, rules.phone]"
        v-model="data.phone"
        label="Телефон"
        required
      ></v-text-field>
    </v-col>
  </v-row>
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
      data: {},
      user_phone_mask: "+7-(###)-###-##-##"
    };
  },
  computed: {
    test_access_form() {
      return this.$store.getters.test_access_form;
    }
  },
  methods: {
    set_main_part_access_form() {
      this.$store.dispatch(
        "auth_user_forms_test/set_main_part_access_form",
        this.data
      );
    }
  }
};
</script>