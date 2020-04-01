<template>
  <v-row>
    <v-col cols="12" md="12" class="pa-1 px-3">
      <v-text-field
        @change="set_main_part_order_key_form"
        dense
        :rules="[rules.required]"
        v-model="data.title"
        :label="toggle === 0 ? 'Наименование дистрибьютора' : 'Наименование партнера' "
        required
      ></v-text-field>
    </v-col>

    <v-col cols="12" md="12" class="pa-1 px-3">
      <v-text-field
        @change="set_main_part_order_key_form"
        dense
        v-model="data.mail"
        :rules="[rules.mail]"
        :label=" toggle === 0 ? 'Email дистрибьютора': 'Email партнера'"
        required
      ></v-text-field>
    </v-col>

    <v-col cols="12" md="12" class="pa-1 px-3">
      <v-text-field
        @change="set_main_part_order_key_form"
        :rules="[rules.required]"
        dense
        v-model="data.name"
        label="ФИО"
        required
      ></v-text-field>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    toggle: {
      type: Number,
      default: 0
    },
    rules: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      data: {}
    };
  },
  methods: {
    set_main_part_order_key_form() {
      this.$store.dispatch(
        "auth_user_forms_key/set_main_part_order_key_form",
        this.data
      );
    }
  }
};
</script>