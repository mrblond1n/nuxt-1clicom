export default {
  set_main_part_order_key_form(state, payload) {
    state.form.main = payload;
  },
  set_extra_part_order_key_form(state, payload) {
    state.form.extra = payload;
  },
  set_services_order_key_form(state, payload) {
    state.form.services = payload;
  }
};
