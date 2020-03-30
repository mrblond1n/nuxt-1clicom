export default {
  setLoading(state, payload) {
    state.loading = payload;
  },
  setSnackbar(state, payload) {
    state.snackbar.message = payload.message;
    state.snackbar.color = payload.color;
  },
  clearSnackbar(state) {
    state.snackbar.message = "";
    state.snackbar.color = "";
  },
  show_modal(state, payload) {
    console.log(payload);

    state.modal = payload;
  },
  show_drawer(state, payload) {
    state.drawer = payload;
  }
};
