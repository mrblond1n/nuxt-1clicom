export default {
  set_loading({ commit }, payload) {
    commit("set_loading", payload);
  },
  set_snackbar({ commit }, payload) {
    commit("set_snackbar", payload);
  },
  clear_snackbar({ commit }) {
    commit("clear_snackbar");
  },
  show_modal({ commit }, payload) {
    commit("show_modal", payload);
  }
};
