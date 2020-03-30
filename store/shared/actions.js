export default {
  setLoading({ commit }, payload) {
    commit("shared/setLoading", payload);
  },
  setSnackbar({ commit }, payload) {
    commit("setError", payload);
  },
  clearSnackbar({ commit }) {
    commit("clearSnackbar");
  },
  show_modal({ commit }, payload) {
    console.log("show_modal))");

    commit("shared/show_modal", payload);
  },
  show_drawer({ commit }, payload) {
    commit("show_drawer", payload);
  }
};
