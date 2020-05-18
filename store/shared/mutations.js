export default {
  set_loading(state, payload) {
    state.loading = payload;
  },
  set_snackbar(state, payload) {
    state.snackbar.message = payload.message;
    state.snackbar.color = payload.color;
  },
  clear_snackbar(state) {
    state.snackbar.message = "";
    state.snackbar.color = "";
  },
  show_modal(state, payload) {
    state.modal = payload;
  },
};
