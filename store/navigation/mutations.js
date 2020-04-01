export default {
  set_current_nav_list(state, payload) {
    state.current_navigation_list = state.navigation_lists[payload];
  }
};
