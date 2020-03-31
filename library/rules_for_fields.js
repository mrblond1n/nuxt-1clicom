export const strict = false;

export default () => ({
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
    service_place: v => !!v || "Необходимо выбрать колличество рабочих мест."
  }
});
