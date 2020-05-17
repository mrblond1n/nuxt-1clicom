export default {
  set_current_nav_list({ commit }, payload) {
    // commit("set_current_nav_list", payload);
  },
  set_current_nav_list_test({ commit }, payload) {
    let index = 0;
    switch (payload) {
      case "/home":
        index = 0;
        break;
      case "/expert":
        index = 1;
        break;
      case "/expert_1c":
        index = 2;
        break;
      case "/business":
        index = 3;
        break;
      case "/manager":
        index = 4;
        break;
      case "/about":
        index = 5;
        break;
      case "/partner_page":
        index = 6;
        break;
      case "/auth_partner":
        index = 7;
        break;
      default:
        index = 0;
        break;
    }
    commit("shared/show_drawer", false, { root: true });
    commit("set_current_nav_list", index);
  }
};
