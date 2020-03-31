export default {
  set_user(state, payload) {
    state.user = payload;
  },
  set_super_user(state, payload) {
    state.super_user = payload;
  }
};
