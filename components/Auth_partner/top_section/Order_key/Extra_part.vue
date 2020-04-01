<template>
  <v-row>
    <v-col cols="12" md="12" class="pa-1 px-3">
      <v-text-field
        dense
        @change="set_extra_part_order_key_form"
        v-model="data.title"
        :label="toggle === 0 ? 'Наименование партнера' : 'Наименование клиента'"
        required
      ></v-text-field>
    </v-col>

    <v-col cols="12" md="12" class="pa-1 px-3">
      <v-text-field
        dense
        @change="set_extra_part_order_key_form"
        v-model="data.mail"
        :rules="[rules.mail]"
        :label="toggle === 0 ? 'Email партнера' : 'Email клиента'"
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
    set_extra_part_order_key_form() {
      this.$store.dispatch(
        "auth_user_forms_key/set_extra_part_order_key_form",
        this.data
      );
    }
  }
};
</script>