export default {
  set_current_nav_list(state, payload) {
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
      case "/kontr":
        index = 5;
        break;
      case "/about":
        index = 6;
        break;
      case "/partner_page":
        index = 7;
        break;
      case "/auth_partner":
        index = 8;
        break;
      default:
        index = 0;
        break;
    }
    state.current_navigation_list = state.navigation_lists[index];
  }
};
