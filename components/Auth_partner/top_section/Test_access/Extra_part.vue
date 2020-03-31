<template>
  <v-row>
    <v-col cols="12" md="12" class="pa-1 px-3">
      <v-text-field
        @change="set_extra_part_access_form"
        dense
        v-model="data.title"
        label="Наименование клиента"
        :rules="bind_client ? [rules.required] : []"
      ></v-text-field>
    </v-col>

    <v-col cols="12" md="12" class="pa-1 px-3">
      <v-text-field
        @change="set_extra_part_access_form"
        dense
        v-model="data.inn"
        v-mask="user_inn_mask"
        label="ИНН клиента"
        :rules="bind_client ? [rules.required, rules.inn] : []"
        required
      ></v-text-field>
    </v-col>

    <v-col cols="12" md="12" class="pa-1 px-3">
      <v-text-field
        @change="set_extra_part_access_form"
        :rules="[rules.mail]"
        dense
        v-model="data.mail"
        label="Email клиента"
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
    },
    bind_client: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      data: {},
      user_inn_mask: "## ## ##### #"
    };
  },
  methods: {
    set_extra_part_access_form() {
      this.$store.dispatch("set_extra_part_access_form", this.data);
    }
  }
};
</script>