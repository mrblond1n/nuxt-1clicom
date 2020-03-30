import * as easings from "vuetify/es5/services/goto/easing-patterns";

export default () => ({
  loading: false,
  snackbar: {
    color: "",
    message: ""
  },
  modal: false,
  rules: {
    mail: v =>
      (v ? /^\w+([/.-]?\w+)*@\w+([/.-]?\w+)*(.\w{2,3})+$/.test(v) : true) ||
      "Неправильно указан e-mail."
    // mail: function(v) {
    //   if (v) {
    //     return /^\w+([/.-]?\w+)*@\w+([/.-]?\w+)*(.\w{2,3})+$/.test(v);
    //   } else {
    //     return "Неправильно указан e-mail.";
    //   }
    // },
    // required: function(v) {
    //   if (!v) return "Это поле обязательно к заполнению.";
    //   return true;
    // },
    // counter: function(v) {
    //   if (v.length <= 15) return true;
    //   return "Максимум 15 символов";
    // },
    // phone: function(v) {
    //   if (v.length >= "## ## ##### #".length) return true;
    //   return "Неверно указан номер телефона";
    // }
  },
  // rules: {
  // mail: v =>
  //   (v ? /^\w+([/.-]?\w+)*@\w+([/.-]?\w+)*(.\w{2,3})+$/.test(v) : true) ||
  //   "Неправильно указан e-mail.",
  //   required: v => !!v || "Это поле обязательно к заполнению.",
  //   counter: v => v.length <= 15 || "Максимум 15 символов",
  //   phone: v =>
  //     (v ? v.length : 20) >= "+7-(###)-###-##-##".length ||
  //     "Неверно указан номер телефона",
  //   inn: v =>
  //     (v ? v.length : 20) >= "## ## ##### #".length ||
  //     "Неверно указан номер инн",
  //   password: v => (v ? v.length : 8) >= 8 || "Минимум 8 символов",
  //   service_place: v => !!v || "Необходимо выбрать колличество рабочих мест."
  // },
  option_scroll: {
    easing: "easeInOutCubic",
    easings: Object.keys(easings),
    duration: 1000,
    offset: 0
  },
  drawer: true
});
