<template>
  <div>
    <!-- ОСНОВНОЙ СЕРВИС -->
    <h4 class="headline text-left">Выбрать сервис</h4>
    <v-select
      dense
      @change="set_services_order_key_form"
      v-model="data.select_main"
      :items="services"
      label="Не выбрано"
      solo
    ></v-select>
    <!-- ДОПОЛНИТЕЛЬНЫЙ СЕРВИС -->
    <h4 class="headline text-left">Выбрать дополнительное рабочее место</h4>
    <v-select
      dense
      v-model="data.select_extra"
      :items="extra_services.list"
      item-text="title"
      return-object
      single-line
      @change="disabled_item"
      label="Не выбрано"
      solo
    ></v-select>
    <v-select
      dense
      v-model="data.select_places"
      :items="extra_services.places"
      item-text="text"
      @change="set_services_order_key_form"
      return-object
      item-disabled="disabled"
      single-line
      label="Не выбрано"
      solo
      :rules="data.select_extra ? [rules.service_place] : []"
      :disabled="!data.select_extra"
    ></v-select>
  </div>
</template>

<script>
export default {
  props: {
    rules: {
      type: Object,
      default: () => {}
    }
  },
  data: () => ({
    data: {},
    services: [
      "Не выбрано",
      "Лицензия ЛИК:ЭКСПЕРТ",
      "Лицензия ЛИК:КОНТРАГЕНТ",
      "Лицензия ЛИК:БИЗНЕС",
      "Лицензия ЛИК:МЕНЕДЖЕР",
      "Лицензия ЛИК:БИЗНЕС для 1C:CRM"
    ],
    extra_services: {
      list: [
        "Доп. лицензия ЛИК:ЭКСПЕРТ",
        "Доп. лицензия ЛИК:КОНТРАГЕНТ",
        "Доп. лицензия ЛИК:БИЗНЕС",
        "Доп. лицензия ЛИК:БИЗНЕС для 1C:CRM"
      ],
      places: [
        { text: "1 раб. место", disabled: false },
        { text: "5 раб. мест", disabled: false },
        { text: "10 раб. мест", disabled: false }
      ]
    }
  }),
  methods: {
    disabled_item(val) {
      this.data.select_places = "";
      this.extra_services.places.forEach(el => {
        el.disabled = false;
      });
      if (val === "Доп. лицензия ЛИК:ЭКСПЕРТ") {
        this.extra_services.places[1].disabled = true;
        this.extra_services.places[2].disabled = true;
      } else {
        this.extra_services.places[0].disabled = true;
      }
      this.set_services_order_key_form();
    },
    set_services_order_key_form() {
      this.$store.dispatch("set_services_order_key_form", this.data);
    }
  }
};
</script>